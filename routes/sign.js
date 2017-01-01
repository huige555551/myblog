// POST
var User = require("../modules/user");
var mongoose = require('mongoose');
exports.signinPost = function (req, res) {
    var user = req.body;
    req.session.user = user;
    var userEntity = new User(user);
    console.log(user);
    userEntity.checkIsAdmin(req.body.username).then(function(user){
        req.session.user.isAdmin = true;
    });
    userEntity.checkUserValid(req.body.username, req.body.password).then(function (user) {
        res.json( true );
    }).catch(function (error) {
        res.json(false);
        // res.render('partials/signin', {title: '登陆', error: "用户名或者密码错误"});
    });

};

exports.signupPost = function (req, res) {
    var user = req.body;
    req.session.user = user;
    console.log(user)
    var userEntity = new User(user);
    User.findOne({
        $or: [{ 'username': user.username }, { 'studentId': user.studentId },
            { 'telephone': user.telephone }, { "email": user.email }
        ]
    })
        .then(function(docs) {
            if (docs)
                res.json(false);
                // res.render('signup', { title: '注册', error: '重复注册消息' });

            else {
                userEntity.save(function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Save", data);
                    }
                });
                res.json(true);
            }
        });
}
exports.signout = function (req, res) {
    delete req.session.user;
    console.log("session has been deleted!");
    res.json(true);
};

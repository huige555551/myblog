
/*
 * GET home page.
 */

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};



// var express = require('express');
// var router = express.Router();
// var User = require("../modules/user");
// var mongoose = require('mongoose');
//
// /* GET detail page. */
// // router.get('/signup', function(req, res, next) {
// //   res.render('signup', { title: '注册', user: {} });
// // });
//
// router.post('/signup', function(req, res, next) {
//
//   var user = req.body;
//   req.session.user = user;
//   var userEntity = new User(user);
//   User.findOne({
//     $or: [{ 'username': user.username }, { 'studentId': user.studentId },
//       { 'telephone': user.telephone }, { "email": user.email }
//     ]
//   })
//       .then(function(docs) {
//         if (docs)
//           res.render('signup', { title: '注册', error: '重复注册消息' });
//
//         else {
//           userEntity.save(function(err, data) {
//             if (err) {
//               console.log(err);
//             } else {
//               console.log("Save", data);
//             }
//           });
//           res.redirect("/detail");
//         }
//       });
//   // userEntity.checkUser(function(err,docs){
//   // 	if(docs!=null)
//   // 		res.render('signup', { title: '注册' ,error:'重复注册消息'});
//   // 	else{
//   // 		userEntity.save(function (err, data) {
//   // 			if (err) {
//   // 				console.log(err);
//   // 			} else {
//   // 				console.log("Save", data);
//   // 			}
//   // 		})
//   // 		res.redirect("/detail");
//   // 	}
//   // })
// });
// router.get('/signin', function(req, res, next) {
//   res.render('signin', { title: '登陆', user: {} });
// });
//
// // router.post('/signin', function(req, res, next) {
// //     var user = req.body;
// //         User.findOne({ "username": req.body.username, "password": req.body.password }).then(function(docs) {
// //            if(docs) {
// //                 req.session.user = docs;
// //                 res.render('detail', { title: '登陆', user: docs });
// //             }
// //             else
// //                 res.render('signin', { title: '登陆', error: "用户名或者密码错误" });
// //         })
// //
// // });
//
// router.post('/signin', function(req, res, next) {
//   var user = req.body;
//   var userEntity = new User(user);
//   userEntity.checkUserValid(req.body.username,req.body.password).then(function(user){
//     res.render('detail', { title: '登陆', user: user });
//   }).catch(function(error){
//     res.render('signin', { title: '登陆', error: "用户名或者密码错误" });
//   });
// });
// router.get("/signout", function() {
//   delete req.session.user;
//   res.render("/signup", { title: "注册", user: user });
// })
// router.all("*", function(req, res, next) {
//   req.session.user ? next() : res.redirect("/signin");
// })
//
//
// router.get('/detail', function(req, res, next) {
//   res.render('detail', { user: req.session.user });
// });
//
// module.exports = router;


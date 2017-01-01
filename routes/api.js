/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
// var data = {
//     "posts": [
//         {
//             "title": "Lorem ipsum",
//             "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         },
//         {
//             "title": "Sed egestas",
//             "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
//         }
//     ]
// };
var Artical = require("../modules/artical");
var Comment = require("../modules/comment");
var mongoose = require('mongoose');
var User = require("../modules/user");
// GET

exports.posts = function (req, res) {
    var posts =[];
    console.log("session",req.session.user.username);
    Artical.find({}, function (err, docs) {
        res.json({
            posts: docs,
            user : req.session.user
        });
    });
};

exports.post = function (req, res) {
    var id = req.params.id;

    // if (id >= 0 && id < data.posts.length) {
    Artical.findOne({"_id":id}, function (err, docs) {

        res.json({
            post: docs

        });
    });

    // } else {
    //     res.json(false);
    // }
};

// POST

exports.addPost = function (req, res) {
    var artical = req.body;
    artical.username = req.session.user.username;
    var ArticalEntity = new Artical(artical);
    console.log(artical);
    ArticalEntity.save(function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("Save Artical", data);
        }
        res.json(true);
    });
};


// PUT

exports.editPost = function (req, res) {
    var id = req.params.id;
    console.log(req.body.title,id);

    Artical.findByIdAndUpdate(id,{$set:{ 'title':req.body.title,'text':req.body.text}},function(err,docs){
        if(err)
            console.log(err);
        else
            res.json(true);
    });
};

exports.hiddenPost = function (req,res) {
    var id = req.params.id;
    var hidden = false;
    Artical.findOne({'_id':id}).then(function(data){
        Artical.findByIdAndUpdate(id,{$set:{"hidden":!data.hidden}},function(err,docs){
            if(err)
                console.log(err)
            else
                res.json(true);
        });
    });

}
// DELETE

exports.deletePost = function (req, res) {
    var id = req.params.id;
    Artical.remove({"_id":id},function(err){
        if(err) {
            console.log(err);
            res.json(false);
        }
        else{
            console.log('delete artical ok!');
            Comment.remove({'articalId':id},function(err){
                res.json(true);
            });
        }
    });
};
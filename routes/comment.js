var Comment = require("../modules/comment");
var mongoose = require('mongoose');
exports.commentPost = function (req, res) {
    var articalId = req.params.id;
    var comment = req.body;
    comment.articalId = articalId;
    console.log(comment)
    var commentEntity = new Comment(comment);
    commentEntity.save(function(err,data){
        if (err) {
            console.log(err);
            res.json(false);
        }
        else {
            console.log("Save",data);
            res.json(true);
        }
    });
}
exports.comments = function (req, res) {
    var articalId = req.params.id;
    Comment.find({"articalId":articalId}).
        then(function (data) {
        res.json({
            comments:data
        })
    });
}
exports.deleteComment = function (req, res) {
    var commentId = req.params.commentId;
    Comment.remove({'_id': commentId}, function (err) {
        if (err)
            return res.json(false);
        else {
            console.log('delete comment!');
            return res.json(true);
        }
    });
}
exports.editComment = function (req, res) {
    var commentId = req.params.commentId;
    Comment.findByIdAndUpdate(commentId, {$set: {"commentText":req.body.commentTextEdit}}, function(err, docs){
        if(err)
            res.json(false);
        else{
            res.json(true);
        }
    })
}
exports.hiddenComment = function (req, res) {
    var commentId = req.params.commentId;
    Comment.find({'_id':commentId}).then(function(docs){
        Comment.findByIdAndUpdate(commentId, {$set: {"hidden":!docs.hidden}}, function(err, docs){
            if(err)
                res.json(false);
            else
                res.json(true);

        })
    })

}
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = {
    articalId : Object,
    hidden : {type: Boolean, default: false},
    commentText: String,
    commentUser: String,
    commentTime: {type: Date, default: Date.now}
};
// 通过文章 id 获取该文章下所有留言，按留言创建时间升序
// commentSchema.methods.addComment = function (articalId, aComment) {
//     Artical.find({"_id": articalId}).then(function (artical) {
//         artical.comment.push(aComment);
//         return Artical.findByIdAndUpdate(id, {$set: {'comment': artical.comment}}, function (err, docs) {
//             if (docs)
//                 return Promise.resolve(docs);
//             else {
//                 return Promise.reject(err);
//             }
//         });
//     });
// }
// 通过用户 id 和留言 id 删除一个留言
// commentSchema.methods.de
var Comment= mongoose.model("Comment", commentSchema);
module.exports = Comment;

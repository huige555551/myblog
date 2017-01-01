var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var articalSchema = new Schema({
    hidden      : {type: Boolean, default: false},
    title       : String,
    text        : String,
    username    : String,
    articalTime : {type: Number, default: Date.now()}

});


var Artical = mongoose.model("Artical", articalSchema);

module.exports = Artical;



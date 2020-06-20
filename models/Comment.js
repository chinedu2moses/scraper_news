var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var CommentsSchema = new Schema({
    title: {
        type: String,
        
    },
    body: {
        type: String,
        required: true
    },

});
var Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
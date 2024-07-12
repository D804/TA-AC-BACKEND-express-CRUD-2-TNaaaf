let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    author: { type: String, required: true },
    like: { type: Number, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Article', ArticleSchema);

/**
 * Created by xunhe on 2017/3/26.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/20160326crawl');
var MovieSchema = new mongoose.Schema({
   name:String,
    url:String
});
//定义模型
module.exports = mongoose.model('Movie',MovieSchema);
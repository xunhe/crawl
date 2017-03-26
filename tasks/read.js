/**
 * url 这是一个要读取的url地址
 * callback回调函数
 */
var request = require('request');
var  iconv = require('iconv-lite');
var cheerio = require('cheerio');
let debug = require('debug');
var logger = debug('crawl:read');
module.exports = function (url,callback) {
    request({url,encoding:null},function (err,response,body) {
        //把响应体对象转换成类似于jquery对象
        body = iconv.decode(body,'gbk');
        var movies = [];
        var $ = cheerio.load(body);
        //通过筛选符找哦出我们想要的电影标题
        $('.keyword .list-title').each(function () {
            var $this = $(this);
            let movie = {
                name:$this.text(),
                url:$this.attr('href')
            };
            logger(`读取到电影:${movie.name}`);
            movies.push(movie);
        });
        callback(err,movies);
    });
};
// var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
// module.exports(url,function (err,data) {
//     console.log(data);
// });
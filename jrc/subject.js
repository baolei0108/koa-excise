console.log('subject')
var doT = require("doT");
var template = require("../modules/templates/subject/subject.html");
var getData = require("../modules/subject");


module.exports = {
    init: function () {
        console.log('init')
        this.getsub();
    },
    getsub: function () {
        var data = getData.getData();
        data.then(function (res) {
            var myarr = res.result.Result;

            var tempfn = doT.template(template);
            var html = tempfn({
                "array": myarr
            });
            $(".subject .content").html(html);
        })

    }

    
}


//跨域方法一
var pars = {
    token: "70f12f2f4f091e459a279469fe49eca5",
    st: "xzkltgfsl",
    sr: -1,
    p: 1,
    ps: 1,
    type: "XSJJ_NJ_GD",
    filter: "(gdmc='" + '其实' + "')"
}

var geturl = "http://dcfm.eastmoney.com/em_mutisvcexpandinterface/api/js/get?js=callback111((x))";
//var geturl = "http://cmsdataapi.test.emapd.com/api/Media/GetMediaByPinYin?pinyin=zhongguozhengquanbao";
var fullurl = "";
$.ajax({
    type: "get",
    data: pars,
    url: geturl,
    dataType: "jsonp",
    jsonp: "js",
    jsonpCallback: "callback111",
    success: function (msg) {
        console.log('方法一')
        console.log(msg)

    }
});
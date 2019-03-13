var axios = require('axios');
// var config = require('../../config');


module.exports = {
    get: async function(url, pars) {
        // var url = config.getUrl("apiurl") + url;
        // var url = "http://dcfm.eastmoney.com/EM_MutiSvcExpandInterface/api/js/get?type=SOSUO_LB&token=70f12f2f4f091e459a279469fe49eca5&filter=(CompanyCode='" +
        // "80140708" + "')";
        var url = "http://cmsdataapi.test.emapd.com/api/Media/GetMediaByPinYin?pinyin=zhongguozhengquanbao";
        try {
            let back = await axios.get(url, {
                params: pars
            });

            return back.data
        } catch (error) {
        
        }


    },
    get2: async function(url, pars) {
        var url = "http://dcfm.eastmoney.com/em_mutisvcexpandinterface/api/js/get?js=callback111((x))";
        var pars = {
            token: "70f12f2f4f091e459a279469fe49eca5",
            st: "xzkltgfsl",
            sr: -1,
            p: 1,
            ps: 1,
            type: "XSJJ_NJ_GD",
            filter: "(gdmc='" + '其实' + "')"
        };
        try {
            let back = await axios.get(url, {
                params: pars
            });

            return back.data
        } catch (error) {
        
        }

    }

}
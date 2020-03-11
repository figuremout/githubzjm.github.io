// init typist
new Typist(document.querySelector(".typist"), {
    letterInterval: 60,
    textInterval: 1000
});

// search-box
$(".btn").on("click", function(){
    $(".search-input").toggleClass("inclicked");
    $(".btn").toggleClass("close");

    // 设置placeholder，打开时显示，关闭时隐藏
    // 同时根据placeholder判断输入框开关状态，设置焦点，打开时聚焦，关闭时失去焦点
    var placeholder = "search/ | transl/ | >cmd | >pwd";
    if ($(".search-input").attr('placeholder') != ""){
        $(".search-input").attr('placeholder', "");
        $(".search-input").blur();
    }else{
        $(".search-input").attr('placeholder', placeholder);
        $(".search-input").focus();
    }
});
$('.search-input').keydown(function(e){
    var key = e.which;
    if (key == 13){// 13 means <Enter>
        var encoded = encodeURIComponent(this.value);
        /*search Usage: engine/content */
        var url = "http://www.baidu.com/s?wd=" + encoded;//默认使用baidu
        if (/^baidu%2F(%20)*/i.test(encoded)){
            url = encoded.replace(/^baidu%2F(%20)*/i, "http://www.baidu.com/s?wd=");//百度
        }
        else if(/^zhihu%2F(%20)*/i.test(encoded)){
            url = encoded.replace(/^zhihu%2F(%20)*/i, 'https://www.zhihu.com/search?type=content&q=');//知乎
        }
        else if(/^bing%2F(%20)*/i.test(encoded)){
            url = encoded.replace(/^bing%2F(%20)*/i, 'https://cn.bing.com/search?q=');//必应
        }
        else if(/^bili%2F(%20)*/i.test(encoded)){
            url = encoded.replace(/^bili%2F(%20)*/i, 'https://search.bilibili.com/all?keyword=');//bilibili
        }
        else if(/^github%2F(%20)*/i.test(encoded)){
            url = encoded.replace(/^github%2F(%20)*/i, 'https://github.com/search?utf8=%E2%9C%93&q=');//github
        }
        /*translate Usage: transl/content */
        else if(/^transl%2F(%20)*/i.test(encoded)){
            var zh_re = new RegExp("[\u4E00-\u9FA5]+ | [0-9]+");
            var en_re = new RegExp("[A-Za-z]+");
            if(zh_re.test(encoded)){
                url = encoded.replace(/^transl%2F(%20)*/i, 'https://fanyi.baidu.com/?aldtype=85#zh/en/');//中翻英
            }
            else if(en_re.test(encoded)){
                url = encoded.replace(/^transl%2F(%20)*/i, 'https://fanyi.baidu.com/?aldtype=85#en/zh/');//英翻中
            }
        }
        /*cmd Usage: > cmd */
        else if(/^%3E(%20)*csdn/i.test(encoded)){
            url = 'https://me.csdn.net/qq_43536897';//csdn personal page
        }
        else if(/^%3E(%20)*leetcode/i.test(encoded)){
            url = 'https://leetcode-cn.com/problemset/all/';//leetcode
        }
        else if(/^%3E(%20)*github/i.test(encoded)){
            url = 'https://github.com/';//github
        }
        window.open(url);
        /* clear the input
        this.value = "";
        */
    }
})

// for fun
console.log([
    ' _________________',
    '/__________     / |',
    '|_________/    /  /',
    '         /    /  /',
    '        /    /  /',
    '       /    /  /',
    '      /    /  /',
    '     /    /  /',
    '    /    /  /',
    '   /    /  /',
    '  /    /__/____J__M__',
    ' /__________________/|',
    ' |__________________|/'



].join('\n'));

//alert("注意：\n1. 由于网页响应式设计的问题，推荐使用大屏设备（PC/iPad）打开！\n2. 第一次加载会比较缓慢，之后会有较大改善。\n---Best Regards From ZJM");

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
        else if(/^git%2F(%20)*/i.test(encoded)){
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
        else if(/^%3E(%20)*git/i.test(encoded)){
            url = 'https://github.com/';//github
        }
        window.open(url);
        /* clear the input
        this.value = "";
        */
    }
})

// open QQ
function openQQ() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod", "pad", "pod", "ios", "Mobile", "BlackBerry",
    "IEMobile", "phone", "BlackBerry", "IEMobile", "MQQBrowser", "JUC", "Fennec", "wOSBrowser", "BrowserNG", "WebOS", "Symbian", "Windows Phone"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    var a = document.getElementById('qq');
    if (flag == true){
        a.href = "http://wpa.qq.com/msgrd?v=3&uin=2427394482&site=qq&menu=yes"
    }else{
        a.href = "mqqwpa://im/chat?chat_type=wpa&uin=2427394482&version=1&src_type=web&web_src=githubzjm.github.io";
    }
}

// scroll-to-top button
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 750) {
        $('.scroll-top').addClass('scroll-active');
    } else {
        $('.scroll-top').removeClass('scroll-active');
    }
    return false;
});
$('.scroll-top').click(function () {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 550);
});
$('.scroll-top').click(function () {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 550);
});

// active progress bar when reach that page at the first time,
// and make that change the progress with just modifying the div's text be possible
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        // get every single element and add animation class to them
        $('.percent').each(function(){
            var num = $(this).text().replace("%", "");
            $(this).parent('li').addClass('p'+num);
        })
    } 
    return false;
});

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

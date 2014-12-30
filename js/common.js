$(function () {
    var silde_nav=$(".slide .silde_nav"),
        slide_right = silde_nav.find(".slide_right"),
        left_nav_Li = silde_nav.find(">.left .left_nav > li"),
        silde_nav_menu = $(".silde_nav_menu"),
        timeOver,
        silde_navTimeOver;
    $("body").click(function () {
        slide_right.fadeOut();
        slide_right.find(">li").fadeOut();
        left_nav_Li.removeClass("active");
    });
    silde_nav.hover(function () {
        clearTimeout(silde_navTimeOver);
        silde_nav.show();
    }, function () {
        hoverOversilde_nav();
    });

    silde_nav_menu.hover(function () {
        clearTimeout(silde_navTimeOver);
        silde_nav.show();
    }, function () {
        hoverOversilde_nav();
    });
    function hoverOversilde_nav() {
        clearTimeout(silde_navTimeOver);
        silde_navTimeOver = setTimeout(function () {
            if (silde_nav_menu.length >= 1) { 
                silde_nav.hide();
            }
        }, 200);
    }
    left_nav_Li.each(function (i) {
        var that = $(this),
            slide_right_li = slide_right.find(">li").eq(i);
        slide_right_li.hover(function () {
            clearTimeout(timeOver);
        }, function () {
            hoverOver();
        });
        that.hover(function () {
            clearTimeout(timeOver);
            timeOver = setTimeout(function () {
                that.addClass("active").siblings("li").removeClass("active");
                slide_right.show();
                slide_right_li.show().siblings("li").hide();
            }, 200);
        }, function () {
            hoverOver();
        });
        function hoverOver() {
            clearTimeout(timeOver);
            timeOver = setTimeout(function () {
                that.removeClass("active");
                slide_right.hide();
                slide_right_li.hide();
            }, 200);
        }
    });
    $(".go_top").click(function () {
        $("html,body").animate({ "scrollTop": 0 }, 200);
    });

    
});

//倒计时
$.fn.extend({
    Countdown: function (options) {
        var that = this,
            el = $(that);
        that.options = {
            "day": el.find(".day"),
            "hour": el.find(".hour"),
            "minute": el.find(".minute"),
            "second": el.find(".second"),
            "callback": function () { }
        }
        for (var i in options) {
            this.options[i] = options[i];
        }
        function getDate(strDate) {
            var date = eval('new Date(' + strDate.replace(/\d+(?=-[^-]+$)/, function (a) {
                return parseInt(a, 10);
            }).match(/\d+/g) + ')');
            return date;
        }
        var opt = that.options,
            startTime = new Date(),
            nMS = getDate(el.attr("data-time")).getTime() - startTime.getTime();
        var setIntv = setInterval(function () {
            var nH = (Math.floor(nMS / (1000 * 60 * 60)) % 24) % 60;
            //定义获得小时
            var nM = (Math.floor(nMS / (1000 * 60)) % 60) % 60;
            //定义获得分钟
            var nS = (Math.floor(nMS / 1000) % 60) % 60;
            //定义获得秒

            opt.second.html(nS);
            opt.minute.html(nM);
            opt.hour.html(nH);
            nMS -= 1000;

            if (nH == 0 && nM == 0 && nS == 0) {
                clearInterval(setIntv);
                opt.callback(that);
            }
        }, 1000);
    }
});
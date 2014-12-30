$(function () {
    $(".product > .left > .nav_list > .title2").each(function (i) {
        var that = $(this),
            list = $(".product > .left > .nav_list > .list").eq(i);
        that.click(function () {
            if (that.hasClass("active")) {
                that.removeClass("active");
                list.slideUp(function () {
                    list.removeClass("active")
                });
            } else {
                that.addClass("active").siblings(".title2").removeClass("active");
                list.slideDown().addClass("active").siblings(".list").slideUp(function () {
                    $(this).removeClass("active")
                });
            }
        });
    });

    var filter_list = $(".product > .right > .filter > .list"),
        filter_moer = $(".product > .right > .filter > .moer"),
        filter_moer_ico = filter_moer.find(".ico");
    $(".product > .right > .filter > .list > li").each(function () {
        var that = $(this),
            a_list = that.find(">.a_list"),
            moer = that.find(">.moer");
        moer.click(function () {
            setClass(a_list, moer, moer.find(".ico"), ["&#x2748;", "&#x2749;"]);
        });
    });

    filter_moer.click(function () {
        setClass(filter_list, filter_moer, filter_moer_ico, ["&#x2746;", "&#x2745;"]);
    });
    function setClass(l,m,ico,bash) {
        if (l.hasClass("show")) {
            l.removeClass("show");
            m.removeClass("show");
            ico.addClass("animate");
            setTimeout(function () {
                ico.removeClass("animate").html(bash[0]);
            }, 500);
        } else {
            l.addClass("show");
            filter_moer.addClass("show");
            ico.addClass("animate");
            setTimeout(function () {
                ico.removeClass("animate").html(bash[1]);
            }, 500);
        }
    }
})
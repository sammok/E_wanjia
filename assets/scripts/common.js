$(function () {
    /* sidebar */
    function sidebar(){
        var sidebar = $('.sideGoodCategories'),
            sidebarHd = sidebar.find('.sideGoodCategoriesHd'),
            sidebarBd = sidebar.find('.sideGoodCategoriesBd'),
            bdTimer = null,
            menu = $('.sideGoodCategoriesMenu'),
            detail = $('.sideGoodCategoriesDetail'),
            menuItems = menu.find('li'),
            detailItems = detail.find('.item'),
            menuTimer = null,
            detailTimer = null,
            isSelected = false;

        sidebarHd.hover(function (){
            sidebarBd.show();
        }, function (){
            bdTimer = setTimeout(function (){
                sidebarBd.hide();
            }, 200);
        });

        sidebarBd.mouseover(function (){
            sidebarBd.show();
            clearTimeout(bdTimer);
        });

        sidebarBd.mouseout(function (){
            bdTimer = setTimeout(function (){
                sidebarBd.hide();
                detail.hide();
                detailItems.hide();
                $('.sideGoodCategoriesMenu .list li').removeClass('active');
                clearTimeout(detailTimer);
                isSelected = false;
            }, 200);
        });

        menuItems.mouseover(function (){
            var that = $(this);

            if (isSelected == false){
                if (that.index() != -1) {
                    clearTimeout(detailTimer);
                    detail.show();

                    menuItems.removeClass('active');
                    that.addClass('active');

                    detailItems.hide();
                    detailItems.eq(that.index()).show();
                    isSelected = true;
                }
            } else {
                if (that.index() != -1) {
                    clearTimeout(detailTimer);
                    detail.show();

                    detailTimer = setTimeout(function (){
                        menuItems.removeClass('active');
                        that.addClass('active');

                        detailItems.hide();
                        detailItems.eq(that.index()).show();
                    }, 200)
                }
                isSelected = true;
            }

        });

        detailItems.mouseover(function (){
            clearTimeout(detailTimer);
        });

    }

    sidebar();

    // go top
    $(".go_top").click(function () {
        $("html,body").animate({ "scrollTop": 0 }, 200);
    });


    /* Table components
     * used: mywanjiaIndex.html
     * */
    function components_Table() {
        $('.table .tableThumb').each(function (){
            var thumbs = $(this).find('a');

            if (thumbs.length > 3) {
                $(this).find('.tableThumbSwitch').show();
            }

            // bind switch btn
            $(this).find('.tableThumbSwitch').click(function (){

                if (!$(this).prop('data-collapse')) {
                    $(this).siblings('.tableThumbBd').animate({ 'width': (50+8) * thumbs.length + 'px'});
                    $(this).prop('data-collapse', true);
                } else {
                    $(this).siblings('.tableThumbBd').animate({ 'width': 170 + 'px'});
                    $(this).prop('data-collapse', false);
                }
            });
        });
    }

    components_Table();

    function components_Checkbox(){
        $('.checkbox').click(function (){
            if ($(this).attr('data-checked') != 'true') {
                $(this).attr('data-checked', true).addClass('active');
            } else {
                $(this).attr('data-checked', false).removeClass('active');
            }
        });
    }
    components_Checkbox();

    /* floatEntry */
    function floatEntry (){
        $(window).scroll(function (){
            console.log($(window).scrollTop());

            if($(window).scrollTop() >= 490) {
                $('.floatEntry').fadeIn();
            } else {
                $('.floatEntry').fadeOut();
            };
        })
    }

    floatEntry();
    
});

//����ʱ
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
            //������Сʱ
            var nM = (Math.floor(nMS / (1000 * 60)) % 60) % 60;
            //�����÷���
            var nS = (Math.floor(nMS / 1000) % 60) % 60;
            //��������

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
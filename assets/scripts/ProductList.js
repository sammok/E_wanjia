$(function () {
    // side Menu
    function sideMenu(){
        $('.nav_list .title2').click(function (){
            $(this).next('.list').toggleClass('active').siblings('.list').removeClass('active');
            $(this).toggleClass('active').siblings('.title2').removeClass('active');
        });
    }
    sideMenu();

    // conditional filter
    function conditionalFilter(){
        // brand slide
        $('.brandToggle').click(function (){
            $('.filter-brand .condition-wrap').toggleClass('slideDown');
        });

        // brand multi select
        $('.brandMultiSelect').click(function (){
            // clear status
            $('.filter-conditional *, .condition-wrap *').removeClass('active');

            $(this).toggleClass('active');
            $(this).parents('.filter-brand')
                .find('.condition-wrap').toggleClass('active');

            if ($(this).hasClass('active') === false){
                $('.brand-list *').removeClass('active');
            }
        });

        $('.filter-brand .condition-list li').click(function (){
            if ($('.filter-brand .multiSelect').hasClass('active')){
                $(this).toggleClass('active');
            } else {
                $(this).toggleClass('active')
                    .siblings('li').removeClass('active');
            }
        });

        // brand select cancel
        $('.cancelBtn').click(function (){
            $('.filter-brand, .condition-wrap, .condition-wrap *').removeClass('active');
            $('.condition-list *').removeClass('active');
        });



        // another conditional select
        $('.anotherMultiSelect').click(function (){
            // clear status
            $('.filter-conditional *, .condition-wrap, .condition-wrap *').removeClass('active');

            $(this).toggleClass('active').parents('.anotherCondition')
                .find('.condition-wrap').toggleClass('active');
        });

        var parent = $('.anotherCondition');

        parent.find('.condition-list li').click(function (){
            var that = $(this);

            if (that.index() == 0){
                // if  checked 'all'
                that.addClass('active')
                    .siblings().removeClass('active');
            } else {

                // check multi select status
                // multi select model
                if (that.parents('.condition-list').siblings('.multiSelect').hasClass('active')){
                    // is selectAll now
                    if (that.siblings('.all').hasClass('active')) {
                        that.siblings('.all').removeClass('active');
                        that.toggleClass('active');
                    } else {
                        that.toggleClass('active');

                        // if only self has active
                        if (that.parents('.condition-wrap').find('li.active').length == 0) {
                            that.siblings('.all').addClass('active');
                        } else {
                        }
                    }
                } else {
                    // single select model
                    that.toggleClass('active')
                        .siblings().removeClass('active');

                    // if only self has active
                    if (that.parents('.condition-list').find('li.active').length == 0) {
                        that.siblings('.all').addClass('active');
                    } else {
                    }
                }

            }
        });

        // bind toggle;
        var str1 = '展开';
        var str2 = '收起';

        $('.filterMod .toggle').click(function (){
            if ($(this).text() == str1){
                $(this).text(str2)
                    .addClass('active');
            } else {
                $(this).text(str1)
                    .removeClass('active');
            }
        });

        // slide more filter
        $('.filter-more').click(function (){
            $('.filterMod .filter-row:gt(4)').toggleClass('hide');
            $(this).toggleClass('active');
        });
    }
    conditionalFilter();


    // product filter
    function productFilter(){
        $('.filter_nav .item').click(function (){
            $('.filter_nav .item').removeClass('active');
            $(this).addClass('active').toggleClass('toggle')
                .siblings('.item').removeClass('toggle');
        });
    }
    productFilter();
    
});
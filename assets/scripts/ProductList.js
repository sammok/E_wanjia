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
        $('.moer').click(function (){
            $(this).siblings('.a_list').toggleClass('active');
        });

        // more filter item
        $('.moreFilterItem').click(function () {
            $('.filter .moreItem:lt(3)').toggleClass('active');
        });

        // double choose
        $('.m_choice').click(function () {
            $(this).siblings('.a_list').find('a').removeClass('selected');

            $(this).toggleClass('active');

            $(this).siblings('.a_list').toggleClass('active');


        });

        $('.a_list a').click(function (){
            $(this).toggleClass('selected');
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
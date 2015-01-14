$(function (){
    // toggle order detail
    $('.toggleDetail').click(function (){
        $('.orderDetail').slideToggle();
    });

    // init default bank;
    $('.bankChooseValue').val('huarun');

    $('.formRadio').click(function (){
        $('.bankChooseValue').val($(this).attr('data-bank'));
        $(this).parents('.payWayItem').addClass('active')
            .siblings().removeClass('active');
    });
});
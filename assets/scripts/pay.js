$(function (){
    // toggle order detail
    var timer = null;

    $('.toggleDetail').mouseover(function (){
        $('.orderDetail').show();
    });

    $('.toggleDetail').mouseout(function (){
            timer = setTimeout(function (){
                $('.orderDetail').fadeOut();
            }, 200);
        });

    $('.orderDetail').mouseover(function (){
        clearTimeout(timer);
    });

    $('.orderDetail').mouseout(function (){
        timer = setTimeout(function (){
            $('.orderDetail').fadeOut();
        }, 2000);
    });

    // init default bank;
    $('.bankChooseValue').val('huarun');

    $('.formRadio').click(function (){
        $('.bankChooseValue').val($(this).attr('data-bank'));
        $(this).parents('.payWayItem').addClass('active')
            .siblings().removeClass('active');
    });
});
/* Created by Qianglong Mo 2015 */

$(function (){
    $('#myFavoriteSelectAll').click(function (){
        if ($(this).attr('data-checked') == 'true') {
            $('.myFavoriteTable .checkbox').attr('data-checked', true).addClass('active');
        } else {
            $('.myFavoriteTable .checkbox').attr('data-checked', false).removeClass('active');
        }
    });

    $('.myFavoriteTable .checkbox').click(function (){

        console.log($('.myFavoriteTable .checkbox[data-checked="true"]').length, $('.myFavoriteTable .checkbox').length);
        if($('.myFavoriteTable .checkbox[data-checked="true"]')
                .length == $('.myFavoriteTable .checkbox').length){
            $('#myFavoriteSelectAll').attr('data-checked', true).addClass('active');
        } else {
            $('#myFavoriteSelectAll').attr('data-checked', false).removeClass('active');
        }
    });

    //退换货切换
    $('.tuihuoHead .tab li').click(function (){
        $(this).addClass('active')
            .siblings('li').removeClass('active');

        $('.tuihuoTabBody .table').eq($(this).index()).removeClass('hide')
            .siblings('.table').addClass('hide');
    });
});
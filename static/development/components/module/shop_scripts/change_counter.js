
function change_counter(val, up) {
    let old_count = Number($('.header_content_shop_counter').text());
    let result;
    $('.header_content_shop_counter').css('transform', 'scale(1.3)');
    setTimeout(() => {
        $('.header_content_shop_counter').css('transform', 'scale(1)');
    }, 200);

    if (up == true) {
        result = old_count + val;
    } else if (up == false) {
        result = old_count - val;
    } else if (up == null) {
        result = val;
    }
    $('.header_content_shop_counter').text(result);

}



export { change_counter }

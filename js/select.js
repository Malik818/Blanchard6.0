jQuery(($) => {
    $('.gallery__select').on('click', '.gallery__select-head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.gallery__select-head').removeClass('open');
            $('.gallery__select-list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.gallery__select').on('click', '.gallery__select-item', function () {
        $('.gallery__select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.gallery__select').length) {
            $('.gallery__select-head').removeClass('open');
            $('.gallery__select-list').fadeOut();
        }
    });
});

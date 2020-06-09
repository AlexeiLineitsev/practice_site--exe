$(document).ready(function () {
    $('.work__btn a, .work__btn button').on('focus', function (e) {
        $(this).parents('.work__element').addClass('work__element--active');
    });

    $('.work__btn a, .work__btn button').on('blur', function (e) {
        $(this).parents('.work__element').removeClass('work__element--active');
    });
});
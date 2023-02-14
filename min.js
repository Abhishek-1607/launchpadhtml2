$('#tabs-nav span:first-child').addClass('active');
$('#tabs-nav span:first-child').addClass('addtext');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav span').click(function () {
        $('#tabs-nav span').removeClass('active');
        $('#tabs-nav span').removeClass('addtext');
        $(this).addClass('active');
            
        $(this).addClass('addtext');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
});
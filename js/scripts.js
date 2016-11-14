// YOUR SCRIPTS
// Grid View
$('#grid').click(function () {
    // Remove ONLY 'list' class
    $('.cd-gallery').removeClass('list');
    //Add ONLY 'grid' class
    $('.cd-gallery').addClass('grid');
    console.log('GO VOTE');
});
// List View
$('#list').click(function () {
    // Remove ONLY 'list' class
    $('.cd-gallery').removeClass('grid');
    //Add ONLY 'grid' class
    $('.cd-gallery').addClass('list');
    console.log('FOR NOONE');
});
$('a').click(function () {
    // Remove ONLY 'list' class
    $(this).removeClass("curtainUp");
    //Add ONLY 'grid' class
    $(this).addClass('curtainDown');
    console.log('GO VOTE');
});
// List View
$('a').click(function () {
    // Remove ONLY 'curtainDown' class
    $(this).removeClass('curtainDown');
    //Add ONLY 'curtainUp' class
    $(this).addClass('curtainUp');
    console.log('FOR NOONE');
});

function pageLoad() {
    $('.cd-gallery').attr('id', "grid");
}
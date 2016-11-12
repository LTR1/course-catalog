// YOUR SCRIPTS


// Grid View

$('#grid').click( function(){
    
    // Remove ONLY 'list' class
    $('.cd-gallery').removeClass('list');
    //Add ONLY 'grid' class
    $('.cd-gallery').addClass('grid');
    
    console.log('GO VOTE');
    
});

// List View

$('#list').click( function(){
    
    // Remove ONLY 'list' class
    $('.cd-gallery').removeClass('grid');
    //Add ONLY 'grid' class
    $('.cd-gallery').addClass('list');
    
    console.log('FOR NOONE');
    
});
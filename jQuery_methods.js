$(document).ready(function () 
{
    $('p').wrap('<div class="myCls">');                
    $('#myDiv').hide();                                
    $('span').attr(                                    
    {
        'style': 'border:solid',
        'width': '100%'
    });
    $('p').append('This is p.');                        
    $('span').before('<p>This is another p</p>');       
});
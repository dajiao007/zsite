$(document).ready(function()
{
    $('.leftmenu li.active').removeClass('active');
    
    /* Set current active topNav. */
    if(v.path && v.path.length)
    {
        $.each(eval(v.path), function(index, bookID) 
        { 
            $('.leftmenu a[href*=' + bookID + ']').parent().addClass('active');
        })
    }
});


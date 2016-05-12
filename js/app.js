// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$('.sign-up').click(function(e){
    e.preventDefault();
    showPopup();
});

// Close popup
$('.close-btn-popup').on('click', function(e){
    e.preventDefault();
    hidePopup();
});

$('.popup').on('click','.close-thanks', function(e){
    e.preventDefault();
    hidePopup();
});

// Show popup
function showPopup(){
    // Show elements and blur background
    $('.dimmer').removeClass('hide');
    $('.popup').removeClass('hide');
    $('.container').addClass('blur');
}


// Hide popup
function hidePopup(){
    $('.dimmer').addClass('hide');
    $('.popup').addClass('hide');
    $('.container').removeClass('blur');
}

// animate scroll
$('a.scroll').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});



$(function () {
    var $form = $('#mc-embedded-subscribe-form');

    $('.submit-btn').on('click', function(event) {
        if(event) event.preventDefault();
        $($form).submit();
    });
});

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

if(getUrlVars()["sign-up"] == 'success'){
    //show thank you message
    showPopup();
    $('#mc_embed_signup').addClass('hide');
    $('.thank-you-message-sign-up').removeClass('hide');
}

if(getUrlVars()["confirmation"] == 'success'){
    //show thank you message
    showPopup();
    $('#mc_embed_signup').addClass('hide');
    $('.thank-you-message-confirmation').removeClass('hide');
}





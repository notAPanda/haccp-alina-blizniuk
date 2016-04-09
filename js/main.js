(function(){
    'use strict';
    var contactBtn = $('#contact-btn');
    var contact = $('#contact');


    contactBtn.click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: contact.offset().top}, 'slow');
    });
})();

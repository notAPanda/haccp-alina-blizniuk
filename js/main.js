(function(){
    'use strict';
    var dtr = $('.dtr');
    var contactBtn = $('#contact-btn');
    var contact = $('#contact');

    var _data = {
        telefon: '721 517 581',
        email: 'alina.blizniuk@onet.pl'
    };

    $.each(_data, function (key, value) {
        dtr.html(function (i, oldHtml) {
            return oldHtml.replace(new RegExp('%'+key+'%', 'g'), value);
        });
    });

    contactBtn.click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: contact.offset().top}, 'slow');
        ga('send', 'event', 'ContactButton', 'click');
    });
})();

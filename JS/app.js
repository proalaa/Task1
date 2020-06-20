
$(function () {
    'use strict';

    const winh = $(window).height();
    const topHeader = $('#top-header').innerHeight();
    $('#main-header').height(winh-(topHeader));
    const frontV = $('.front-view').innerHeight();

    // $('.view-speach').marginTop(frontV/2);
})



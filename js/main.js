/*global $, alert, console*/

$(function () {
    'use strict';
    //Trigger Nice Scroll Plugin
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorborder : 'none'
    });
    
    
    //Adjust header height 
    
    $('.header').height($(window).height());
    
    $(window).resize(function () {
        $('.header').height($(window).height());
        $('.intro').each(function () {
            $(this).css('paddingTop', ($(window).height() - $(this).height()) / 2);
        });
    
    });
    
    $('.intro').each(function () {
        $(this).css('paddingTop', ($(window).height() - $(this).height()) / 2);
    });
    
    //scroll to second section
    
    $('.header .arrow i').click(function () {
        $('html,body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    
    $('.hir-us').click(function () {
        $('html,body').animate({
            scrollTop: $('.our-team').offset().top
        }, 1000);
    });
    $('.work-projects').click(function () {
        $('html,body').animate({
            scrollTop: $('.our-work').offset().top
        }, 1000);
    });
    //show hidden items 
    
    $('.show-more').click(function () {
        $('.our-work .hidden').fadeIn(1000);
    });
    
    //check testimonails 
    
    var leftArrow = $('.testin .fa-chevron-left'),
        rightArrow = $('.testin .fa-chevron-right');
    
    function checkClients() {
        if ($('.client:first').hasClass('active')) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
        }
        
        if ($('.client:last').hasClass('active')) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();
        }
        
    }
    
    checkClients();
    
    $('.testin i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testin .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn(5000);
                checkClients();
            });
        } else {
            $('.testin .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn(5000);
                checkClients();
            });
        }
    });
    
});
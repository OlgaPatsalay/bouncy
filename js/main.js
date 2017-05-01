;(function ($) {
    "use strict";

    $(window).load(function () {

        var isotopeContainer = $('.isotope-cont');


        isotopeContainer.isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
            percentPosition: true,
            masonry: {
                columnWidth: '.isotope-item'
            }

        });


        $('.our-team__slider-cont').slick({
            autoplaySpeed: 10000,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });


        $('.testimonials__slider-cont').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });


        var map,
            point = {lat: 49.568531, lng: 34.585393};

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,
                zoom: 15,
                disableDefaultUI: true
            });
            var image = {
                url: 'images/ba-logo.png'
            };
            var marker = new google.maps.Marker({
                position: point,
                map: map,
                icon: image
            });
        }

        initMap();


        // filter buttons
        $('#filters span').click(function () {
            var $this = $(this);
            // don't proceed if already selected
            if (!$this.hasClass('is-checked')) {
                $this.parents('#options').find('.is-checked').removeClass('is-checked');
                $this.addClass('is-checked');
            }
            var selector = $this.attr('data-filter');
            isotopeContainer.isotope({
                itemSelector: '.isotope-item',
                filter: selector
            });
            return false;
        });


        $(".header__scroll").click(function () {
            $('html, body').animate({
                scrollTop: $("#portfolio").offset().top
            }, 300);
        });

        $(".menu__list-portfolio").click(function () {
            $('html, body').animate({
                scrollTop: $("#portfolio").offset().top
            }, 300);
        });

        $(".menu__list-team").click(function () {
            $('html, body').animate({
                scrollTop: $("#the-team").offset().top
            }, 300);
        });

        $(".menu__list-contact").click(function () {
            $('html, body').animate({
                scrollTop: $("#contact-us").offset().top
            }, 300);
        });

        $(".team-cta__button").click(function () {
            $('html, body').animate({
                scrollTop: $("#contact-us").offset().top
            }, 300);
        });


    });
})(jQuery);
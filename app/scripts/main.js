'use strict';

(function (window) {
    // Disable no javascript mode
    document.documentElement.classList.remove('no-js');

    // Get interactive elements
    var menuButton = document.getElementById('menu-button'),
        navMenu = document.getElementsByTagName('nav')[0],
        menuItems = Array.prototype.slice.call(document.getElementsByClassName('section-link')),
        mailLink = document.getElementById('profiles').getElementsByClassName('icon-envelope')[0];

    // Helper functions
    function toggleNavMenu() {
        navMenu.classList.toggle('hide-nav');
    }

    function concat() {
        var str = '';
        for (var i = 0; i < arguments.length; i++) {
            var part = arguments[i];
            str += part;
        }

        return str;
    }

    // Menu
    menuButton.addEventListener('click', function (event) {
        event.preventDefault();
        toggleNavMenu();
    });
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            toggleNavMenu();

        });
    });

    // Add my email
    mailLink.href = concat('ma', 'ilto', ':', '%76%69%6E%63%65%6E%74.', 'leme', 'unier', '+pro\u0040', '%67%6D%61%69%6C\u002ecom');

	// Add cheat
	window.cheet('up up down down left right left right b a', function () {
		window.location.href = 'https://www.youtube.com/v/NWD7iqtOJSE&autoplay=1';
	});
}) (window);

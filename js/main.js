$(function () {
    const menuArrow = document.querySelector('.menu__arrow');

    menuArrow.onclick = function () {
        menuArrow.parentElement.classList.toggle('active')
    }

    const burger = document.querySelector('.menu__btn');
    const menu = document.querySelector('.menu');
    const menuLink = document.querySelectorAll('.menu__link');
    const menuSubLink = document.querySelectorAll('.menu__sub-link');
    const body = document.querySelector('body');

    burger.onclick = function () {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('active');
        menuArrow.parentElement.classList.remove('active')
    };

    menuLink.forEach(function (item) {
        item.onclick = function () {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('active');
        };
    })

    menuSubLink.forEach(function (item) {
        item.onclick = function () {
            burger.classList.remove('active');
            menu.classList.remove('active');
            // body.classList.remove('active');
            menuArrow.parentElement.classList.remove('active')
        };
    })

    $('.jobs__slider').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows:false,
                    dots: true,
                    slidesToShow: 1
                }
            }
    ]
    });

    $('.partners__slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        responsive: [
        {
            breakpoint: 568,
            settings: {
                arrows:false,
            }
        }
    ]
    });

    const tab = document.querySelectorAll('.jobs__tab');
    const slider = document.querySelectorAll('.slider');

    tab.forEach(function (item) {
        item.addEventListener('click', function () {
            tab.forEach(function (item) {
                item.classList.remove('active')
            })
            slider.forEach(function (item) {
                item.classList.toggle('active')
            })

            item.classList.add('active')
        })
    })
})
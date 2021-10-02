$(function () {
    /*header menu*/

    const menuArrow = document.querySelector('.menu__arrow');
    const burger = document.querySelector('.menu__btn');
    const menu = document.querySelector('.menu');
    const menuLink = document.querySelectorAll('.menu__link');
    const menuSubLink = document.querySelectorAll('.menu__sub-link');
    const body = document.querySelector('body');

    menuArrow.onclick = function () {
        menuArrow.parentElement.classList.toggle('active')
    }

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
            body.classList.remove('active');
            menuArrow.parentElement.classList.remove('active')
        };
    })

    /*----------------*/

    /*jobs-slider*/

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

    /*--------------*/

    /*partners-slider*/

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

    /*--------------------*/

    /*jobs-tabs*/

    const jobsTab = document.querySelectorAll('.jobs__tab');
    const jobsSlider = document.querySelectorAll('.jobs__slider');

    jobsTab.forEach(function (item) {
        item.addEventListener('click', function () {
            let currentBtn = item;
            let getAtr = currentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(getAtr);

            jobsTab.forEach(function (item) {
                item.classList.remove('active');
            })

            jobsSlider.forEach(function (item) {
                item.classList.remove('active');
            })

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        })
    })

    /*------------*/

    /*suggestions-tabs*/

    const suggestionsTab = document.querySelectorAll('.suggestions__tab');
    const suggestionsBox = document.querySelectorAll('.tabs__box');

    suggestionsTab.forEach(function (item) {
        item.addEventListener('click', function () {
            let currentBtn = item;
            let getAtr = currentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(getAtr);

            suggestionsTab.forEach(function (item) {
                item.classList.remove('active');
            })

            suggestionsBox.forEach(function (item) {
                item.classList.remove('active');
            })

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        })
    })

    /*-------------------*/
})
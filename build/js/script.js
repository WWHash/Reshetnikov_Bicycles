'use strict';

var navBtn = document.querySelector('.nav__btn');
var nav = document.querySelector('.nav');
var body = document.querySelector('.page-body');
var links = document.querySelectorAll('.nav__link');

nav.classList.remove('nav--nojs');

navBtn.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
    body.classList.add('page-body--overflow-y');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
    body.classList.remove('page-body--overflow-y');
  }
});

links.forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
    body.classList.remove('page-body--overflow-y');
  });
});

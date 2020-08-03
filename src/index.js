import $ from 'jquery';
import Mustache from 'mustache'
import './styling/main.scss';

const headerViewModel = {
   "breadcrumb_menu": [
      { "breadcrumb_item": "Start", "svg": true },
      { "breadcrumb_item": "Loreal", "svg": true },
      { "breadcrumb_item": "Makeup", "svg": true },
      { "breadcrumb_item": "Ögonmakeup", "svg": true },
      { "breadcrumb_item": "Mascara", "svg": true },
      { "breadcrumb_item": "Telescopic Mascara Black", "active": true }
    ]
};


$(document).ready(function() {
   
   fetch('templates/header.mustache').then(response => response.text()).then(template => {
      $("header").append(Mustache.render(template, headerViewModel))
   })
  
})
import $ from 'jquery';
import Mustache from 'mustache'
import './styling/main.scss';

const headerViewModel = {
  H2: "Header in header.mustache"
 };

$(document).ready(function() {
   
   fetch('templates/header.mustache').then(response => response.text()).then(template => {
      $("header").append(Mustache.render(template, headerViewModel))
   })
  
})
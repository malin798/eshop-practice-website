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

const thumbnail_gallery = {
   "large_image": "https://kickscdn.azureedge.net/globalassets/integrationimages/3600520881805-1.jpg?ref=115038&hasAlpha=false&preset=medium%2Cretina" ,
   "thumbnail_images": [
      { "image": "https://kickscdn.azureedge.net/globalassets/integrationimages/3600520881799-5.jpg?ref=939803&hasAlpha=false" },
      { "image": "https://kickscdn.azureedge.net/globalassets/integrationimages/3600520881799-swatch.jpg?ref=939800&hasAlpha=false" },
      { "image": "https://kickscdn.azureedge.net/globalassets/integrationimages/3600520881805-1.jpg?ref=115038&hasAlpha=false" },
      { "image": "https://kickscdn.azureedge.net/globalassets/integrationimages/3600520881805-2.jpg?ref=111737&hasAlpha=false" },
      { "image": "https://kickscdn.azureedge.net/globalassets/integrationimages/3600520881799-3.jpg?ref=939797&hasAlpha=false" },
      { "image": "https://kickscdn.azureedge.net/globalassets/integrationimages/3600520881799-4.jpg?ref=939799&hasAlpha=false" },
      { "image": "https://kickscdn.azureedge.net/globalassets/integrationimages/3600520881799-5.jpg?ref=939803&hasAlpha=false" },
      { "image": "https://kickscdn.azureedge.net/globalassets/integrationimages/3600520881799-swatch.jpg?ref=939800&hasAlpha=false" },
      { "image": "https://kickscdn.azureedge.net/globalassets/integrationimages/3600520881805-1.jpg?ref=115038&hasAlpha=false" },
      { "image": "https://kickscdn.azureedge.net/globalassets/integrationimages/3600520881805-2.jpg?ref=111737&hasAlpha=false" },
      { "image": "https://kickscdn.azureedge.net/globalassets/integrationimages/3600520881799-3.jpg?ref=939797&hasAlpha=false" },
      { "image": "https://kickscdn.azureedge.net/globalassets/integrationimages/3600520881799-4.jpg?ref=939799&hasAlpha=false" }
   ]
}

$(document).ready(function() {
   let translateAmount = 0  
   const largeGalleryImg = thumbnail_gallery.large_image
   $(".large-gallery-image").css('background-image', `url("${largeGalleryImg}")`)
   
   fetch('templates/header.mustache').then(response => response.text()).then(template => {
      $("header").append(Mustache.render(template, headerViewModel))
   })

   fetch('templates/product-page.mustache').then(res => res.text()).then(template => {
      $(".product-top").append(Mustache.render(template, thumbnail_gallery))
   })

   $("body").on("click", ".small-thumbnail-image", function() {
      const thumbnailSrc = $(this).data("img-src")
      $(".small-thumbnail-image").removeClass("active")
      $(this).addClass("active")
      console.log(thumbnailSrc)
      $(".large-gallery-image").css('background-image', `url("${thumbnailSrc}")`)
   })

   $("body").on("click", ".next-button", function() {
      $(".previous-button").css("display", "block")
      const maxTranslate =  ($("#thumbnail-gallery").width()) - ($("#thumbnail-gallery-container").width())
      translateAmount += 300

      if (translateAmount > maxTranslate) {
         translateAmount = maxTranslate
         $(".next-button").css("display", "none")
      }
      
      $(".thumbnail-gallery").css('transform', `translateX(-${translateAmount}px)`)
   })

   $("body").on("click", ".previous-button", function() {
      $(".next-button").css("display", "block")
      translateAmount -= 300

      if (translateAmount <= 0) {
         translateAmount = 0
         $(".previous-button").css("display", "none")
      }
      console.log(translateAmount)
      
      $(".thumbnail-gallery").css('transform', `translateX(-${translateAmount}px)`)
   })  

})
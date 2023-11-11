$(document).ready(function () {
    $('.tm-gallery').magnificPopup({
      delegate: 'a', 
      type: 'image',
      gallery: {
        enabled: true
      },
    });
  });
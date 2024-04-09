// handle the click event on the button

var $ = window.M$;

(function () {
  'use strict';

  function handleMobileMenuHamberger(event) {
    console.log('Menu clicked');
  }

  // handle ready event
  $(document).ready(function () {
    console.log('DOM is ready');

    // handle click event :=> hamberger button
    $('#hamberger').on('click', handleMobileMenuHamberger);
  });
})();

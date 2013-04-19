jQuery(function () {
  "use strict";

  $.getJSON('/count', function (data) {
    $('.js-count').text(data.count);
  });
});

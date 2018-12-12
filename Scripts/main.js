var items_in_cart = 0;

/**
  *
  */
  selectColor = function(color_button) {
    $('.select-color').each( function () {
      makeSelection(color_button, $(this));
      console.log(color_button.value)
    })
  };

/**
  *
  */
  selectSize = function(size_button) {
    $('.select-size').each( function () {
      makeSelection(size_button, $(this));
    })
    console.log(size_button.children);
  };

/**
  *
  */
  selectImage = function(thumbnail) {
    $('.thumbnail-image').each( function () {
      makeSelection(thumbnail, $(this));
    })
  };

/**
  *
  */
  makeSelection = function (button, choice) {
    if (choice.is('#'+button.getAttribute('id'))) {
      console.log(button.getAttribute('id'));
      choice.addClass('selected');
      choice.removeClass('not-selected');
    } else {
      choice.addClass('not-selected');
    }
  };

  addToCart = function () {
    items_in_cart+= parseInt($('.quantity').val());
    console.log($('.quantity').val());
    console.log(items_in_cart);
  }

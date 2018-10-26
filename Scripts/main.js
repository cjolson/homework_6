var ids = ['dog-harness', 'cat-harness', 'gps-tracker',
            'food-attachment', 'water-attachment', 'cat-backpack']
var names = ['Cat Harness', 'Dog Harness', 'GPS Tracker',
              'Food Attachment', 'Water Attachment', 'Cat Backpack'];
var images = [['Assets/Items/Dog-Harness/dog-harness-1.jpg'],
              ['Assets/Items/Dog-Harness/dog-harness-1.jpg'],
              ['Assets/Items/Dog-Harness/dog-harness-1.jpg'],
              ['Assets/Items/Dog-Harness/dog-harness-1.jpg'],
              ['Assets/Items/Dog-Harness/dog-harness-1.jpg'],
              ['Assets/Items/Dog-Harness/dog-harness-1.jpg']];
var prices = ['$24.95', '$39.95', '$54.95', '$19.95', '$17.95', '$64.95'];
var ratings = [5, 5, 5, 5, 5, 5];
var reviews = [[], [], [], [], [], []];
var numOfReviews = [88, 139, 102, 32, 35, 19];
var tags = [new Set(['cats', 'harnesses', 'featured', 'recommended']),
             new Set(['dogs', 'harnesses', 'featured']),
             new Set(['cats', 'dogs', 'accessories', 'featured', 'recommended']),
             new Set(['cats', 'dogs', 'accessories', 'recommended']),
             new Set(['cats', 'dogs', 'accessories', 'recommended']),
             new Set(['cats', 'dogs', 'backpacks'])];

var num_of_items = 6;
var all_items;
var tag_status = {'cats': false,
                  'dogs': false,
                  'harnesses': false,
                  'accessories': false,
                  'backpacks': false}

/**
  * main(): runs when the window loads
  */
$(window).on('load', function() {
  console.log(document.URL);
  all_items = makeItemList(); // sets value of global variable full_item_list
  populateItems('#shop', all_items);
  populateItems('#featured', getFilteredList(["featured"], all_items));
  populateItems('#recommended', getFilteredList(["recommended"], all_items));
});

/**
  * Returns a list contiaining Item Objects.
  */
  makeItemList = function() {
    var dict = {};
    for(var i=0; i<num_of_items; i++) {
      console.log(ids[i]);
      var key = ids[i];
      var item = new Item(key, names[i], images[i], prices[i], ratings[i],
                          reviews[i], numOfReviews[i], tags[i]);
      dict[key] = item;
      console.log('Created Item: '+item.getName());
    }
    return dict;
  };

/**
  * Populate webpages with visible item objects.
  */
  populateItems = function(container, items_dict) {
    var html_string = "";
    console.log(items_dict);
    for (var i=0; i<Object.keys(items_dict).length; i++) {
      var key = ids[i];
      var item = items_dict[key];
      if (item) {
        html_string += item.getDiv();
        console.log('Populate '+container+' with '+item.getName());
      }
    }
    $(container).html(html_string);
  };

/**
  * Returns an item list containing a tag.
  */
  getFilteredList = function(tags, items_dict) {
    var new_dict = {};
    for (var i=0; i<Object.keys(items_dict).length; i++) {
      var key = ids[i];
      var item = items_dict[key];
      console.log(item);
      if (item.hasTag(tags)) {
        new_dict[key] = item;
        console.log('Filtered by '+tags+': '+item.getName());
      }
    }
    console.log(new_dict);
    return new_dict;
  };

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

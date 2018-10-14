var item_name = ["Cat Harness", "Dog Harness", "GPS Tracker", "Food Attachment", "Water Attachment", 
              "Cat Backpack"];
var item_shopImg = ["Assets/Items/dog-leash-shop.jpg", "Assets/Items/dog-leash-shop.jpg", 
                  "Assets/Items/dog-leash-shop.jpg", "Assets/Items/dog-leash-shop.jpg", 
                  "Assets/Items/dog-leash-shop.jpg", "Assets/Items/dog-leash-shop.jpg"];
var item_price = ["$24.95", "$39.95", "$54.95", "$19.95", "$17.95", "$64.95"];
var item_rating = [5, 5, 5, 5, 5, 5];
var item_numOfReviews = [88, 139, 102, 32, 35, 19];
var item_link = ["dog-harness.html", "dog-harness.html", "dog-harness.html", "dog-harness.html", 
             "dog-harness.html", "dog-harness.html"]
var item_tags = [["cat", "harness", "featured"], ["dog", "harness", "featured"], 
                 ["cat", "dog", "accessory", "featured"], ["cat", "dog", "accessory"], 
                 ["cat", "dog", "accessory"], ["cat", "dog", "backpack"]];
var numOfItems = 6

class Item {
  constructor(name, shopImg, price, rating, numOfReviews, link, tags, featured) {
    this.name = name;
    this.shopImg = shopImg;
    this.price = price;
    this.details = "<p>Lorem ipsum dolor sit amet, risus nec elit, amet tellus volutpat, convallis "
                    + "in pede. Erat amet et, vel proin, parturient ultricies pede. Sodales "
                    + "ridiculus cum, dui non tellus.</p><p>Velit mauris, magna amet, morbi odio "
                    + "non. Mauris dolor egestas, nulla varius ante, eget nunc non.</p>";
    this.rating = rating;
    this.numOfRevies = numOfReviews;
    this.link = link;
    this.tags = tags;
    this.color = null;
    this.size = null;
    this.html = null;
  };
  
  setHTML(html) {
    this.html = html;
  };
  
  tagPresent(tag) {
    return this.tags.indexOf(tag) >= 0;
  };
}

class Cart {
  constructor() {
    this.subtotal = 0;
    this.total = 0;
    this.shipping = 0;
    this.numOfItemsInCart = 0;
    this.items = {};
  }
  
  
}

function makeItemList() {
  var all_items = [];
  var item;
  for (i=0; i<numOfItems; i++) {
    item = new Item(item_name[i], item_shopImg[i], item_price[i], item_rating[i], 
                    item_numOfReviews[i], item_link[i], item_tags[i]);
    item.setHTML(`<a href="`+item.link+`">
                        <img class="shop-item-img" src="`+item.shopImg+`" alt="`+item.name+`">
                        <div class="color-selection-preview">
                          <div class="preview-color strawberry"></div>
                          <div class="preview-color blackberry"></div>
                          <div class="preview-color crazberry"></div>
                          <div class="preview-color fire-orange"></div>
                        </div>
                        <div class="item-name-browsing">`+item.name+`</div>
                        <div class="item-price-browsing">`+item.price+`</div>
                        </a>`);
    all_items.push(item);
  }
  return all_items
}

function populateItems(item_list, type) {
  var container = document.getElementById(type);
  if (container == null) {
    return;
  }
  var num = item_list.length;
  for (i=0; i<num; i++) {
    var div = document.createElement("div");
    div.className = "shop-item";
    div.innerHTML = item_list[i].html;
    container.appendChild(div);
    console.log("created a "+type+" items");
  }
}

function filterItems(item_list, tag) {
  var filtered_list = [];
  var num = item_list.length;
  for (i=0; i<num; i++) {
    console.log(tag);
    console.log(item_list[i].tags);
    if (item_list[i].tagPresent(tag)) {
      filtered_list.push(item_list[i]);
    }
  }
  return filtered_list;
}

$(document).ready(() => {
    console.log("ready");
});

$(window).on("load", function() {
  var all_items=makeItemList();
  populateItems(filterItems(all_items, "featured"), "featured");
  populateItems(all_items, "shop");
  populateItems(all_items, "recommended");
});

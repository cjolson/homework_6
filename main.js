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
var item_tags = [["cat", "harness"], ["dog", "harness"], ["cat", "dog", "accessory"], 
             ["cat", "dog", "accessory"], ["cat", "dog", "accessory"], ["cat", "dog", "backpack"]];
var numOfItems = 6

class Item {
  constructor(name, shopImg, price, rating, numOfReviews, link, tags) {
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
  }
}

function makeItemList() {
  var all_items = [];
  var item;
  for (i=0; i<numOfItems; i++) {
    item = new Item(item_name[i], item_shopImg[i], item_price[i], item_rating[i], 
                    item_numOfReviews[i], item_link[i], item_tags[i]);
    all_items.push(item);
  }
  return all_items
}

function populateItems(all_items, type) {
  console.log(type+" items");
  var container = document.getElementById(type);
  var total;
  if (type == "featured") {
    total = 3;
  } else if (type == "shop") {
    total = 6;
  } else if (type == "recommended") {
    total = 3;
  }
  for (i=0; i<total; i++) {
    var div = document.createElement("div");
    div.className = "shop-item";
    div.innerHTML = `
        <a href="`+all_items[i].link+`">
        <img class="shop-dog-harness-img" src="`+all_items[i].shopImg+`" alt="`+all_items[i].name+`">
        <div class="color-selection-preview">
          <div class="preview-color strawberry"></div>
          <div class="preview-color blackberry"></div>
          <div class="preview-color crazberry"></div>
          <div class="preview-color fire-orange"></div>
        </div>
        <div class="item-name-browsing">`+all_items[i].name+`</div>
        <div class="item-price-browsing">`+all_items[i].price+`</div>
        </a>`;
    container.appendChild(div);
    console.log("created a "+type+" items");
  }
}

$(document).ready(() => {
  console.log("ready");
  var all_items = makeItemList();
  populateItems(all_items, "featured");
  //populateItems(all_items, "shop");
  populateItems(all_items, "recommended");
});
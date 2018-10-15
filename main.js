var item_name = ["Cat Harness", "Dog Harness", "GPS Tracker", 
                 "Food Attachment", "Water Attachment", "Cat Backpack"];
var item_shopImg = ["Assets/Items/Dog-Harness/dog-harness-1.jpg", 
                    "Assets/Items/Dog-Harness/dog-harness-1.jpg",
                    "Assets/Items/Dog-Harness/dog-harness-1.jpg", 
                    "Assets/Items/Dog-Harness/dog-harness-1.jpg",
                    "Assets/Items/Dog-Harness/dog-harness-1.jpg", 
                    "Assets/Items/Dog-Harness/dog-harness-1.jpg"];
var item_price = ["$24.95", "$39.95", "$54.95", "$19.95", "$17.95", "$64.95"];
var item_rating = [5, 5, 5, 5, 5, 5];
var item_numOfReviews = [88, 139, 102, 32, 35, 19];
var item_link = ["dog-harness.html", "dog-harness.html", "dog-harness.html", 
                 "dog-harness.html", "dog-harness.html", "dog-harness.html"]
var item_tags = [["cats", "harnesses", "featured"], 
                 ["dogs", "harnesses", "featured"], 
                 ["cats", "dogs", "accessories", "featured"], 
                 ["cats", "dogs", "accessories"], 
                 ["cats", "dogs", "accessories"], 
                 ["cats", "dogs", "backpacks"]];
var numOfItems = 6
var activeTags = [];

class Item {
  constructor(name, shopImg, price, rating, numOfReviews, link, tags, featured) {
    this.name = name;
    this.shopImg = shopImg;
    this.price = price;
    this.details = `<p>Lorem ipsum dolor sit amet, risus nec elit, amet tellus 
                      volutpat, convallis in pede. Erat amet et, vel proin, 
                      parturient ultricies pede. Sodales ridiculus cum, dui non 
                      tellus.</p>
                    <p>Velit mauris, magna amet, morbi odio non. Mauris dolor 
                      egestas, nulla varius ante, eget nunc non.</p>`;
    this.rating = rating;
    this.numOfRevies = numOfReviews;
    this.link = link;
    this.tags = tags;
    this.color = null;
    this.size = null;
    this.html = `<a href="`+this.link+`">
                  <div class="shop-item-preview">
                    <img class="item-browing-img" src="`+this.shopImg+`" 
                      alt="`+this.name+`">
                  </div>
                  <div class="color-selection-preview">
                    <div class="preview-color strawberry"></div>
                    <div class="preview-color blackberry"></div>
                    <div class="preview-color crazberry"></div>
                    <div class="preview-color fire-orange"></div>
                  </div>
                  <div class="item-name-browsing">`+this.name+`</div>
                  <div class="item-price-browsing">`+this.price+`</div>
                </a>`;
  };
  
  tagPresent(tag) {
    return this.tags.indexOf(tag) >= 0;
  };
  
  getDiv() {
    var div = document.createElement("div");
    div.className = "shop-item";
    div.innerHTML = this.html;
    return div;
  }
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

/**
  * Retrieves the Element/Node that comes next in the DOM.
  * From Stack Overflow.
  * https://stackoverflow.com/questions/868407/hide-an-elements-next-sibling-with-javascript
  */
function nextNode(node) {
  do {
    node = node.nextSibling;
  } while (node && node.nodeType !== 1);
  return node;
}

function killChildren(root) {
  root.innerHTML = "";
}

function openFilter(filterNode, type) {
  if (filterNode.classList.contains("filter-open")) {
    filterNode.classList.remove("filter-open");
    filterNode.children.namedItem("expand").textContent = "+";
    nextNode(filterNode).style.display = "none";
  } else {
    filterNode.classList.add("filter-open");
    filterNode.children.namedItem("expand").textContent = "-";
    nextNode(filterNode).style.display = "flex";
  }
}

function makeItemList() {
  var all_items = [];
  var item;
  for (var i=0; i<numOfItems; i++) {
    item = new Item(item_name[i], item_shopImg[i], item_price[i], 
                    item_rating[i], item_numOfReviews[i], item_link[i], 
                    item_tags[i]);
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
  for (var i=0; i<num; i++) {
    var div = item_list[i].getDiv();
    container.appendChild(div);
    console.log("created a "+type+" item");
  }
}

function filtersNotActive() {
  var choices = document.getElementsByTagName("input");
  for (var i=0; i<choices.length; i++) {
    if (choices[i].checked) { 
      console.log("filters active")
      return false; 
    }
  }
  return true;
}

function clearAllFilters() {
  var list = document.getElementsByTagName("input");
  for (var i=0; i<list.length; i++){
    if (list[i].checked) {
      list[i].checked = false;
      updateFilters(list[i]);
    }
  }
}

function makeClearButton(choice, tag) {
    var button = document.createElement("button");
    button.id = tag;
    button.classList.add("clear");
    button.onclick = function () {
                      var checkbox = document.getElementById(button.id+"-check");
                      console.log(checkbox);
                      checkbox.checked = false;
                      updateFilters(checkbox);
                    };
    button.innerHTML = `<span class="selected-filter">`+choice.value+`</span>       <span>x</span>`;
    var filterClearButtons = document.getElementsByClassName("filter-selection")[0];
    button.style.display = "flex";
    var list = filterClearButtons.children;
    filterClearButtons.insertBefore(button, list[0]);
}

function updateFilters(choice) {
  var tag = choice.value.toLowerCase();
  if (choice.checked) {
    activeTags.push(tag);
    document.getElementById("all").style.display = "flex";
    makeClearButton(choice, tag);
    console.log("Add filter: "+tag);
  } else {
    activeTags.splice(activeTags.indexOf(tag), 1);
    document.getElementById(tag).remove();
    console.log("Clear filter: "+tag)
  }
  if (filtersNotActive()) {
    document.getElementById("all").style.display = "none";
  }
  console.log("Active tags: "+activeTags);
  killChildren(document.getElementById("shop"));
  populateItems(filterItems(tag), "shop");
}

function filterItems(tag) {
  var filtered_list = [];
  var item_list = makeItemList();
  var num = item_list.length;
  for (var i=0; i<num; i++) {
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
  populateItems(filterItems("featured"), "featured");
  populateItems(all_items, "shop");
  populateItems(all_items, "recommended");
});

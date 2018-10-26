function Item(id, name, allImages, price, rating, reviews, numOfREviews, tags) {

  this.id = id;                     // id
  this.name = name;                 // string
  this.link = 'dog-harness.html' //id+'.html';           // url to item page
  this.allImages = allImages;       // array of all image src (shop = 0)
  this.price = price;               // string
  this.rating = rating;             // new Rating(rating); // Rating object
  this.review = reviews;            // array of Review objects
  this.numOfRevies = numOfReviews;  // total number of reviews
  this.tags = tags;        // set of keywords for filtering and picking recommend items
  this.color = null;
  this.size = null;
  this.details = `<p>Lorem ipsum dolor sit amet, risus nec elit, amet tellus
                    volutpat, convallis in pede. Erat amet et, vel proin,
                    parturient ultricies pede. Sodales ridiculus cum, dui non
                    tellus.</p>
                  <p>Velit mauris, magna amet, morbi odio non. Mauris dolor
                    egestas, nulla varius ante, eget nunc non.</p>`;
  this.div = `<div class="shop-item">
                <a href="`+this.link+`">
                  <div class="shop-item-preview">
                    <img class="item-browing-img" src="`+this.allImages[0]+`"
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
                  </a>
                </div>`;
};

Item.prototype.getTags = function() {
  return this.tags;
};

Item.prototype.getDiv = function() {
  return this.div;
};

Item.prototype.getName = function() {
  return this.name;
};

Item.prototype.hasTag = function(other_tags) {
  var bool = false;
  other_tags.forEach(tag => {
    console.log('checking '+tag)
    if(this.tags.has(tag)){
      console.log(true);
      bool = true;
    }
  });
  console.log(false);
  return bool;
}

Item.prototype.setColor = function(color) {
  this.color = color;
}

Item.prototype.getColor = function() {
  return this.color;
}

Item.prototype.setSize = function(size) {
  this.size = size;
}

Item.prototype.getSize = function() {
  return this.size;
}


/**class Item {
  constructor(name, shopImg, price, rating, numOfReviews, link, tags, featured) {
    this.name = name || "";
    this.shopImg = shopImg || "";
    this.price = price || "";
    this.details = `<p>Lorem ipsum dolor sit amet, risus nec elit, amet tellus
                      volutpat, convallis in pede. Erat amet et, vel proin,
                      parturient ultricies pede. Sodales ridiculus cum, dui non
                      tellus.</p>
                    <p>Velit mauris, magna amet, morbi odio non. Mauris dolor
                      egestas, nulla varius ante, eget nunc non.</p>`;
    this.rating = rating || "";
    this.numOfRevies = numOfReviews || "";
    this.link = link || "";
    this.tags = tags || "";
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
  };
};
**/

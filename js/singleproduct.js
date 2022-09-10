var qs = location.search.split("=");
var id = qs[qs.length - 1];

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://fakestoreapi.com/products/" + id);
xhr.send();
xhr.addEventListener("load", function () {
  if (xhr.status == 200) {
    var product = JSON.parse(xhr.response);

    var asideLeft = document.querySelector(".left");
    var asideRight = document.querySelector(".right");

    var img = document.createElement("img");
    img.src = product.image;
    asideLeft.appendChild(img);

    var title = document.createElement("h3");
    title.innerHTML = product.title;

    var category = document.createElement("a");
    category.setAttribute("href", "category.html?id=" + product.id);
    category.innerHTML = `<span style="color:black">Category: </span>${product.category}`;

    var price = document.createElement("p");
    price.innerHTML = `${product.price} $`;

    var descip = document.createElement("p");
    descip.innerHTML = product.description;

    var count = document.createElement("p");
    count.innerHTML = `<span style="color:#55C7EB;font-weight:bold">${product.rating["count"]}</span> in Stock`;

    var rate = document.createElement("p");
    if (product.rating["rate"] >= 4) {
      rate.style.color = "#00bb00";
    }
    if (product.rating["rate"] < 4 && product.rating["rate"] >= 3) {
      rate.style.color = "#ffa500";
    }
    if (product.rating["rate"] < 3) {
      rate.style.color = "#888";
    }
    rate.innerHTML = `${product.rating["rate"]}✰`;

    var butn = document.createElement("button");
    butn.innerHTML = "Add to cart";

    asideRight.append(title, category, price, descip, count, rate, butn);

    butn.addEventListener("click", function () {
      setCookie(`product${id}ID`, id, 3);
      getCount();
    });
  }
});

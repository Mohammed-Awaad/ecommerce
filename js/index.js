var xhr = new XMLHttpRequest();
xhr.open("GET", "https://fakestoreapi.com/products");
xhr.send();
xhr.addEventListener("load", function () {
  if (xhr.status == 200) {
    var allProducts = JSON.parse(xhr.response);

    var productsContainer = document.querySelector(".products");

    for (const i of allProducts) {
      var singleProduct = document.createElement("div");
      singleProduct.classList.add("single-product");
      productsContainer.appendChild(singleProduct);

      var img = document.createElement("img");
      img.src = i.image;

      var title = document.createElement("h3");
      title.innerHTML = i.title;

      var category = document.createElement("a");
      category.setAttribute("href", "category.html?id=" + i.id);
      category.innerHTML = i.category;

      var price = document.createElement("p");
      price.innerHTML = `${i.price} $`;

      var rate = document.createElement("p");
      if (i.rating["rate"] >= 4) {
        rate.style.color = "#00bb00";
      }
      if (i.rating["rate"] < 4 && i.rating["rate"] >= 3) {
        rate.style.color = "#ffa500";
      }
      if (i.rating["rate"] < 3) {
        rate.style.color = "#888";
      }
      rate.innerHTML = `${i.rating["rate"]}✰`;

      var butn = document.createElement("button");
      butn.innerHTML = "Add to cart";

      singleProduct.append(img, title, category, price, rate, butn);
      singleProduct.setAttribute("id", i.id);

      title.addEventListener("click", function () {
        location.href = "singleproduct.html?id=" + this.parentElement.id;
      });
      img.addEventListener("click", function () {
        location.href = "singleproduct.html?id=" + this.parentElement.id;
      });

      butn.addEventListener("click", function () {
        setCookie(
          `product${this.parentElement.id}ID`,
          this.parentElement.id,
          3
        );
        getCount();
      });
    }
  }
});

if (document.cookie) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://fakestoreapi.com/products");
  xhr.send();
  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      var allProducts = JSON.parse(xhr.response);
      var cookie = allCookieList();

      var productsContainer = document.querySelector(".left");
      var info = document.getElementById("info");
      info.innerHTML = "CART";

      var total = 0;
      for (const key in cookie) {
        for (const i of allProducts) {
          if (i.id == cookie[key]) {
            var singleProduct = document.createElement("div");
            singleProduct.classList.add("single-product");
            productsContainer.appendChild(singleProduct);

            var img = document.createElement("img");
            img.src = i.image;

            var title = document.createElement("h3");
            title.innerHTML = i.title;

            var price = document.createElement("p");
            price.innerHTML = `${i.price}$`;

            var del = document.createElement("p");
            del.innerHTML =
              "<span class='material-icons-outlined'>close</span>";

            singleProduct.append(img, title, price, del);
            singleProduct.setAttribute("id", i.id);
            total += i.price;

            title.addEventListener("click", function () {
              location.href = "singleproduct.html?id=" + this.parentElement.id;
            });
            img.addEventListener("click", function () {
              location.href = "singleproduct.html?id=" + this.parentElement.id;
            });
            del.addEventListener("click", function () {
              this.parentElement.style.display = "none";
              deleteCookie(`product${this.parentElement.id}ID`);
              total -= i.price;
              totalPrice.innerHTML = total.toFixed(2) + " $";
              getCount();
            });
          }
        }
      }

      var totalPrice = document.getElementById("totalPrice");
      totalPrice.innerHTML = total.toFixed(2) + " $";
    }
  });
}

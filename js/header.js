function getCount() {
  var count = document.getElementById("count");
  if (document.cookie) {
    var cookie = allCookieList();
    count.innerHTML = Object.keys(cookie).length;
  } else {
    count.innerHTML = "0";
  }
}
getCount();

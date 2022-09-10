//  1  => Set Cookie
function setCookie(cookieName, cookieValue, expiryAfter) {
  if (arguments.length == 3) {
    var date = new Date();
    date.setMonth(date.getMonth() + expiryAfter);
    document.cookie = `${cookieName} = ${cookieValue}; expires= ${date}`;
  } else {
    throw new Error(
      "setCookie() take 3 parameter, 'cookieName', 'cookieValue' and 'expiryDate'"
    );
  }
}

//  2  => Get All Cookie
function allCookieList() {
  var cookie = document.cookie.split(";");
  var cookieArray = [];

  for (const i of cookie) {
    var x = i.split("=");
    cookieArray[x[0].trim()] = x[1];
  }

  return cookieArray;
}

//  3  =>  Get Cookie Value By Name
function getCookie(cookieName) {
  if (arguments.length == 1) {
    for (const key in allCookieList()) {
      if (key == cookieName) {
        return allCookieList()[key];
      }
    }
  } else {
    throw new Error("getCookie() take 1 parameter, 'cookieName'");
  }
}

//  4  => Search for Cookie
function hasCookie(cookieName) {
  if (arguments.length == 1) {
    return allCookieList().hasOwnProperty(cookieName);
  } else {
    throw new Error("hasCookie() take 1 parameter, 'cookieName'");
  }
}

//  5  => Delete Cookie
function deleteCookie(cookieName, path, domain) {
  if (arguments.length == 1) {
    if (hasCookie(cookieName)) {
      document.cookie =
        encodeURIComponent(cookieName) +
        "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
        (domain ? "; domain=" + domain : "") +
        (path ? "; path=" + path : "");
    }
  } else {
    throw new Error("deleteCookie() take 1 parameter, 'cookieName'");
  }
}

//    =>
//      =>
//        =>
//      =>
//    =>

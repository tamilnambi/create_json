function updateFavicon(themeColor) {
  var favicon = document.getElementById("favicon");
  if (themeColor === "light") {
    favicon.href = "../src/img/black_favicon.svg";
  } else if (themeColor === "dark") {
    favicon.href = "../src/img/white_favicon.svg";
  }
}

// Detect the theme color using the 'prefers-color-scheme' media query
var prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
updateFavicon(prefersDarkMode.matches ? "dark" : "light");

// Listen for changes in the theme color and update the favicon accordingly
prefersDarkMode.addListener(function (event) {
  updateFavicon(event.matches ? "dark" : "light");
});

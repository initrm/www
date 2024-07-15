// once the document as been fully loaded
$(document).ready(function() {

  // understands the user's theme preference
  let theme = localStorage.getItem("theme");
  if (!theme) { // user has not selected a theme, system preference is used
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) // user prefers dark mode
      theme = "dark";
    else // user prefers light mode or has no preference
      theme = "light";
  }

  // initializes the theme switch toggle based on the user's theme preference
  let lightToggle = $("#theme-toggle-light");
  let darkToggle = $("#theme-toggle-dark");
  if (theme === "dark") 
    showAndHide(lightToggle, darkToggle);
  else
    showAndHide(darkToggle, lightToggle);

  // handles the theme switch toggle click event
  lightToggle.on("click", function() {
    setTheme("light");
    showAndHide(darkToggle, lightToggle);
  });
  darkToggle.on("click", function() {
    setTheme("dark");
    showAndHide(lightToggle, darkToggle);
  });

  // initializes the page based on the user's theme preference
  setTheme(theme);

});

// sets the given theme into the local storage and applies it to the page
function setTheme(theme) {
  localStorage.setItem("theme", theme);
  $("html").attr("data-theme", theme);
}

function showAndHide(toShow, toHide) {
  toShow.show();
  toHide.hide();
}
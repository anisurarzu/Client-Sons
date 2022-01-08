/* function openFunction() {
  document.getElementById("menu").style.width = "200px";
}
function closeFunction() {
  document.getElementById("menu").style.width = "0px";
} */
function openSearchField() {
  document.getElementById("search").style.display = "block";
  document.getElementById("");
}

function closeSearchField() {
  document.getElementById("search").style.display = "none";
}
$(document).ready(function () {
  $("#product-slider").owlCarousel({
    items: 5,
    itemsDesktop: [1199, 5],
    itemsDesktopSmall: [980, 4],
    itemsMobile: [700, 1],
    pagination: false,
    navigationText: ["", ""],
    autoplay: true,
  });
});
$(document).ready(function () {
  $("#product-slider-two").owlCarousel({
    items: 5,
    itemsDesktop: [1199, 5],
    itemsDesktopSmall: [980, 4],
    itemsMobile: [700, 1],
    pagination: false,
    navigationText: ["", ""],
    autoplay: true,
  });
});

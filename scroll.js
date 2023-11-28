document.addEventListener("DOMContentLoaded", function () {
  let mybutton = document.getElementById("goTopBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    let scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
});

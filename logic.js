const nav = document.querySelector(`nav`);

document.addEventListener("click", function (e) {
  if (e.target.closest(".burger"))
    nav.classList.toggle("active");
  else
    nav.classList.remove("active");
});
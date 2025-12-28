const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // zárja be a menüt kattintáskor (mobilon)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// évszám
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();




document.querySelectorAll(".card-slider").forEach((slider) => {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  // egér lenyomás
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("dragging");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  // egér elengedés / kilépés
  const stop = () => {
    isDown = false;
    slider.classList.remove("dragging");
  };
  slider.addEventListener("mouseleave", stop);
  slider.addEventListener("mouseup", stop);

  // egér mozgatás közben húzás
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.2; // sebesség (1.0–2.0)
    slider.scrollLeft = scrollLeft - walk;
  });

  // touch támogatás (mobil) – általában megy CSS-sel is, de biztosra:
  slider.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    startX = touch.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }, { passive: true });

  slider.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    const x = touch.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.0;
    slider.scrollLeft = scrollLeft - walk;
  }, { passive: true });

});







document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const accept = document.getElementById("cookie-accept");
  const decline = document.getElementById("cookie-decline");

  if (!localStorage.getItem("cookieConsent")) {
    banner.hidden = false;
  }

  accept.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.hidden = true;
  });

  decline.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "declined");
    banner.hidden = true;
  });
});








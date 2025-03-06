document.addEventListener("DOMContentLoaded", function () {
  const itemCabecera = document.querySelectorAll(".card.familiares");

  itemCabecera.forEach((item) => {
    const flecha = item.querySelector(".buttons.cuerpo .flecha");
    const botonMobil = item.querySelector(".cabeceraFamiliar .botonMobil");

    const toggleActive = (e) => {
      e.preventDefault();
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        return;
      }
      itemCabecera.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    };

    if (flecha) flecha.addEventListener("click", toggleActive);
    if (botonMobil) botonMobil.addEventListener("click", toggleActive);
  });

  const items2 = document.querySelectorAll(".itemInfo");
  items2.forEach((item) => {
    const flecha = item.querySelector(".flecha");

    if (!flecha) return;

    flecha.addEventListener("click", function (e) {
      e.preventDefault();
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        return;
      }
      items2.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    });
  });
});

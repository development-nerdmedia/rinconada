document.addEventListener("DOMContentLoaded", function () {
  // Click en el enlace con clase .parrilla
  const enlaceParrilla = document.querySelector("a.parrilla");
  const contentMenu = document.querySelector(".contentMenu");

  enlaceParrilla?.addEventListener("click", function (e) {
    e.preventDefault();

    if (contentMenu) {
      contentMenu.classList.add("ocultarContent");
    }

    // Quitar clase 'ocultarContent' de los elementos que la tengan
    document.querySelectorAll(".ocultarContent").forEach(function (el) {
      if (el !== contentMenu) {
        el.classList.remove("ocultarContent");
      }
    });
  });

  // Click en el botón con clase .nuevaReserva
  const botonReserva = document.querySelector("button.nuevaReserva");
  const modalAviso = document.querySelector(".modalAvisoImportante");

  botonReserva?.addEventListener("click", function () {
    modalAviso?.classList.add("active");
  });

  const ClosemodalAviso = document.querySelector(
    ".modalAvisoImportante .closeModal"
  );
  ClosemodalAviso?.addEventListener("click", function (e) {
    modalAviso?.classList.remove("active");
  });

  const deacuerdomodalAviso = document.querySelector(
    ".modalAvisoImportante .deacuerdo"
  );
  const modalTipoReserva = document.querySelector(".modalTipoReserva");
  deacuerdomodalAviso?.addEventListener("click", function (e) {
    modalAviso?.classList.remove("active");
    modalTipoReserva?.classList.add("active");
  });

  const atrascontent = document.querySelector(".contentParrillas .atras");
  const contentParrillas = document.querySelector(".contentParrillas");
  atrascontent?.addEventListener("click", function (e) {
    contentParrillas?.classList.add("ocultarContent");
    contentMenu?.classList.remove("ocultarContent");
  });

  const ClosemodalmodalTipoReserva = document.querySelector(
    ".modalTipoReserva .closeModal"
  );

  ClosemodalmodalTipoReserva?.addEventListener("click", function (e) {
    modalTipoReserva?.classList.remove("active");
  });

  const btnModarReserva = document.querySelector(
    ".modalTipoReserva .content .deacuerdo"
  );

  /* calendario */

  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: "es", // 🌍 Calendario en español
    initialView: "dayGridMonth",
    events: [
      { title: "Reunión", start: "2025-04-10" },
      { title: "Lanzamiento", start: "2025-04-15" },
    ],
    dateClick: function (info) {
      console.log("Hiciste clic en: " + info.dateStr); // 📅 Muestra la fecha en consola

      // Eliminar la clase 'active' de todos los días previamente seleccionados
      document.querySelectorAll(".fc-day").forEach(function (day) {
        day.classList.remove("active");
      });

      // Añadir la clase 'active' al día seleccionado
      var clickedDay = info.dayEl;
      clickedDay.classList.add("active");
    },
  });

  const contentHorario = document.querySelector(".contentHorario");

  btnModarReserva?.addEventListener("click", function (e) {
    contentHorario.style.display = "block";
    modalTipoReserva?.classList.remove("active");
    contentParrillas?.classList.add("ocultarContent");

    calendar.render();
  });

  const btncontentHorario = document.querySelector(
    ".contentHorario .nuevaReserva"
  );
  const contentMesa = document.querySelector(".contentMesa");

  btncontentHorario?.addEventListener("click", function (e) {
    contentMesa?.classList.remove("ocultarContent2");
    contentHorario.style.display = "none";
  });
  document.querySelectorAll(".contentImg").forEach((container) => {
    const mesas = container.querySelectorAll("div");

    mesas.forEach((mesa) => {
      mesa.addEventListener("click", () => {
        // No hacer nada si tiene la clase 'ocupado'
        if (mesa.classList.contains("ocupado")) return;

        // Quitar 'active' a todas las mesas del mismo contenedor
        mesas.forEach((m) => m.classList.remove("active"));

        // Agregar 'active' a la mesa clickeada
        mesa.classList.add("active");
      });
    });
  });

  const atrascontentHorario = document.querySelector(".contentHorario .atras");
  atrascontentHorario?.addEventListener("click", function (e) {
    contentParrillas?.classList.remove("ocultarContent");
    contentHorario.style.display = "none";
  });

  const atrascontentMesa = document.querySelector(".contentMesa .atras");
  atrascontentMesa?.addEventListener("click", function (e) {
    contentMesa?.classList.add("ocultarContent2");
    contentHorario.style.display = "block";
  });

  const btnnuevaReserva = document.querySelector(".contentMesa .nuevaReserva");
  btnnuevaReserva?.addEventListener("click", function (e) {
    contentParrillas?.classList.remove("ocultarContent");
    contentMesa?.classList.add("ocultarContent2");
  });

  const btnAgregarInvitador = document.querySelector(
    "main.reservas .contentParrillas table td button.agregarInvitados"
  );
  const itemParrilla = document.querySelector("main.reservas .itemParrilla");
  const loading = document.querySelector("main.reservas .loading");
  const tablaInfo = document.querySelector("main.reservas .tablaInfo");

  btnAgregarInvitador?.addEventListener("click", function (e) {
    loading.classList.remove("ocultar");
    tablaInfo.style.display = "none";
    setTimeout(() => {
      tablaInfo.style.display = "block";
      contentParrillas.classList.add("ocultarContent");
      loading.classList.add("ocultar");
      itemParrilla?.classList.remove("ocultarContent2");
    }, 1500);
  });

  /* agregar tr's para el registro */
  document
    .querySelector("button.agregar")
    .addEventListener("click", function () {
      const table = document.querySelector(".tablaRegistro table tbody");
      const buttonRow = table.lastElementChild; // última fila (la del botón)

      // HTML de la fila que se va a clonar
      const newRowHTML = `
      <tr>
        <td>
          <input
            type="number"
            name=""
            id=""
            value=""
            placeholder="Escribe aquí"
          />
        </td>
        <td>
          <input
            type="text"
            name=""
            id=""
            value=""
            placeholder="Escribe aquí"
          />
        </td>
        <td>
          <input
            type="text"
            name=""
            id=""
            value=""
            placeholder="Escribe aquí"
          />
        </td>
        <td>S/. 0 PEN</td>
      </tr>
    `;

      // Insertar 4 filas antes del botón
      for (let i = 0; i < 4; i++) {
        const tempRow = document.createElement("tbody");
        tempRow.innerHTML = newRowHTML;
        table.insertBefore(tempRow.firstElementChild, buttonRow);
      }
    });

  const tablaRegistrobutton = document.querySelector(
    ".tablaRegistro .nuevaReserva"
  );
  const checkout = document.querySelector(".checkout");
  tablaRegistrobutton?.addEventListener("click", function (e) {
    itemParrilla.classList.add("ocultarContent2");
    checkout.classList.remove("ocultar");
  });

  const editarInvitadosBtn = document.querySelector(
    ".checkout .title .editarInvitadosBtn"
  );
  editarInvitadosBtn?.addEventListener("click", function (e) {
    itemParrilla.classList.remove("ocultarContent2");
    checkout.classList.add("ocultar");
  });

  const btnCheckout = document.querySelector(
    "main.reservas .checkout .nuevaReserva"
  );
  const modalRegistroCompletado = document.querySelector(
    ".modalRegistroCompletado"
  );
  btnCheckout?.addEventListener("click", function (e) {
    modalRegistroCompletado?.classList.add("active");
  });

  const listaInvitados = document.querySelector(".listaInvitados");
  const btnmodalRegistroCompletado = document.querySelector(
    ".modalRegistroCompletado button"
  );
  const closemodalRegistroCompletado = document.querySelector(
    ".modalRegistroCompletado .closeModal"
  );
  btnmodalRegistroCompletado?.addEventListener("click", function (e) {
    listaInvitados?.classList.remove("ocultar");
    modalRegistroCompletado?.classList.remove("active");
    checkout.classList.add("ocultar");
  });
  closemodalRegistroCompletado?.addEventListener("click", function (e) {
    listaInvitados?.classList.remove("ocultar");
    modalRegistroCompletado?.classList.remove("active");
    checkout.classList.add("ocultar");
  });
  const EditarlistaInvitados = document.querySelector(
    ".listaInvitados .title .editarInvitadosBtn"
  );
  EditarlistaInvitados?.addEventListener("click", function (e) {
    listaInvitados.classList.add("ocultar");
    itemParrilla.classList.remove("ocultarContent2");
  });

  const atrasItemParrilla = document.querySelector(
    "main.reservas .itemParrilla .atras"
  );
  atrasItemParrilla?.addEventListener("click", function (e) {
    itemParrilla.classList.add("ocultarContent2");
    contentParrillas.classList.remove("ocultarContent");
  });

  const tablaRegistro2 = document.querySelector("main.reservas .tablaRegistro");
  const checkoutatras = document.querySelector(
    "main.reservas .checkout a.atras"
  );
  checkoutatras?.addEventListener("click", function (e) {
    checkout.classList.add("ocultar");
    tablaRegistro2.classList.remove("ocultarContent2");
  });
});

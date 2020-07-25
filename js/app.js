$(document).ready(function () {
  // Slider

  if (window.location.href.indexOf("index") > -1) {
    $(function () {
      $(".bxslider").bxSlider({
        mode: "fade",
        captions: true,
        slideWidth: 1200,
      });
    });
  }

  // Posts
  if (window.location.href.indexOf("index") > -1) {
    let posts = [
      {
        title: "prueba de titulo 1",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del año " +
          moment().format("YYYY"),
        content: "lorem ipsum param pan pam",
      },
      {
        title: "prueba de titulo 2",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del año " +
          moment().format("YYYY"),
        content: "lorem ipsum param pan pam",
      },
      {
        title: "prueba de titulo 3",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del año " +
          moment().format("YYYY"),
        content: "lorem ipsum param pan pam",
      },
      {
        title: "prueba de titulo 4",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del año " +
          moment().format("YYYY"),
        content: "lorem ipsum param pan pam",
      },
    ];

    posts.forEach((item, index) => {
      let post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="fecha">${item.date}</span>
        <p>
            ${item.content}
        </p>
        <a href="#" class="boton-mas">Leer mas...</a>
        </article>
      `;

      $("#posts").append(post);
    });
  }

  // Selector de tema

  let theme = $("#theme");

  $("#to-orange").click(function () {
    theme.attr("href", "css/orange.css");
  });

  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });

  $("#to-black").click(function () {
    theme.attr("href", "css/black.css");
  });

  // scroll arriba de la web

  $(".subir").click(function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );

    return false;
  });

  // login falso

  $("#login form").submit(function () {
    let form_nombre = $("#form_nombre").val();

    localStorage.setItem("form_nombre", form_nombre);
  });

  let form_nombre = localStorage.getItem("form_nombre");

  if (form_nombre != null && form_nombre != undefined) {
    let about_p = $("#about p");
    about_p.html("<br/><strong>Bienvenido, " + form_nombre + "</strong>");
    about_p.append(
      '<div id="logout_box"> <a href="#" id="logout"> Cerrar sesion </a> </div>'
    );

    $("#login form").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }
});

$(document).ready(function () {
  // Validacion formulario

  /*  $('form input[type="date"]').datepicker({
            dateFormat: 'dd-mm-yyyy'
        }); */

  $.validate({
    lang: "es",
    errorMessagePosition: "top",
    scrollToTopOnError: true,
  });
});

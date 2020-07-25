$(document).ready(function () {
  setInterval(function () {
    let reloj = moment().format("hh:mm:ss");

    $("#reloj").html(reloj);
  }, 1000);
});

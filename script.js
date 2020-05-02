$(document).ready(function () {
  $("button").click(function () {

    cat_op = parseInt($("input[id = cateto1]").val());
    cat_adj = parseInt($("input[id = cateto2]").val());


    if (!cat_op || !cat_adj) {
      alert('Adicione um número válido')
      return
    }

    hipotenusa = (cat_op * cat_op) + (cat_adj * cat_adj);
    senoA = hipotenusa / cat_adj;
    senoB = hipotenusa / cat_op;
    cosA = hipotenusa / cat_adj;
    cosB = hipotenusa / cat_op;
    tanA = cat_op / cat_adj;
    tanB = cat_adj / cat_op;

    $("input[id = hipotenusa]").val(hipotenusa);
    $("input[id = senoA]").val(senoA.toFixed(2));
    $("input[id = senoB]").val(senoB.toFixed(2));
    $("input[id = cosA]").val(cosA.toFixed(2));
    $("input[id = cosB]").val(cosB.toFixed(2));
    $("input[id = tanA]").val(tanA.toFixed(2));
    $("input[id = tanB]").val(tanB.toFixed(2));

    calcularHipotenusa({ cat_adj, cat_op });



    el = $(this).data('element');
    $(el).show();


  });

  return false;
});


function calcularHipotenusa(catetos) {
  console.log(catetos)
  var settings = {
    "url": "https://atlas-231814.appspot.com/calcula",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({ "cat_op": catetos.cat_op, "cat_adj": catetos.cat_adj }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });



}


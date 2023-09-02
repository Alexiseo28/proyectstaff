$(document).ready(function(){
    localStorage.setItem('carrusel_top', 0);
    localStorage.setItem('carrusel_bottom', 0);
    /** cuando se han cargado todos los archivos fisicos de la web ( .css .js .img etc) */
    /*setTimeout(function(){
      
    },300);*/
    $.ajax({
        type: "POST",
        url: "esApp",
        data: "tkn="+localStorage.getItem("token_pescolar")+"&ux="+localStorage.getItem("ux_pescolar")+"&fc=modescolar",
        success: function(rspData){
          var isJsn = IsJsonString(rspData);
          if(isJsn == true){
            var datax = JSON.parse(rspData);
            //
            for (var i = 0; i < datax["data"].length; i++) {
              if(datax["data"][i]["modestado"] == '1'){
                var modulos = datax["data"][i]["modservicio"].toLowerCase();
                var ciclo = datax["data"][i]["ciclo"];
                var fecha_ini = datax["data"][i]["fecha_ini"];
                var fecha_cie = datax["data"][i]["fecha_cie"];
                var anio = datax["data"][i]["anio"];
                //adada
                var servicios = $("."+modulos).length;
                for (var j = 0; j < servicios; j++) {
                  var liservi = $("."+modulos)[j];
                  var ciclo_div = $(liservi).attr("ciclo");
                  var fecha_ini_div = $(liservi).attr("fecha_ini");
                  var fecha_cie_div = $(liservi).attr("fecha_cie");
                  if(ciclo == ciclo_div && fecha_ini == fecha_ini_div && fecha_cie == fecha_cie_div){
                    $(liservi).css("display","");
                  }
                }
                if(modulos == "ae"){
                  $("#cpae").css("display","");
                }else{
                  $("#cpsv").css("display","");
                }
                //
              }
                
            }
            //
            var mat = document.querySelectorAll(".modulosusuario");
              var tamañoslider = 0;
              var tamañostotalmarginrigth=0;
              var margin=0;
              for (var i = 0; i < mat.length; i++) {
                if(mat[i].style.display != 'none'){
                  tamañoslider+=$(mat[i]).width();
                  margin=margin+2;
                }
              }
              $(".slider").width(tamañoslider+margin);
            //
          }else {
            ionLoadOff();
            msnSweet("error", "Conexión", "Error de conexión, intente nuevamente");
          }
        },error: function(e) {
          ionLoadOff();
          msnSweet("error", "Conexión", "Error de conexión, intente nuevamente");
        }
    });
    //
});
$(window).on("load", function (e) {
    /** cuando se cargo todos los archivos y esten listos */
    appInit();
    /*Real Tarjetas Proceso Matricula*/
    localStorage.setItem('cbohijos', '');
    localStorage.setItem('pm', 0);
    localStorage.setItem('espm', '');

    /*Simulacion de Tarjetas Proceso Academia*/
    /*localStorage.setItem('pa1', 0);
    localStorage.setItem('pa2', 0);
    localStorage.setItem('pa3', 0);*/

    /*Simulacion de Tarjetas Proceso Talleres*/
    /*localStorage.setItem('pt1', 0);
    localStorage.setItem('pt2', 0);
    localStorage.setItem('pt3', 0);*/

    /*Simulacion de Tarjetas Proceso Talleres*/
    localStorage.setItem('pvu1', 0);
    localStorage.setItem('pvu2', 0);
    localStorage.setItem('pvu3', 0);

    /*Simulacion de Archivos Proceso Matricula numero 1*/
    /*localStorage.setItem('dniP', '');
    localStorage.setItem('dniM', '');
    localStorage.setItem('dniA', '');
    localStorage.setItem('libreta_siagie', '');
    localStorage.setItem('dniAP', '');
    localStorage.setItem('cartaP', '');*/

    /*Simulacion de Archivos Proceso Matricula numero 7*/
    /*localStorage.setItem('fichaM', '');
    localStorage.setItem('codigoM', '');*/

    /*Simulacion de Voucher Proceso Matricula*/
    //localStorage.setItem('voucherM', '');

    /*Simulacion de Voucher Proceso Academia*/
    localStorage.setItem('voucherA', '');

    /*Simulacion de Voucher Proceso Talleres*/
    localStorage.setItem('voucherT', '');

    /*Simulacion de Voucher Proceso Vaciones Utiles*/
    localStorage.setItem('voucherVU', '');

     /*Simulacion de VOucher Proceso Centro de Pagos Varios*/
     //localStorage.setItem('voucherCPV', '');

    /*Variable del codigo del hijo*/
    //localStorage.setItem('codigoAlu', '1');

});

function galeria_archivo(img , dni) {
    $(".galeryVocuher .imgcont .cont").html("");
    $(".galeryVocuher").fadeIn(100);
    $(".galeryVocuher .imgcont .cont").html("<img id='"+dni+"' src='../escolar/voucherserviciosvarios/"+img+"' alt='' border=''>");
    var zoomImage = $(".galeryVocuher .imgcont .cont #"+dni);
    zoomImage.imageZoom({zoom : 200});
}

function galeria_documentos(img , dni) {
    $(".galeryVocuher .imgcont .cont").html("");
    $(".galeryVocuher").fadeIn(100);
    $(".galeryVocuher .imgcont .cont").html("<img id='"+dni+"' src='../escolar/dni_libretas/"+img+"' alt='' border=''>");
    var zoomImage = $(".galeryVocuher .imgcont .cont #"+dni);
    zoomImage.imageZoom({zoom : 200});
}
/*
function galeria_archivo(carpeta ,img , dni) {
    //voucherserviciosvarios
    $(".galeryVocuher .imgcont .cont").html("");
    $(".galeryVocuher").fadeIn(100);
    $(".galeryVocuher .imgcont .cont").html("<img id='"+dni+"' src='../escolar/"+carpeta+"/"+img+"' alt='' border=''>");
    var zoomImage = $(".galeryVocuher .imgcont .cont #"+dni);
    zoomImage.imageZoom({zoom : 200});
}
*/

function getFileExtension3(filename) {
      return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
}

function galeria_archivo_close() {
    $(".galeryVocuher .imgcont .cont").html("");
    $(".galeryVocuher").fadeOut(100);
}

function copiarFront(id) {
    var codigoACopiar = document.getElementById(id);
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
}

function randoUniqApps() {
    var rand = Math.floor(Math.random() * 1000000);
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 12; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result+rand;
}

function centro_pagos(elemento,refreshcip){
  $(".buttonsCentroPagos").removeClass("buttonsCentroPagosActivo");
  $(".centropagosescolar").addClass("buttonsCentroPagosActivo");
  //$(elemento).addClass("buttonsCentroPagosActivo");
  var value = elemento;
  ionLoadOn();
  $.ajax({
    type: "POST",
    url: "esApp",
    data: "tkn="+localStorage.getItem("token_pescolar")+"&ux="+localStorage.getItem("ux_pescolar")+"&serviu="+value+"&refreshcip="+refreshcip+"&sede="+localStorage.getItem("idsede_pescolar")+"&fc=cpcentropago",
    success: function(rspData){
      //console.log(rspData);
      var isJsn = IsJsonString(rspData);
      if(isJsn == true){
        var datax = JSON.parse(rspData);
        //
        $('.contenido-main').html('');
        $('.contenido-main').append(datax['tmpl']);
        localStorage.setItem('carrusel_top', 0);
        $(".btn-top").removeClass("active-carrusel-items");
        localStorage.setItem('carrusel_bottom', 0);
        ionLoadOff();
        //
      }else {
        ionLoadOff();
        msnSweet("error", "Conexión", "Error de conexión, intente nuevamente");
      }
    },error: function(e) {
      ionLoadOff();
      msnSweet("error", "Conexión", "Error de conexión, intente nuevamente");
    }
  });
}

function centro_pagos_varios(elemento,refreshcip){
  $(".buttonsCentroPagos").removeClass("buttonsCentroPagosActivo");
  $(".centropagosvarios").addClass("buttonsCentroPagosActivo");
  //$(elemento).addClass("buttonsCentroPagosActivo");
  var value = elemento;
  ionLoadOn();
  $.ajax({
    type: "POST",
    url: "esApp",
    data: "tkn="+localStorage.getItem("token_pescolar")+"&ux="+localStorage.getItem("ux_pescolar")+"&serviu="+value+"&refreshcip="+refreshcip+"&sede="+localStorage.getItem("idsede_pescolar")+"&fc=cpcentropago",
    success: function(rspData){
      //console.log(rspData);
      var isJsn = IsJsonString(rspData);
      if(isJsn == true){
        var datax = JSON.parse(rspData);
        //
        $('.contenido-main').html('');
        $('.contenido-main').append(datax['tmpl']);
        localStorage.setItem('carrusel_top', 0);
        $(".btn-top").removeClass("active-carrusel-items");
        localStorage.setItem('carrusel_bottom', 0);
        ionLoadOff();
        //
        if(refreshcip!=""){
          $(".root-intpop").html("");
        }
        //
      }else {
        ionLoadOff();
        msnSweet("error", "Conexión", "Error de conexión, intente nuevamente");
      }
    },error: function(e) {
      ionLoadOff();
      msnSweet("error", "Conexión", "Error de conexión, intente nuevamente");
    }
  });
}

function botones_top(elemnt_a){
      var value=$(elemnt_a).data('value');
      $(".mouseover").css("display","block");
      $(".buttonsCentroPagos").removeClass("buttonsCentroPagosActivo");
      $.ajax({
        type: "POST",
        url: "esApp",
        data: "tkn="+localStorage.getItem("token_pescolar")+"&ux="+localStorage.getItem("ux_pescolar")+"&serviu="+value+"&fc=bcarrusel",
        success: function(rspData) {
          var isJsn = IsJsonString(rspData);
          if(isJsn == true) {
            var datax = JSON.parse(rspData);
            var mat = document.querySelectorAll(".btn-top");
            $(".btn-top").removeClass("active-carrusel-items");
            for (var i = 0; i < mat.length; i++ )
            {
              //
              if($(mat[i]).data('value')==value){
                $(mat[i]).addClass('active-carrusel-items');
              }
              //
              if(value==$(mat[i]).data('value') && localStorage.getItem('carrusel_top') != value){
                localStorage.setItem('carrusel_top', value);
                var carrusel_color= "sticky-background-color-"+(i+1);
                var opcion_carrusel=datax['tmpl'];
                if(esVisible(div)==false){
                  $('.slider-footer').html('');
                  $('.slider-footer').append(opcion_carrusel);
                  $('.draggable').addClass("ocultar");
                  $(".sticky-footer").addClass("slide-top");
                  $(".sticky-footer").addClass(carrusel_color);
                  var botones_bottom = document.querySelectorAll(".btn-bottom");

                  $(botones_bottom[0]).trigger("click");
                  $(botones_bottom[0]).addClass('active-carrusel-items-opciones');

                  //cambiar el width del carrusel inferior
                  var carrusel_bottom = document.querySelectorAll(".slider-footer ul li");
                  var tamañoslider = 0;
                  var tamañostotalmarginrigth=0;
                  var margin=0;
                  for (var i = 0; i < carrusel_bottom.length; i++) {
                    tamañoslider+=$(carrusel_bottom[i]).width();
                    margin=margin+2;
                  }
                  $(".slider-footer").width(tamañoslider+margin);
                  //comprobar el estado del proceso

                  //
                }else{
                  setTimeout(function(){
                      animacion_cierre(opcion_carrusel);
                  },300);

                  setTimeout(function(){
                      animacion_open(carrusel_color);
                  },600);
                }
              }else if(value==$(mat[i]).data('value')){
                var carrusel_color= "sticky-background-color-"+(i+1);
                $(".sticky-footer").removeClass("slide-bottom");

                if(esVisible(div)==false){
                  $(".sticky-footer").addClass("slide-top");
                  $(".sticky-footer").addClass(carrusel_color);
                }else{
                  $(".sticky-footer").removeClass("slide-bottom");
                  setTimeout(function(){
                      animacion_open(carrusel_color);
                  },600);

                }
              }
            }
          } else {
            msnSweet("error", "Conexión", "Error de conexión, intente nuevamente");
          }
        },error: function(e) {                    
                    
          msnSweet("error", "Conexión", "Error de conexión, intente nuevamente");
        }
    }); 
}

function animacion_cierre(append){
  $(".sticky-footer").removeClass("slide-bottom");
  $(".sticky-footer").removeClass("sticky-background-color-1");
  $(".sticky-footer").removeClass("sticky-background-color-2");
  $(".sticky-footer").removeClass("sticky-background-color-3");
  $(".sticky-footer").removeClass("sticky-background-color-4");
  $('.slider-footer').html('');
  $('.slider-footer').append(append);
  $('.draggable').addClass("ocultar");
  var botones_bottom = document.querySelectorAll(".btn-bottom");
  $(botones_bottom[0]).trigger("click");
  $(botones_bottom[0]).addClass('active-carrusel-items-opciones');

  //cambiar el width del carrusel inferior
  var carrusel_bottom = document.querySelectorAll(".slider-footer ul li");
  var tamañoslider = 0;
  var tamañostotalmarginrigth=0;
  var margin=0;
  for (var i = 0; i < carrusel_bottom.length; i++) {
    tamañoslider+=$(carrusel_bottom[i]).width();
    margin=margin+2;
  }
  $(".slider-footer").width(tamañoslider+margin);
}

function animacion_open(color){
  $(".sticky-footer").addClass(color);
  $(".sticky-footer").addClass("slide-top");
}

function esVisible(elem){
    /* Ventana de Visualización*/
    var posTopView = $(window).scrollTop();
    var posButView = posTopView + $(window).height();
    /* Elemento a validar*/
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    /* Comparamos los dos valores tanto del elemento como de la ventana*/
    return ((elemBottom < posButView && elemBottom > posTopView) || (elemTop >posTopView && elemTop< posButView));
}

function ionLoadOn(){
    $(".ionload").fadeIn(80);
    setTimeout(() => {        
        $(".ionload .preload").fadeIn(1);
    }, 200);
}
function ionLoadOff(){
    $(".ionload .preload").fadeOut();
    $(".ionload").fadeOut(300);
}

function msnSweetClose(vicon, ti, info) {
    Swal.fire({
        icon: vicon,
        title: ti,
        html: info,
        confirmButtonColor: '#0d3082',
        confirmButtonText: 'Cerrar',
        returnFocus: false,
        allowEscapeKey: true,
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('token_pescolar');
            localStorage.removeItem('ux_pescolar');
            localStorage.removeItem('idsede_pescolar');
            localStorage.removeItem('nivel_pescolar');
            $(location).attr('href', '/escolar');
        }
    });    
}
function msnSweet(vicon, ti, info) {
    Swal.fire({
        icon: vicon,
        title: ti,
        html: info,
        confirmButtonColor: '#0d3082',
        confirmButtonText: 'Cerrar',
        returnFocus: false,
        allowEscapeKey: true,
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
        }
    });
}

function msnSweetImagen(ti, text, img) {
    Swal.fire({
        title: ti,
        text: text,
        imageUrl: img,
        imageWidth: 700,
        imageHeight: 600,
        imageAlt: 'Custom Image',
    });
}

function IsJsonString(str) {
  try {
     JSON.parse(str);
  } catch (e) {
     return false;
  }
  return true;
}

function closeTKApp() {
    localStorage.removeItem('token_pescolar');
    localStorage.removeItem('ux_pescolar');
    localStorage.removeItem('idsede_pescolar');
    localStorage.removeItem('nivel_pescolar');
    $(location).attr('href', '/escolar');
}

function poppuInternasClose() {
    $("body").removeClass("onFormIn");
}

function poppuInternas(templt) {
    $("body").addClass("onFormIn");
    $(".root-intpop").html(templt);
}

/**/
function poppuInternasOn(templt) {
    $(".bglodinterformxprin").fadeIn(200);
    $(".root-pripop").html("");
    $(".root-pripop").html(templt);
}

function poppuInternasOff() {
    $(".bglodinterformxprin").fadeOut(200);
}

function poppuInternasSeguOn(templt) {
    $(".bglodinterformxsegun").fadeIn(200);
    $(".root-segupop").html("");
    $(".root-segupop").html(templt);
}

function poppuInternasSeguOff() {
    $(".bglodinterformxsegun").fadeOut(200);
}
/**/

function poppuDropzoneClose() {
    $("body").removeClass("onFormDropzone");
}

function poppuDropzone(templt) {
    $("body").addClass("onFormDropzone");
    $(".root-dropzonepop").html(templt);
}

function CerrarSesion() {
    $("body").removeClass('bgLoadx');    
    $.ajax({
        type: "POST",
        url: "esApp",
        data: "tkn="+localStorage.getItem('token_pescolar')+"&ux="+localStorage.getItem('ux_pescolar')+"&fc=csesion",
        success: function(rspData){
            var isJsn = IsJsonString(rspData);
            if(isJsn == true) {
                var datax = JSON.parse(rspData);
                if(datax.rsp == "close") {
                    closeTKApp();
                } else {
                    $("body").addClass('bgLoadx');
                    msnSweet("error", "Conexión", "Error de conexión, intente nuevamente ó refresque el navegador");
                }
            } else {
                $("body").addClass('bgLoadx');                
                msnSweet("error", "Conexión", "Error de conexión, intente nuevamente ó refresque el navegador");
            }
        },error: function(e) {
            $("body").addClass('bgLoadx');
            msnSweet("error", "Conexión", "Error de conexión, intente nuevamente ó refresque el navegador");
        }
    });
}

function appInit() {
  var ses = localStorage.getItem('token_pescolar');
  if(ses) {
        $.ajax({
      type: "POST",
      url: "esApp",
      data: "tkn="+ses+"&ux="+localStorage.getItem('ux_pescolar')+"&fc=init",
      success: function(rspData) {
                var isJsn = IsJsonString(rspData);
                if(isJsn == true) {
                    var datax = JSON.parse(rspData);
                    if(datax.rsp == "exito") {
                        $("body").addClass('bgLoadx');
                        $("#dniuserx").html('<i class="fas fa-user-check"></i> '+datax.tkAlias);
                    } else {
                        msnSweetClose("error", "Session", "Se ha cerrado la session a nuestro sistema, Sistema Seguro");
                    }                    
                } else {
                    msnSweetClose("error", "Session", "Se ha cerrado la session a nuestro sistema, Sistema Seguro");
                } 
                
      },error: function(e) {                
                msnSweetClose("error", "Session", "Se ha cerrado la session a nuestro sistema, Sistema Seguro");
      }
    });
  } else {        
        closeTKApp();
  }
}

function ventana_main(elemnt_button){
  var button_value = $(elemnt_button).data('value');
  var servicio = $(elemnt_button).attr("servicio");
  var ciclo = $(elemnt_button).attr("ciclo");
  var fecha_ini = $(elemnt_button).attr("fecha_ini");
  var fecha_cie = $(elemnt_button).attr("fecha_cie");
  var anio = $(elemnt_button).attr("anio");
  var datos = "&servicio="+servicio+"&ciclo="+ciclo+"&fecha_ini="+fecha_ini+"&fecha_cie="+fecha_cie+"&anio="+anio;
  ionLoadOn();
  $.ajax({
        type: "POST",
        url: "esApp",
        data: "tkn="+localStorage.getItem("token_pescolar")+"&ux="+localStorage.getItem("ux_pescolar")+"&fro="+button_value+datos+"&fc=fop",
        success: function(rspData) {
          //console.log(rspData);
          var isJsn = IsJsonString(rspData);
          if(isJsn == true) {
            var datax = JSON.parse(rspData);
            var mat = document.querySelectorAll(".btn-bottom");
            for (var i = 0; i < mat.length; i++ )
            {
              $(mat[i]).removeClass("active-carrusel-items-opciones");
              if($(mat[i]).data('value')==button_value){
                $(mat[i]).addClass('active-carrusel-items-opciones');
              }
              if(button_value==$(mat[i]).data('value') && localStorage.getItem('carrusel_bottom') != button_value){
                localStorage.setItem('carrusel_bottom', button_value);
                
                $('.contenido-main').html('');
                $('.contenido-main').append(datax['tmpl']);
              }
            }
            //
            ionLoadOff();
          } else {
            msnSweet("error", "Conexión", "Error de conexión, intente nuevamente");
            ionLoadOff();
          } 
        },error: function(e) {                               
          msnSweet("error", "Conexión", "Error de conexión, intente nuevamente");
          ionLoadOff();
        }
  });
}

/*Evento mouseover para el carrusel inferior*/
mouseover.addEventListener('mouseover', function(){
  if(localStorage.getItem('carrusel_top')!=0){
    $(".sticky-footer").removeClass("slide-bottom");
    $(".sticky-footer").addClass("slide-top");
  } 
})

//almacenando los div en variables
var div = document.getElementById('sticky_footer');

//funcion para cualquier clic en el documento
document.addEventListener("click", function(e){

  var clic = e.target;
  var mat = document.querySelectorAll(".ocultar");
  var result = false;

  for (var i = 0; i < mat.length; i++ )
  {
    if(clic == mat[i]){
      result = true;
      break;
    }
  }
  /* Ventana de Visualización*/
    var posTopView = $(window).scrollTop();
    var posButView = posTopView + $(window).height();
    /* Elemento a validar*/
    var elemTop = $(div).offset().top;
    var elemBottom = elemTop + $(div).height();

  if(esVisible(div)==true && result==false){

     $(".sticky-footer").removeClass("slide-top");
     $(".sticky-footer").addClass("slide-bottom");

    }

}, false);

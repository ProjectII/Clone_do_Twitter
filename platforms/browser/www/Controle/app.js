$(function () {
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('ul.tabs').tabs();
       
    $('#loading').modal({
      dismissible: false
    });
     Materialize.updateTextFields();
     const url = new URL(location);
     const params = new URLSearchParams(url.search);
     if (params.has("toast")) {
        Materialize.toast(params.get("toast"), 1500);
     } 
});


function showLoader() {
    $('#loading').modal("open");
}

function hideLoader() {
    $('#loading').modal("close");
}



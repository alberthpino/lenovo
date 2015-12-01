$(document).ready(function() { 
    $base_url = $.fn.baseUrl();
    $('div.ui-loader').remove();
    //$('div#seccionJuego').hide();
});

$.fn.addUrl = function() { 
    $('a.btnModuloInicio').attr('href', $base_url.replace('index.php/', ''));
    $('a.btnModuloHuesped').attr('href', $base_url + 'home/huesped/');
    $('a.btnModuloHabitacion').attr('href', $base_url + 'home/habitacion/');
    $('a.btnModuloReservacion').attr('href', $base_url + 'home/reservacion/');
    $('a.btnModuloTienda').attr('href', $base_url + 'home/tienda/');
}

$.fn.baseUrl = function() { 
    var url_local = $(location).attr('href'),
        opcional = '/',
        a = url_local.split(opcional),
        url_original = (a[0] != 'http:' && a[0] != 'https:') ? 'http://' + a[0] + '/' : a[0] + '//' + a[1] + a[2] + '/';
    
    return url_original + '/';
}

$.fn.baseUrl2 = function() { 
    var url_local = jQuery(location).attr('href'),
        extension = '.php/',
        opcional = '/',
        a = url_local.split(extension),
        url_original = a[0] + extension;
    
    if (a.length <= 1) { 
        b = url_local.split(opcional);
        url_local = url_local.replace(new RegExp(b[b.length-1],"g") , "");
        url_original = url_local + 'lenovo' + extension;
    }
    
    return url_original;
}
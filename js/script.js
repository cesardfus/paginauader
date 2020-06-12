$('.tile')
    // acción del ratón
    .on('mouseover', function(){
      // escala la foto pasando por encima
      $(this).children('.photo').css({ 'transform': 'scale('+ $(this).attr('data-scale') +')' });
     })
    .on('mouseout', function(){
      // escala la foto a su tamaño original al salir de ella
      $(this).children('.photo').css({ 'transform': 'scale(1)' });
     })
    .on('mousemove', function(e){
      // aquí es donde se "mueve la foto"
      $(this).children('.photo').css({ 'transform-origin':
                                       ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // crear el los contenidos para cada foto
    .each(function(){

      $(this)
        // añadir contenedor para las fotos
        .append('<div class="photo"></div>')
        // crear imagen de fondo para cada contenedor
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
});

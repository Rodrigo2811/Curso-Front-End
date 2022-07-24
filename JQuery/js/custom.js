// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {

   $('.owl-carousel').owlCarousel();

   let titulos = $('h4') // tag

   let itens = $('.featured-item') // class

   let destaques = $('#featured') // id

   console.log(titulos.first());

   // Configuração de produtos

   $('.featured-item a').addClass('btn btn-dark stretch-link');

   $('h4').append('<span class="badge bg-secondary">Novo</span>')

   $('.badge').css({
      'margin-left': '5px',
      'background': 'red',
      'font-size': '.9rem',
   })
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   //  $('.featured-item:first h4').css('color', '#f00')

   $('.featured-item h4').dblclick(function () {

      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
      });

   });

   /*
    * Manipulação de eventos
    */
   $('.featured-item a').on('blur', function (event) {

      event.preventDefault();

      alert('Produto esgotado');

   })



   $(function(){
		$(".btn").hover(function(){
				//Ao posicionar o cursor sobre a botao
				$(this).css('background', '#3a8bcd'
                );
			},
			function(){
				//Ao remover o cursor do botao
				$(this).css(
               'background', 'grey'
               );
			}
		);
	});
        
   })

      $('.featured-items').css({
      'background': '#bebed2',
   })
   
$(document).ready(function () {
   $('social-icons').css({
      'width': '50px'
   })
})

$('.featured-item:nth(1)').hide(500, function () {

   console.log($(this).find('h4').text() + 'Esgotado')
})
   .show(500, function () {
      console.log($(this).find('h4').text() + 'em estoque')

   })

/*
* criar  um ouvinte de  eventos .nav-modal-open
*/

$('.nav-modal-open').on('click', function (e) {

   e.preventDefault();

   let elem = $(this).attr('rel')

   $('.modal-body').html($('#' + elem).html())

   $('.modal-header h5.modal-title').html($(this).text())

   let myModal = new bootstrap.Modal($('#modelId'))

   myModal.show()
})


$(document).ready(function () {
   $('.sub-footer').css({
      'background': 'blue',
     
   })

   $('.sub-footer p').css({
      'color': '#eee'
   })
})
  

$(document).ready(function(){
   $("input").blur(function(){
    if($(this).val() == "")
        {
            $(this).css({"border" : "1px solid #F00", "padding": "2px"});
        }
   });
   $("#botao").click(function(){
    var cont = 0;
    $("#form-contato input").each(function(){
        if($(this).val() == "")
            {
                $(this).css({"border" : "1px solid #F00", "padding": "2px"});
                cont++;
            }
       });
    if(cont == 0)
        {
            $("#form-contato").submit();
        }
   });
});



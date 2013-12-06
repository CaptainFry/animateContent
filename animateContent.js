/*
        animateContent - The jQuery plugin for animate
		your content inside your page
        by Etienne Pichereau 
        
        Dual licensed under MIT and GPL.
*/





(function($) {

	  $.fn.animateContent=function(options)
		{                 //On définit nos paramètres par défaut
           var defauts=
           {        'speed': 5000,       //Intervalle entre chaque image, en millisecondes
					'effect': '300px',       //effet utiliser   
					'callback': null        //Fonction appelée à chaque nouvelle image
		   };  
		   
		    var parametres=$.extend(defauts, options);
			
			var element=$(this);
			 
			last_class="";
			
			prefix = getPrefixBrowser();

			changeContent($("#internet"));
			
			init(element);
			
			// Initialisation 
			function init(element){
			
				$(element).each(function(){
							$(this).on("click", function (){changeContent(this);});
				});
			
			}
			
			/*function getTheClass(){
				
				var table_class=new Array();
				
				$(".zoomEffect").each(function(i){
						table_class[i]=$(this).attr('id');
				});
				
				return table_class;
			}*/
			
			
			function changeContent(element){
							
				var a_afficher=new Array();
				a_afficher=$("."+$(element).attr('id'));

				
				if (last_class!="" && last_class!=$(element).attr('id') )

				{

					var a_supprimer_tmp=new Array();
					a_supprimer_tmp=$("."+last_class);

					
					var ordre_new=parseFloat(document.getElementById($(element).attr('id')).dataset.ordre)+1;
					var ordre_old=parseFloat(document.getElementById(last_class).dataset.ordre)+1;


					$(':animated').stop(true, true);

					if ( ordre_new > ordre_old )

					{

						$(a_supprimer_tmp).animate({opacity: 0, left:"-175px"},{

											queue:    true,

											duration: 250,

											complete: function () {
											
												$(a_supprimer_tmp).css({ 'display': 'none' });

												$(a_supprimer_tmp).css({'left':'-175px'});

												$(a_afficher).css({ 'display': 'block' });

												$(a_afficher).css({'position':'relative'}).animate({left:0, top:0,opacity: 1},{duration: 250});

											}

						});

					}

					else
					{

						$(a_supprimer_tmp).animate({opacity: 0, left:"175px"},{

											queue:    true,

											duration: 250,

											complete: function () {

												$(a_supprimer_tmp).css({ 'display': 'none' });

												$(a_supprimer_tmp).css({'left':'175px'});							

												$(a_afficher).css({ 'display': 'block' });

												$(a_afficher).css({'position':'relative'}).animate({left:0, top:0,opacity: 1},{duration: 250});

											}

						});	

					}

				}

				else{	

					$(a_afficher).css({'position':'relative', 'display':'block'}).animate({left:0, top:0,opacity: 1},{duration: 400});

				}
				last_class=$(element).attr('id');

			}
			
			
			
			
			// Get the prefix of the user's browser
			function getPrefixBrowser(){
			
				var prefix;
				if(window.chrome || navigator.userAgent.indexOf("Safari")>0 || navigator.userAgent.indexOf("Android")>0){	
					prefix="-webkit-";
				}
				else if ( navigator.userAgent.indexOf("MSIE")>0 )
				{
					prefix="-ms-";
				}
				else if  ( navigator.userAgent.indexOf("Firefox")>0 )
				{
					prefix="-moz-";
				}
				else if  ( navigator.userAgent.indexOf("Opera")>0 )
				{
					prefix="-o-";
				}
				
				return prefix;
				
			}
			
			
			
		}
			
			
})(jQuery);
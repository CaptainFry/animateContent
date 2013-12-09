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
           {        'speed': 2000,		   //Intervalle entre chaque image, en millisecondes
					'gap':-150,  
					'effect': 'melted',       //effet utiliser  ( en travaux) 
					'callback': null        //Fonction appelée à chaque nouvelle image
		   };  
		   
		    var parameters=$.extend(defauts, options);
			
			parameters.speed = parameters.speed/2;
			
			var elements=$(this);
			 
			last_class="";
			
			prefix = getPrefixBrowser();
	
			init(elements);
			
			// Initialisation 
			function init(elements){
				
				
				$(elements).each(function(){
				
							// Modify the position of the current element
							setCssProperties($(this));
							
							// Initialisation of the fisrt element
							if (  $(this).hasClass( "first" )){
								changeContent($(this));
							}
							
							if (parameters.effect=='meltedTranslation'){
								$(this).on("click", function (){changeContent(this);});
							}
							else if (parameters.effect=="melted"){
								$(this).on("click", function (){changeContent(this);});
							}
							else{
								return;
							}
				});
				
				// $(elements).each(function(){
						// if (  $(this).hasClass( "first" )){
							// changeContent($(this));
						// }
				// });
				
				return false;	
			}
			
			
			function setCssProperties(elements){
			
				if (parameters.effect=='meltedTranslation'){
								
				}
				else if (parameters.effect=="melted"){
								parameters.gap=0;
				}
			
				$(elements).each(function(i){
						$("."+$(this).attr("data-className")).css({
														'display': 'none',
														'left':parameters.gap,
														'opacity':0
														});
				});
			
			}
			
			
			function getTheClass(elements){
				
				var table_class=new Array();
				$(elements).each(function(i){
						table_class[i]=$(this).attr("data-className");
				});
							
				return table_class;
			}
			
			
			function changeContent(element){
						

				$(':animated').stop(true, true);
				var a_afficher=new Array();
				a_afficher=$("."+$(element).attr("data-className"));
							
				var ordre_new=parseFloat($(element).attr("data-ordre"))+1;
				
				
				
				
				
				
				
				if (last_class!="" && last_class!=$(element).attr("data-className") )

				{

					var a_supprimer_tmp=new Array();
					a_supprimer_tmp=$("."+last_class);

					
					$(':animated').stop(true, true);

					if ( ordre_new < ordre_old )

					{
					
						a_afficher.css({
								'display': 'none',
								'left':(-1)*parameters.gap,
								'opacity':0
								});

						$(a_supprimer_tmp).animate({opacity: 0, left:parameters.gap},{

											queue:    false,

											duration: parameters.speed,

											complete: function () {
											
												$(a_supprimer_tmp).css({ 'display': 'none','left':parameters.gap });

												$(a_afficher).css({'position':'relative', 'display': 'block'}).animate({left:0, top:0,opacity: 1},{duration: parameters.speed});

											}

						});

					}

					else
					{
						a_afficher.css({
								'display': 'none',
								'left':parameters.gap,
								'opacity':0
								});

						$(a_supprimer_tmp).animate({opacity: 0, left:(-1)*parameters.gap},{

											queue:    false,

											duration: parameters.speed,

											complete: function () {

												$(a_supprimer_tmp).css({ 'display': 'none','left':(-1)*parameters.gap });

												$(a_afficher).css({'position':'relative','display': 'block'}).animate({left:0, top:0,opacity: 1},{duration: parameters.speed});

											}

						});	

					}

				}

				else{	

					$(a_afficher).css({'position':'relative', 'display':'block'}).animate({left:0, top:0,opacity: 1},{duration: parameters.speed});

				}
				last_class=$(element).attr("data-className");
				ordre_old=ordre_new;
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
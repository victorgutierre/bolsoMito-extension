(function() {
	//bolso 
	var main = function($) { 
		
		var self = $.bolso = new function(){};
		
		$.extend(self, {
			bolsoImgs : [
        'https://yt3.ggpht.com/a-/AN66SAyAI3Ee7eL2ITf0896ewtYsvo5Ui8O7aIMz2g=s900-mo-c-c0xffffffff-rj-k-no',
        'https://i2.wp.com/gigadicas.com/v2/wp-content/uploads/2017/08/bolsomito.jpg?fit=900%2C450',
        'https://3.bp.blogspot.com/-UjoOHi5jDsY/WbFNCfDQRPI/AAAAAAAABgg/d2c4XE6ZilsxscaiOHITXSJzEfZDx31AQCLcBGAs/s1600/bolsomito-presidento.jpg',
        'https://www.jornaldopais.com.br/wp-content/uploads/2017/12/WHAS.jpg',
        'http://i.imgur.com/xOcwk48.jpg',
        'https://constantino-static.gazetadopovo.com.br/assets/2017/11/bolsonaro-6.jpg',
        'https://osdivergentes.com.br/wp-content/uploads/2018/07/Bolsonaro.jpeg',
        'https://media1.tenor.com/images/9e834e3c87e13f86133a9a3f5b5a3f52/tenor.gif',
        'https://thumbs.gfycat.com/AdvancedThickBlueshark-max-1mb.gif',
        'https://media1.tenor.com/images/3ad53edf6b36a0f14e4b0b633c457dc4/tenor.gif?itemid=9324504',
        'https://thumbs.gfycat.com/UnknownHandsomeEgret-size_restricted.gif',
        'https://i.imgflip.com/16jju7.gif',
        'https://abrilveja.files.wordpress.com/2018/09/age20180618164.jpg',
        'https://www.pragmatismopolitico.com.br/wp-content/uploads/2018/08/tse-recebe-pedido-para-impugnar-candidatura-de-jair-bolsonaro.jpg',
        'https://www.tribunapr.com.br/wp-content/uploads/sites/1/2018/08/bolsonaro-1-825x509.jpg?a86372',
        'https://www.revistaforum.com.br/wp-content/uploads/2018/06/bolsonaro-agencia-camara.jpg',
        'https://ep01.epimg.net/brasil/imagenes/2017/11/23/politica/1511456838_152216_1511458279_noticia_normal.jpg',
        'https://tercalivre.com.br/wp-content/uploads/2018/08/bolsonaro-1.png',
        'https://ogimg.infoglobo.com.br/in/22951121-bcc-c57/FT1086A/420/xbolsonaro.jpg.pagespeed.ic.znhUzP1MkO.jpg',
        'https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2018/04/09c0941f98121eeb95cfc0826be0cd2ed6dd7fb8.jpg',
        'https://1.bp.blogspot.com/-v9BW1mAsx7s/Vz8id1iHq-I/AAAAAAAAjnY/KnXdbrNZuZEYfuVGDBqAFJoeuYxsAIcFQCLcB/s785/Bolsomito.jpg',
        'https://2.bp.blogspot.com/-jy0xu8NrIMg/WqxAveycA5I/AAAAAAAAGK8/1uOAondDjCgA3M8kcgC0EQ3eg2Gp4BChACLcBGAs/s1600/mitou.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEShos4Em7RfDdTLgWeBXsP3ARC8x2X2MNtbyiQRcxk-XViI1q',
        'https://pbs.twimg.com/media/CmepNhCW8AAlQQF.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPlHOhzSPJM2g6GyeGTL086KCrN4rtMz8VKm_QcqfC-yi8IiO',
        'https://i2.wp.com/www.informeblumenau.com/wp-content/uploads/2018/05/Bolsonaro-paz-e-amoro.jpg?resize=678%2C381',
        'https://www.emaisgoias.com.br/wp-content/uploads/2018/07/WhatsApp-Image-2018-07-19-at-14.02.52.jpeg'
      ],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.bolsoImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 
 

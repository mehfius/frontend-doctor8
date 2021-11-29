
function pdftothumb(file){
      
        pdfjsLib.disableWorker = true;
   
        fileReader = new FileReader();
      
        fileReader.onload = function(ev) {
  
          pdfjsLib.getDocument(fileReader.result).then(function getPdfHelloWorld(pdf) {
     
            pdf.getPage(1).then(function getPageHelloWorld(page) {
              
              var scale = 1;
              var viewport = page.getViewport(scale);
              // var canvas = document.getElementById('the-canvas');
              
              var canvas = document.createElement("canvas");
              var random = Math.floor(Math.random() * 999999);
              canvas.id=(random);
              document.body.appendChild(canvas);
              
              
              var context = canvas.getContext('2d');
              canvas.height = viewport.height;
              canvas.width = viewport.width;

              var task = page.render({
                canvasContext: context,
                viewport: viewport
              })
              
              task.promise.then(function() {
                console.log(canvas.toDataURL('image/jpeg'));
                
                var getCanvas = document.getElementById(random); 
           
                getCanvas.parentNode.removeChild(getCanvas);
                
              });
            });
          }, function(error) {
            console.log(error);
          });
        };
      
        fileReader.readAsArrayBuffer(file.files[0]);
      
      }

function mountPS(){
	
	var pswp = cE("div");
	
			pswp.setAttribute("class","pswp");
			pswp.setAttribute("tabindex","-1");
			pswp.setAttribute("role","dialog");
			pswp.setAttribute("aria-hidden","true");
	
	var bg = cE("div");
			bg.setAttribute("class","pswp__bg");
	
	var scroll = cE("div");
			scroll.setAttribute("class","pswp__scroll-wrap");
	
	var container = cE("div");
			container.setAttribute("class","pswp__container");
	
	var item1 = cE("div");
			item1.setAttribute("class","pswp__item");
	
	var item2 = cE("div");
			item2.setAttribute("class","pswp__item");
	var item3 = cE("div");
			item3.setAttribute("class","pswp__item");
	

	
	
	var ui = cE("div");
			ui.setAttribute("class","pswp__ui pswp__ui--hidden");
	
	var bar =cE("div");
			bar.setAttribute("class","pswp__top-bar");
	
	var counter =cE("div");
			counter.setAttribute("class","pswp__counter");
	
	var close =cE("button");
			close.setAttribute("class","pswp__button pswp__button--close");
			close.setAttribute("title","Close (Esc)");
	
	var share =cE("button");
			share.setAttribute("class","pswp__button pswp__button--share");
			share.setAttribute("title","Share");
	
	var fs =cE("button");
				fs.setAttribute("class","pswp__button pswp__button--fs");
				fs.setAttribute("title","Toggle fullscreen");
	
	var zoom =cE("button");
				zoom.setAttribute("class","pswp__button pswp__button--zoom");
				zoom.setAttribute("title","Zoom in/out");
	
	var preloader =cE("div");
				preloader.setAttribute("class","pswp__preloader");
	
	var icn =cE("div");
			icn.setAttribute("class","pswp__preloader__icn");
	
	var cut =cE("div");
			cut.setAttribute("class","pswp__preloader__cut");
	
	var donut =cE("div");
			donut.setAttribute("class","pswp__preloader__donut");

		var modal =cE("div");
				modal.setAttribute("class","pswp__share-modal pswp__share-modal--hidden pswp__single-tap");
	
		var tooltip =cE("div");
				tooltip.setAttribute("class","swp__share-tooltip");	
	
		var left =cE("button");
				left.setAttribute("class","pswp__button pswp__button--arrow--left");	
				left.setAttribute("title","Previous (arrow left)");
	
		var right =cE("button");
				right.setAttribute("class","pswp__button pswp__button--arrow--right");	
				right.setAttribute("title","Next (arrow right)");
	
		var caption =cE("div");
				caption.setAttribute("class","pswp__caption");	
	
		var center =cE("div");
				center.setAttribute("class","pswp__caption__center");	
	
	  
	container.appendChild(item1);
	container.appendChild(item2);
	container.appendChild(item3);	
	
	cut.appendChild(donut);
	icn.appendChild(cut);
	preloader.appendChild(icn);
	
	bar.appendChild(counter);
	bar.appendChild(close);
	bar.appendChild(share);
	bar.appendChild(fs);
	bar.appendChild(zoom);
	bar.appendChild(preloader);

	modal.appendChild(tooltip);
	
	caption.appendChild(center);
	
	ui.appendChild(bar);
	ui.appendChild(modal);
	ui.appendChild(left);	
	ui.appendChild(right);		
	ui.appendChild(caption);
	
	scroll.appendChild(container);
	scroll.appendChild(ui);
	
	pswp.appendChild(bg);
	pswp.appendChild(scroll);
	
	got(document,"body")[0].appendChild(pswp);

}
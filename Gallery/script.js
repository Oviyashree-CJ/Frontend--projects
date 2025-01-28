var mainimg = document.querySelector('#main');
var images = document.querySelectorAll('.container');
for(var i = 0; i<images.length; i++){
    images[i].addEventListener('click',function(){
        var thumb = mainimg.src;
        mainimg.src = this.src;
        this.src = thumb;
    })
}
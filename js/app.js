var n_img = 10;
var current = 1;

function succ(){
    current++;
    if(current > n_img){
        current = 1;
    }
  
    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + current + ")").style.display = "block";
}

function prec(){
    current--;
    if(current == 0){
        current = n_img;
    }
  
    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + current + ")").style.display = "block";
}

setInterval(succ, 5000);



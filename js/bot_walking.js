let hov_bot_x = 0; 
let zoom_bot_x = 0;



function walk_bot(){

 setInterval(hover, 100)

}

function hover(){

if (hov_bot_x + 200 < window.innerWidth/2 ){

    hov_bot_x += 10;
}

else{
    // to compentace for screen size change

    hov_bot_x = window.innerWidth/2 - 200;
 

}

if (zoom_bot_x + 200 < window.innerWidth/2 ){

    zoom_bot_x += 10;
}

else{
    // to compentace for screen size change
    zoom_bot_x = window.innerWidth/2 - 200;

}

document.getElementById ("hov_bot").style.left = hov_bot_x + "px"; 
document.getElementById ("zoom_bot").style.right = zoom_bot_x + "px"; 

}






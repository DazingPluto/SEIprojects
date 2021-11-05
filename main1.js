let test = document.querySelector('.navbar');



test.addEventListener("mouseover", function( event ){
    let hoverOp= document.querySelectorAll('.newItem');
    let hoverText = document.querySelectorAll('.tester');
    console.log(hoverText);
    //console.log(hoverOp);
    // highlight the mouseover target
    hoverOp[0].style.margin = "100px";
    hoverOp[1].style.margin = "100px";
    hoverOp[2].style.margin = "100px";
    hoverOp[3].style.margin = "100px";
    hoverText[0].style.visibility = 'visible';
    hoverText[1].style.visibility = 'visible';
    hoverText[2].style.visibility = 'visible';
    hoverText[3].style.visibility = 'visible';
    hoverText[4].style.visibility = 'visible';
    hoverText[5].style.visibility = 'visible';
    hoverText[6].style.visibility = 'visible';
    hoverText[7].style.visibility = 'visible';
    hoverText[8].style.visibility = 'visible';
    hoverText[9].style.visibility = 'visible';
    hoverText[10].style.visibility = 'visible';
    hoverText[11].style.visibility = 'visible';

    //hoverText.style.display='content';
  
    // reset the color after a short delay
   setTimeout(function() {
    //    hoverOp[0].style.margin = "10px";
    //hoverOp[1].style.margin = "10px";
    //hoverOp[2].style.margin = "10px";
    //hoverOp[3].style.margin = "10px";
    //hoverText[0].style.visibility = 'hidden';
    //hoverText[1].style.visibility = 'hidden';
    //hoverText[2].style.visibility = 'hidden';
    //hoverText[3].style.visibility = 'hidden';
    //hoverText[4].style.visibility = 'hidden';
    //hoverText[5].style.visibility = 'hidden';
    //hoverText[6].style.visibility = 'hidden';
    //hoverText[7].style.visibility = 'hidden';
   // //hoverText[8].style.visibility = 'hidden';
    //hoverText[9].style.visibility = 'hidden';
    //hoverText[10].style.visibility = 'hidden';
    //hoverText[11].style.visibility = 'hidden';
}, 100);
  },false);
let bodyHover= document.querySelector('.hero-body')

  bodyHover.addEventListener("mouseover", function( event ){
    let hoverOp= document.querySelectorAll('.newItem');
    let hoverText = document.querySelectorAll('.tester');
    console.log(hoverText);
    //console.log(hoverOp);
    // highlight the mouseover target
    hoverOp[0].style.margin = "10px";
    hoverOp[1].style.margin = "10px";
    hoverOp[2].style.margin = "10px";
    hoverOp[3].style.margin = "10px";
    hoverText[0].style.visibility = 'hidden';
    hoverText[1].style.visibility = 'hidden';
    hoverText[2].style.visibility = 'hidden';
    hoverText[3].style.visibility = 'hidden';
    hoverText[4].style.visibility = 'hidden';
    hoverText[5].style.visibility = 'hidden';
    hoverText[6].style.visibility = 'hidden';
    hoverText[7].style.visibility = 'hidden';
    hoverText[8].style.visibility = 'hidden';
    hoverText[9].style.visibility = 'hidden';
    hoverText[10].style.visibility = 'hidden';
    hoverText[11].style.visibility = 'hidden';

    //hoverText.style.display='content';
  
    // reset the color after a short delay
   setTimeout(function() {
    //    hoverOp[0].style.margin = "10px";
    //hoverOp[1].style.margin = "10px";
    //hoverOp[2].style.margin = "10px";
    //hoverOp[3].style.margin = "10px";
    //hoverText[0].style.visibility = 'hidden';
    //hoverText[1].style.visibility = 'hidden';
    //hoverText[2].style.visibility = 'hidden';
    //hoverText[3].style.visibility = 'hidden';
    //hoverText[4].style.visibility = 'hidden';
    //hoverText[5].style.visibility = 'hidden';
    //hoverText[6].style.visibility = 'hidden';
    //hoverText[7].style.visibility = 'hidden';
   // //hoverText[8].style.visibility = 'hidden';
    //hoverText[9].style.visibility = 'hidden';
    //hoverText[10].style.visibility = 'hidden';
    //hoverText[11].style.visibility = 'hidden';
}, 100);
  },false);

function toggle() {
    let trailer = document.querySelector('.trailor');
    trailer.classList.toggle("active");
}
    


    
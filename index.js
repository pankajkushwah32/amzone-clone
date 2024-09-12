let imgs=document.querySelectorAll(".header-slider ul img");
let prevButton=document.querySelector(".slider-arrow-left")
let nextButton=document.querySelector(".slider-arrow-right")

let n=0;

function changeImage(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display="none";
    }
    imgs[n].style.display="block";
}
changeImage();

prevButton.addEventListener('click',(e)=>{
     if(n>0){
        n--;
     }else{
        n=imgs.length-1;
     }
     changeImage();
})

nextButton.addEventListener('click',(e)=>{
    if(n>=imgs.length-1){
        n=0;
    }else{
        n++;
    }
    changeImage();
})

// let slideImgs=document.querySelectorAll(".img-container img");
// let leftArrowButton=document.querySelector(".left-arrow");
// let rightArrowButton=document.querySelector(".right-arrow");

// let num=0;
//  function changeImageSlider(e){
//     for(let i=0;i<slideImgs.length;i++){
//         slideImgs[i].style.display="none";
//     }
//     slideImgs[i].style.display="block";

//  }
//  changeImage();

// //  leftArrowButton.addEventListener("click",(e)=>{
//     if(num>0){
//         num=num-3;
//     }
//     changeImageSlider();
//  })
//  rightArrowButton.addEventListener('click',(e)=>{
//     if(num<slideImgs.length){
//         num=num+3;
//     }
//     changeImageSlider();
//  })

// "use strict";

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
      renderBullet:function(index,className){
        return '<span class="' +className+ '">'+(index+1)+'</span>';
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    keyboard: {
      enabled: true,
      //
      onlyInViewport: true,
     //
      // pageUpDown: true,
      
    },
    // autoHeigt:true,
    // slidesPerView:2,
    autoplay:{
      delay:3000,
      // stopOnLastSlide:true,
      // disebleOnInteraction:false,
    }
    
  
   
   
  });

  let add_bag = document.getElementsByClassName("add_bag")
  let myFunction=function(){
    let image = this.parentNode.parentNode.querySelectorAll(".baloon")
  
    console.log(image[0]);
    let creat_li = document.createElement('li');
    creat_li.classList.add('cart_bag')
    creat_li.innerHTML=
                        ' <div class="cart_shop_item">\
                            <img class="baloon" src="'+image[0].src +'" alt="" srcset="">\
                             <div class="trash">\
                                <a href="#"><i class="far fa-trash-alt"></i></a>\
                             </div>\
                         </div>';   
                        
    let cart_bag  = document.querySelector('.cart_bag_1') 
    cart_bag.appendChild(creat_li);   
    alert("Товар успешно добавлен");

      
       let click_trash = document.querySelectorAll('.trash');
        for(i = 0; i<click_trash.length; i++){
        click_trash[i].addEventListener('click',del_func,false);
   
       }
         function del_func(evt){
          evt.preventDefault();
         this.parentNode.parentNode.remove();
         }
         
  }   
    
    // function delet_foto () {
    // let click_trash = document.querySelectorAll('.trash');
    //   for(i = 0; i<click_trash.length; i++){
    //   click_trash[i].addEventListener('click',del_func,false);
 
    //  }
    //    function del_func(){
    //    alert('dellet');
    //    }
    //  }   
 

  for(let i=0; i<add_bag.length; i++){
    add_bag[i].addEventListener('click',myFunction,false)
   
    
   }

   
  let choose = document.querySelectorAll('.choose')
 
   
    function choosing (){
      let choos_container = document.querySelector('.choos_container');
      choos_container.classList.toggle('active');
    console.log('choosing')

   
    
   }
   for(let i = 0; i<choose.length; i++){
   choose[i].addEventListener('click', choosing);
   }
//   function summa(a,b){
//     return a+b
//   }
//   console.log(summa(2,4))

//   function makx(a,s,d,f,g){
//     return Math.max(a,s,d,f,g)
//   }
//   console.log(makx(2,33,42,3,6,))

//   function palindrom(str){
//     str = str.toLowerCase()
//    return str.split('').reverse().join('')
//    console.log(str)
//   }
//   console.log(palindrom('Anna'))
//   console.log(palindrom('Nurbek derzskyi'))

//   function fizbuz(n){
//     if(n%3 ==0)return 'fizz'
//     if(n % 5 == 0)return 'buzz'
//     if(n % 3 == 0 && n % 5 ==0)return 'fizzbuzz'
//     return n
//   }
//   console.log(fizbuz(2533))

//   function slovo(a){

//   }
  

//  let names = ['Nurbek','Abdyrashit','Aslan','Nazi', 'Izi']
//  let shortname = names.filter((name)=>{
//   return name.length >5
//  })
//  console.log(shortname);

//  let nams= ['Abdyrashit','Nurbek','Aslan']
//  nams=nams.map((nam)=>nam.toLowerCase());
//  console.log(nams)

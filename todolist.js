   /*-------writing down my parameters--------------*/

   var mainboard=document.querySelector(".main-board");
   var container=document.querySelector(".container");
   var heading=document.querySelector(".heading");
   let inputdiv=document.querySelector(".input-div");
   let listitems=document.querySelector(".list-items");
   let item=document.querySelector(".item");
    let input_main = document.querySelector(".input_main")
      
    
    
 
 
  /* ---------------------------------------------------------
               using the submit buttonas a function
                to pass-in the parameters.........
      -------------------------------------------------------*/
 
      
      
      function add(){
         
 /* ---------------------------------
         writing down my parameters
    --------------------------------- */
 
   var mainboard=document.querySelector(".main-board");
   var container=document.querySelector(".container");
   var heading=document.querySelector(".heading");
   let inputdiv=document.querySelector(".input-div");
   let listitems=document.querySelector(".list-items");
   let item=document.querySelector(".item")
 
   /*-----------------------------------------------
                to create an element node
        ----------------------------------------------*/
 
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let wastediv=document.createElement("div")
  let wastebtn=document.createElement("button")
  
    /* ---------------------------------------------------------
               appending the items created to the parent node
      -------------------------------------------------------*/
 
      mainboard.appendChild(container);
      mainboard.appendChild(inputdiv);
      mainboard.appendChild(listitems);
      listitems.appendChild(ul);
     ul.appendChild(li);
     ul.appendChild(wastediv)
     wastediv.appendChild(wastebtn)
 
 
      /* ---------------------------------------------------------
               attaching set of attributes to the created items
      -------------------------------------------------------*/
      ul.setAttribute("class","item");
      mainboard.setAttribute("div","main-board");
      wastebtn.setAttribute("class","waste-bin") 
      wastediv.setAttribute("class","waste-div") 
 
      /*======================================
        passing input values to the parameters
       ======================================*/
 
          let input_main= document.querySelector(".input_main").value;
          li.innerHTML=input_main;
          wastebtn.innerHTML="🗑 ";
 
 
 
             /*---------remove function----------*/
 
         wastebtn.addEventListener("click",()=>{
           wastebtn.remove("class","waste-btn");
           wastediv.remove("class","waste-div");
           ul.remove("class","item");
           
           
           
         })
        
       
      }
 
     
     
 
 
 
 
 
 
 
 
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    var myDropdown = document.getElementById("myDropdown");
    var myLang =document.getElementById("lang");
    if (myDropdown.classList.contains('show')) {  
      myLang.innerHTML ='EN v';
          } else {
            myLang.innerHTML ='EN >';
          }
  }
  
  /* Close the dropdown if the user clicks outside of it */
  window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
  var myLang =document.getElementById("lang");
      if (myDropdown.classList.contains('show')) {  
  myDropdown.classList.remove('show');
  myLang.innerHTML ='EN >';
      }
    }
  }



  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunctions() {
    document.getElementById("myDropdowns").classList.toggle("show");
    var myDropdown = document.getElementById("myDropdowns");
    var myLang =document.getElementById("langs");
    if (myDropdown.classList.contains('show')) {  
      myLang.innerHTML ='EN v';
          } else {
            myLang.innerHTML ='EN >';
          }
  }
  
  /* Close the dropdown if the user clicks outside of it */
  window.onclick = function(e) {
  if (!e.target.matches('.dropbtns')) {
  var myDropdowns = document.getElementById("myDropdowns");
  var myLangs =document.getElementById("langs");
      if (myDropdowns.classList.contains('show')) {  
  myDropdowns.classList.remove('show');
  myLangs.innerHTML ='EN >';
      }
    }
  }


//   var addItems = document.getElementById('hamburger').addEventListener("click",addiTion);
// var countClick=1;
// function addiTion(e){
//     countClick+=1;
//     if (countClick%2==0){
//     var adItems= document.getElementById("hamburger");
//     adItems.className.replace('fa-bars','fa-x');}
//     else{
//         var adItems= document.getElementById("hamburger");    
//         adItems.className.replace('fa-x','fa-bars');
//     }
// }


  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
var countClick=1;
function toggleburger() {
  countClick+=1;
  if (countClick%2==0){
  document.getElementById("hamburger").classList.replace('fa-bars','fa-x');
  document.getElementById("hiddennav").classList.add("flex");
}
  else{
    document.getElementById("hamburger").classList.replace('fa-x','fa-bars');
    document.getElementById("hiddennav").classList.remove("flex");
  }
}


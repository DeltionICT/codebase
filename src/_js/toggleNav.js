/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
let smallnav = document.getElementById('smallnav');
let aside = document.getElementById('right');
// window.addEventListener('resize', function() {  
//   // if(topnav) {
//   //   topnav.style.display = 'none';
//   // }
// });

window.onresize = (event) => {
  if(window.innerWidth > 1280) {
    smallnav.style.display = 'none'
    aside.style.display = "block";
  } 
  
  if(window.innerWidth <= 1280) {
    aside.style.display = "none";
    smallnav.style.display = 'none'
  }
}

function toggleNav() {
    if (smallnav.style.display === "block") {
      smallnav.style.display = "none";
      aside.style.display = "none";
      
    } else if(window.innerWidth <= 1280) {
      smallnav.style.display = "block";
      aside.style.display = "block";
    }
  }
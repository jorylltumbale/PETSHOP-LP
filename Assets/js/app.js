/* Theme Name: Caxos - Responsive Landing page template
   Author: Coderthemes
   Version: 2.0.0
   Created: July 2020
   File Description:Main JS file of the template
*/



//sticky header on scroll
function windowScroll() {
   const navbar = document.getElementById("sticky");
   if (navbar) {
       if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
           navbar.classList.add("is-sticky");
       } else {
           navbar.classList.remove("is-sticky");
       }
   }
}

window.addEventListener("scroll", (ev) => {
   ev.preventDefault();
   windowScroll();
});
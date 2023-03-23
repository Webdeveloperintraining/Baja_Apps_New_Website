/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropContent() {
    document.getElementById("service_dropdown").classList.toggle("show");
    document.querySelector(".drop-trigger").classList.toggle("show");
}

const arrow= document.querySelector(".drop-trigger");
arrow.onclick=dropContent;

// Close the dropdown menu if the user clicks outside of it
window.onclick= function(event) {
    if (!event.target.matches ('.drop-trigger')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var arrows = document.querySelector(".drop-trigger")
       var i;
       for (i = 0; i <dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')){
            openDropdown.classList.remove('show');
            arrows.classList.remove('show')
        }
       } 
    }
    if (!event.target.matches ('.drop-trigger2')) {
                var dropdowns2 = document.getElementsByClassName("dropdown-content2");
                var arrow = document.querySelector(".drop-trigger2")
               var i;
               for (i = 0; i < dropdowns2.length; i++) {
                var openDropdown = dropdowns2[i];
                if (openDropdown.classList.contains('show')){
                    openDropdown.classList.remove('show');
                    arrow.classList.remove('show')
                }
            } 
        }
    }

function dropContent2(){
    document.getElementById("support_dropdown").classList.toggle("show");
    document.querySelector(".drop-trigger2").classList.toggle("show");
}

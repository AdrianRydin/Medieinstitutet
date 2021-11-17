
// const userName = prompt("Hej! Välkommen till mitt interaktiva spel, vänligen ange ditt namn");

// console.log(userName);

function helpButtonClick(){


    document.getElementById("dropdown").classList.toggle("show");

    
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdownBtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



 function nextScene(){
    

    console.log("YO")

    
     
 }
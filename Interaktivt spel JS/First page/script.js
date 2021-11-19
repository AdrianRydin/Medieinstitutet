
window.onload = main();

function main(){
  document.getElementById('html');
  document.getElementsByClassName('main');

}

/**Ger användaren ett username */

// const userName = prompt("Hej! Välkommen till mitt interaktiva spel, vänligen ange ditt namn");

// console.log(userName);


const pages = {
  "firstDownStairs": document.getElementById('firstDownStairs')

}
const items = {

  "weapon": document.getElementById("baseballBat"),
  "stairsImage": document.getElementById("staircase"),
  "firstDownStairsButton": document.getElementById("firstButton"),
  "weaponButton": document.getElementById('secondButton'),
  "storyText1": document.getElementById('storyText'),
  "storyText2": document.getElementById('storyText2'),
  "hungryImage": document.getElementById('hungryImage')
  
}

/**Dropdown meny uppe till höger */
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

/** 
 * Början av spelet, byter scen när man trycker på knappen med trapporna. 
*/

 function downStairs(){
  items.weapon.style.display = "none"
  items.weaponButton.style.display = "none"
  items.stairsImage.style.display = "none"
  items.firstDownStairsButton.style.display = "none"
  items.storyText1.style.display = "none"
  document.getElementById('subTitle').style.display = "none"
  pages.firstDownStairs.style.display = "flex"
 }

 function springButton(){alert('Du dog!')}

 function weapon(){

  items.weapon.style.display = "none"
  items.weaponButton.style.display = "none"
  items.stairsImage.style.display = "none"
  items.firstDownStairsButton.style.display = "none"
  items.storyText1.style.display = "none"
  document.getElementById('subTitle').style.display = "none"
 }
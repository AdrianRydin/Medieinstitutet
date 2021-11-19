
window.onload = main();

function main(){
  document.getElementById('html');
  document.getElementsByClassName('main');

}

/**
 * Ger användaren ett username, ifall de inte skriver in användarnamn kommer en påminnelse upp
*/

var userName = prompt("Hej! Välkommen till mitt interaktiva spel, vänligen ange ditt namn");
if(userName === null){
  var userName = prompt('Du måste skriva in ett användarnamn')
}

console.log(userName);


const pages = {
  "firstDownStairs": document.getElementById('firstDownStairs'),
  "weaponScene": document.getElementById('weaponScene'),
  "weaponDownstairs": document.getElementById('weaponDownstairs')



}
const items = {

  "weapon": document.getElementById("baseballBat"),
  "stairsImage": document.getElementById("staircase"),
  "firstDownStairsButton": document.getElementById("firstButton"),
  "weaponButton": document.getElementById('secondButton'),
  "storyText1": document.getElementById('storyText'),
  "storyText2": document.getElementById('storyText2'),
  "hungryImage": document.getElementById('hungryImage'),
  "baseballbat": document.getElementById('weaponImage'),
  "staircase2": document.getElementById('staircase2')
  
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
  items.baseballbat.style.display = "none"
  items.staircase2.style.display = "none"
  pages.firstDownStairs.style.display = "flex"

 }

 function springButton(){
   alert('Han hann ikapp dig! du dog! Prova igen ' + userName + "!")

   setTimeout(downStairs(), 3000);
  }

 function weapon(){

  items.weapon.style.display = "none"
  items.weaponButton.style.display = "none"
  items.stairsImage.style.display = "none"
  items.firstDownStairsButton.style.display = "none"
  items.storyText1.style.display = "none"
  document.getElementById('subTitle').style.display = "none"

  pages.weaponScene.style.display = "flex"

 }


 function DownstairsWithWeapon(){
   pages.weaponScene.style.display = "none"
   pages.weaponDownstairs.style.display = "flex"
 }


 function punchMonster(){
   alert('Grattis du vann ' + userName + "!");
 }

 
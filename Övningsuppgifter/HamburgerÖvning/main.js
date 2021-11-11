function menuToggle(){
    var show = document.getElementById("nav-item");

    if (show.style.display === "block"){
        show.style.display = "none";
    }
    else{
        show.style.display = "block";
    }
}
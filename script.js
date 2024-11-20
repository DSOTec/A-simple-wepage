const input = document.getElementById("search-bar");
const icon = document.getElementById("search-icon");
const cancel = document.getElementById("cancel-icon")
icon.addEventListener("click", myfunction);
cancel.addEventListener("click", cancelBtn)

function myfunction(){
    input.style.display = "block"; 
    cancel.style.display = "block";
    
    }
function cancelBtn(){
    input.style.display = "none";
    cancel.style.display = "none";
}

/*const input = document.querySelector(".input-header");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const cancel = document.querySelector(".fa-xmark");

searchIcon.addEventListener("click", myfunction);
cancel.addEventListener("click", functions);

function myfunction() {
    input.style.display = "block";
}

function functions() {
    if (input.style.display === "block") {
        input.style.display = "none";
    } else {
        input.style.display = "block"; 
    }
}*/
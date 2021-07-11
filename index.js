function shownavbar() {
    
    if(document.getElementById("btn_navlinks").style.display=="block") {
        document.getElementById("btn_navlinks").style.display="none";
        document.getElementById("btn").className="fa fa-bars";
    } else {
        document.getElementById("btn_navlinks").style.display="block";
        document.getElementById("btn").className="fa fa-close";
    }
}

window.addEventListener("scroll", function() {
    var scroll = this.document.getElementById('navbar_container');
    scroll.classList.toggle("active", window.scrollY > 450)
})
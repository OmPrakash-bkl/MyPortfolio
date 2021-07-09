function shownavbar() {
    
    if(document.getElementById("btn_navlinks").style.display=="block") {
        document.getElementById("btn_navlinks").style.display="none";
        document.getElementById("btn").className="fa fa-bars";
    } else {
        document.getElementById("btn_navlinks").style.display="block";
        document.getElementById("btn").className="fa fa-close";
    }
}
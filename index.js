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

function displayimg(value) {
switch(value) {
    case 1:
        document.getElementById("forcol1").style.backgroundColor="rgb(0, 128, 0)";
        document.getElementById("forcol1").style.boxShadow="0px 0px 40px rgb(194, 194, 194)";
        document.getElementById("forcol2").style.color="white";
        document.getElementById("forcol3").style.boxShadow="none";
        document.getElementById("forcol5").style.boxShadow="none";
        document.getElementById("forcol3").style.backgroundColor="rgb(238, 238, 238)";
        document.getElementById("forcol4").style.color="gray";
        document.getElementById("forcol5").style.backgroundColor="rgb(238, 238, 238)";
        document.getElementById("forcol6").style.color="gray";
        document.getElementById("gallery_image_container1").style.display="block";
        document.getElementById("gallery_image_container2").style.display="none";
        document.getElementById("gallery_image_container3").style.display="none";
        break;
        case 2:
            document.getElementById("forcol1").style.backgroundColor="rgb(238, 238, 238)";
            document.getElementById("forcol3").style.boxShadow="0px 0px 40px rgb(194, 194, 194)";
            document.getElementById("forcol1").style.boxShadow="none";
            document.getElementById("forcol5").style.boxShadow="none";
        document.getElementById("forcol2").style.color="gray";
        document.getElementById("forcol5").style.backgroundColor="rgb(238, 238, 238)";
        document.getElementById("forcol6").style.color="gray";
            document.getElementById("forcol3").style.backgroundColor="rgb(0, 128, 0)";
            document.getElementById("forcol4").style.color="white";
            document.getElementById("gallery_image_container1").style.display="none";
            document.getElementById("gallery_image_container2").style.display="block";
            document.getElementById("gallery_image_container3").style.display="none";
            break;
            case 3:
                document.getElementById("forcol1").style.backgroundColor="rgb(238, 238, 238)";
                document.getElementById("forcol1").style.boxShadow="none";
                document.getElementById("forcol3").style.boxShadow="none";
                document.getElementById("forcol5").style.boxShadow="0px 0px 40px rgb(194, 194, 194)";
        document.getElementById("forcol2").style.color="gray";
        document.getElementById("forcol3").style.backgroundColor="rgb(238, 238, 238)";
        document.getElementById("forcol4").style.color="gray";
                document.getElementById("forcol5").style.backgroundColor="rgb(0, 128, 0)";
                document.getElementById("forcol6").style.color="white";
                document.getElementById("gallery_image_container1").style.display="none";
                document.getElementById("gallery_image_container2").style.display="none";
                document.getElementById("gallery_image_container3").style.display="block";
                break;
}
}
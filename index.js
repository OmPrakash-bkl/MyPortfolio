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
showdetails(1, 1);
function showdetails(i, j) {
    var y=i+1;
    var z=j+1;
    if(y===4) {
        y=1;
       
    }
    if(z===4) {
        z=1;
    }
    var x="ref_div"+y;
    var r="ref_two"+z;
    switch(x) {
        case "ref_div1":
            document.getElementById(x).style.display="block";
            document.getElementById("ref_div2").style.display="none";
            document.getElementById("ref_div3").style.display="none";
            break;
            case "ref_div2": 
            document.getElementById("ref_div1").style.display="none";
            document.getElementById(x).style.display="block";
            document.getElementById("ref_div3").style.display="none";
           
            break;
            case "ref_div3": 
            document.getElementById("ref_div1").style.display="none";
            document.getElementById("ref_div2").style.display="none";
            document.getElementById(x).style.display="block";
            break;
    } 
    switch(r){
        case "ref_tow1": 
            document.getElementById(r).style.display="block";
            document.getElementById("ref_two2").style.display="none";
            document.getElementById("ref_two3").style.display="none";
            break;
            case "ref_tow2": 
            document.getElementById(r).style.display="block";
            document.getElementById("ref_two1").style.display="none";
            document.getElementById("ref_two3").style.display="none";
            break;
            case "ref_tow2": 
            document.getElementById(r).style.display="block";
            document.getElementById("ref_two1").style.display="none";
            document.getElementById("ref_two2").style.display="none";
            break;
    }
  
}
var i=0;
setInterval(function() {
i++;
if(i==4) {
    i=1;
}
showdetails(i);
}, 3000);
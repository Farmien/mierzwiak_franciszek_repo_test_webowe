
function changePage(operator){
    switch(operator){
        case "main":
            document.getElementById("content").innerHTML = "<iframe src='content/mainPage.html' frameborder='0' id='frame'></iframe>";
            break;
        case "const":
            document.getElementById("content").innerHTML = "<iframe src='content/constructors.html' frameborder='0' id='frame'></iframe>";
            break;
        case "herm":
            document.getElementById("content").innerHTML = "<iframe src='content/hermetization.html' frameborder='0' id='frame'></iframe>";
            break;
        case "meth":
            document.getElementById("content").innerHTML = "<iframe src='content/methods.html' frameborder='0' id='frame'></iframe>";
            break;
        default:
            break;
    }
    
}
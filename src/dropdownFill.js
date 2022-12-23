//require("./createNewProject");
import newProjSubmit from "./createNewProject";
import pageLoad from "./pageLoad";


var select = document.getElementById("dropdownMenu");
//let itemArray = ["a", "b", "c"];


//function dropdownClear() {
//    for (i=0; i < select.length; i++) {
//        select.options[i].remove;
//    }
//}


function dropdownFill() {    
    console.log(listOfProjects);

    while (select.firstChild) {
        select.removeChild(select.lastChild);
    }

    for (var i = 0; i < listOfProjects.length; i++) {
        //console.log("it's running")
        var opt = listOfProjects[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
        if (opt.value == "Choose a project...") {
            opt.disabled = true;
        }
    }
    //pageLoad()
}

export default dropdownFill ;



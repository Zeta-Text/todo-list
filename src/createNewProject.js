import displayAll from "./displayAll";
import dropdownFill from "./dropdownFill";
import dropdownClear from "./dropdownFill"
import pageLoad from "./pageLoad";

var newProj = document.getElementById('newProject');

let newProjSubmit = newProj.onsubmit = function(e) {
    e.preventDefault();
    let newProjectName = document.getElementById("newProjectName").value
    listOfProjects.push(newProjectName);
    //console.log(listOfProjects);
    dropdownFill();
    pageLoad();
}

export default newProjSubmit ;
 


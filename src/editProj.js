import  { pageLoad }  from "./pageLoad"
import  { loadDefault } from "./pageLoad"

var editProj = function() {
    //i could prob use bind here instead of this.slice
    let newText = prompt("Change this project's name?");
    let oldText = this.parentNode.innerText.slice(0, -5);
    console.log(newText)
    
    let index = listOfProjects.indexOf(oldText);

    if (index !== -1) {
        listOfProjects[index] = newText; 
    }
    console.log(listOfProjects)

    //this needs to be tested fr fr 
    defaultProject.forEach((element) => {
        if(element.project == oldText) {
            element.project = newText;
        }
    });



    pageLoad()

};




    

export default editProj;
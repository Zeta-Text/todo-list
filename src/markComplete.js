import {pageLoad, loadDefault} from "./pageLoad"

function markComp() {
    if(confirm("Are you sure you want to mark this project as complete?")) {
        this.completionStatus = "Complete";   
        console.log(this.completionStatus)
        console.log()
        loadDefault();

    } else {
        console.log("canceled");
    }
    
    
}

export default markComp;
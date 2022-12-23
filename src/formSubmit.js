import displayAll from './displayAll';
import Todo from './todoCreate';
import { pageLoad, loadDefault } from './pageLoad';


var form = document.getElementById('form');
let formSubmit = form.onsubmit = function(e) {
    e.preventDefault();
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let dueDate = document.getElementById("dueDate").value
    let priority = document.getElementById("priority").value
    let ddmenu = document.getElementById("dropdownMenu")
    let project = ddmenu.options[ddmenu.selectedIndex].value;
    let completionStatus = "Incomplete";
  //  let project = ddmenu.options[ddmenu.selectedIndex].text;
    console.log(project);
  //  console.log(project);
    let newTask = new Todo(title, description, dueDate, priority, project, completionStatus);
    defaultProject.push(newTask);
    console.log(defaultProject);
    
    loadDefault();
}

export default formSubmit;


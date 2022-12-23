import {pageLoad, loadDefault} from "./pageLoad"

//pop up div
//form
function editTodoFn() {
    console.log(this)

    var content = document.getElementById("content")

    var popup = document.createElement('div');
    popup.id = "popup";
    content.appendChild(popup);

    let url = window.location.href;
    
    var br = document.createElement("br");

    var form1 = document.createElement("form");
    form1.setAttribute("method", "post");
    form1.setAttribute("action", url);
    form1.id = "form1";
    
    var title1 = document.createElement("input");
    title1.setAttribute("type", "text");
    title1.setAttribute("name", "title1");
    title1.setAttribute("placeholder", this.title);
    title1.id = "title1"

    var description1 = document.createElement("input");
    description1.setAttribute("type", "text");
    description1.setAttribute("name", "description");
    description1.setAttribute("placeholder", this.description);
    description1.id = "description1"

    var dueDate1 = document.createElement("input");
    dueDate1.setAttribute("type", "text");
    dueDate1.setAttribute("name", "dueDate");
    dueDate1.setAttribute("placeholder", this.dueDate);
    dueDate1.id = "dueDate1"

    var select = document.createElement("select")
    var option = new Option("text", "value", false, false);
    select.appendChild(option);
    select.id = "select"
    
    option = document.createElement('option');
    option.value = 'theValue';
    option.text = 'the text';
    select.appendChild(option);


    var submit1 = document.createElement("input");
    submit1.setAttribute("type", "submit");
    submit1.setAttribute("value", "Submit");
    submit1.id = "submit1"

    form1.appendChild(title1);
    form1.appendChild(br.cloneNode());

    form1.appendChild(description1)
    form1.appendChild(br.cloneNode());

    form1.appendChild(dueDate1)
    form1.appendChild(br.cloneNode());

    form1.appendChild(select)
    form1.appendChild(br.cloneNode());

    form1.appendChild(submit1);

    popup.appendChild(form1);

    let el = this;

    form1.addEventListener("submit", updateTodo.bind(el));


}

function updateTodo(e) {
    e.preventDefault();
    console.log("you clicked submit")
    this.title = document.getElementById("title1").value
    this.description = document.getElementById("description1").value
    this.dueDate = document.getElementById("dueDate1").value
    this.priority = document.getElementById("select").value
    console.log(this)

    pageLoad();
    loadDefault();
}


export default editTodoFn;


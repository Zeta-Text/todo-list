import { create, template } from "lodash";
import { Todo } from "./todoCreate"
import { displayAll } from "./displayAll";
import  editProj from "./editProj"
import markComp from "./markComplete"
import editTodoFn from "./editTodo";

function pageLoad() {
    const content = document.getElementById('content');
    content.id = "content";
    content.innerHTML = "";

    const head = document.createElement("div");
    head.id = "head";
    head.innerText = "My Projects";
    content.appendChild(head);

    
    const projlistdiv = document.createElement("div");
    projlistdiv.id = "rightsidebar"
    content.appendChild(projlistdiv);
    projlistdiv.innerHTML = "";


    const cardCont = document.createElement("div");
    cardCont.id = "cardCont";
    content.appendChild(cardCont);
    
//    for (let i=0; i < listOfProjects.length; i++) {
        
//        console.log(text);
    listOfProjects.forEach((element) => {       
        let text = element.toString();
        let listelement = document.createElement("div");
        listelement.id = "listelement";
        listelement.innerText = text;       
        listelement.style.cursor = "pointer";
        //document.getElementById("listelement")
        listelement.addEventListener("click", loadProj);
        projlistdiv.appendChild(listelement);
        
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "x";
        deleteBtn.id = "deleteBtn";
        listelement.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", deleteProj);

        let editBtn = document.createElement("button");
        editBtn.innerText = "edit";
        editBtn.id ="editBtn";
        listelement.appendChild(editBtn);


        editBtn.addEventListener("click", editProj);



    });
//    }

  
}


function loadDefault() {
    const cardCont = document.getElementById("cardCont");
    cardCont.innerHTML = "";

    defaultProject.forEach((element) => {
        //const cardCont = document.getElementById("cardCont")
        let card = document.createElement("div");
        cardCont.appendChild(card);
        card.id = "card";
        //card.innerText = JSON.stringify(element, null, 4);
        let cardHead = document.createElement("div")
        cardHead.id = "cardHead"
        cardHead.innerText = element.title;
        card.appendChild(cardHead);

        let cardSubHead = document.createElement("div");
        cardSubHead.id = "cardSubHead";
        card.appendChild(cardSubHead);

        let cardProj = document.createElement("div");
        cardProj.id = "cardProj";
        cardProj.innerText = element.project;
        cardSubHead.appendChild(cardProj);

        let cardPriority = document.createElement("div");
        cardPriority.id = "cardPriority";
        cardPriority.innerText = element.priority;
        cardSubHead.appendChild(cardPriority);


        let cardDescCont = document.createElement("div");
        card.appendChild(cardDescCont);

        let cardDesc = document.createElement("div");
        cardDesc.id = "cardDesc";
        cardDesc.innerText = "Notes:"
        cardDescCont.appendChild(cardDesc);

        let cardDescInfo = document.createElement("div");
        cardDescInfo.id = "cardDescInfo";
        cardDescInfo.innerText = element.description;
        cardDescCont.appendChild(cardDescInfo);

        let cardDueDateCont = document.createElement("div");
        card.appendChild(cardDueDateCont);

        let cardDueDate = document.createElement("div");
        cardDueDate.id = "cardDueDate";
        cardDueDate.innerText = "Due Date:";
        cardDueDateCont.appendChild(cardDueDate);

        let cardDueDateInfo = document.createElement("div");
        cardDueDateInfo.id = "cardDueDateInfo";
        cardDueDateInfo.innerText = element.dueDate;
        cardDueDateCont.appendChild(cardDueDateInfo);

        let buttonCont = document.createElement("div");
        buttonCont.id = "buttonCont";
        card.appendChild(buttonCont);


        if (element.completionStatus == "Incomplete") {
            let markComplete = document.createElement("button");
            markComplete.id = "markComplete";
            markComplete.innerText = "Mark complete?"
            markComplete.addEventListener("click", markComp.bind(element));
            buttonCont.appendChild(markComplete);

        }

       

        let editTodo = document.createElement("button");
            editTodo.id = "editTodo";
            editTodo.innerText = "edit";
            editTodo.addEventListener("click", editTodoFn.bind(element));
            buttonCont.appendChild(editTodo)
        

        

});
}

var loadProj = function() {
    //console.log("test");
    //console.log(this.innerText);
    const cardCont = document.getElementById("cardCont");
    cardCont.innerHTML = "";

    defaultProject.forEach((element) => {
        
        if(element.project == this.innerText.slice(0, -5)) {
            let card = document.createElement("div");
            card.id = "card";
            cardCont.appendChild(card);
            //card.innerText = JSON.stringify(element, null, 4);

            let cardHead = document.createElement("div")
            cardHead.id = "cardHead"
            cardHead.innerText = element.title;
            card.appendChild(cardHead);

            let cardSubHead = document.createElement("div");
            cardSubHead.id = "cardSubHead";
            card.appendChild(cardSubHead);

            let cardProj = document.createElement("div");
            cardProj.id = "cardProj";
            cardProj.innerText = element.project;
            cardSubHead.appendChild(cardProj);

            let cardPriority = document.createElement("div");
            cardPriority.id = "cardPriority";
            cardPriority.innerText = element.priority;
            cardSubHead.appendChild(cardPriority);


            let cardDescCont = document.createElement("div");
            card.appendChild(cardDescCont);

            let cardDesc = document.createElement("div");
            cardDesc.id = "cardDesc";
            cardDesc.innerText = "Notes:"
            cardDescCont.appendChild(cardDesc);

            let cardDescInfo = document.createElement("div");
            cardDescInfo.id = "cardDescInfo";
            cardDescInfo.innerText = element.description;
            cardDescCont.appendChild(cardDescInfo);

            let cardDueDateCont = document.createElement("div");
            card.appendChild(cardDueDateCont);

            let cardDueDate = document.createElement("div");
            cardDueDate.id = "cardDueDate";
            cardDueDate.innerText = "Due Date:";
            cardDueDateCont.appendChild(cardDueDate);

            let cardDueDateInfo = document.createElement("div");
            cardDueDateInfo.id = "cardDueDateInfo";
            cardDueDateInfo.innerText = element.dueDate;
            cardDueDateCont.appendChild(cardDueDateInfo);

            let buttonCont = document.createElement("div");
            buttonCont.id = "buttonCont";
            card.appendChild(buttonCont);

            if (element.completionStatus == "Incomplete") {
                let markComplete = document.createElement("button");
                markComplete.id = "markComplete";
                markComplete.innerText = "Mark complete?"
                markComplete.addEventListener("click", markComp.bind(element));
                buttonCont.appendChild(markComplete);
    
            }

            let editTodo = document.createElement("button");
            editTodo.id = "editTodo";
            editTodo.innerText = "edit";
            editTodo.addEventListener("click", editTodoFn.bind(element));
            buttonCont.appendChild(editTodo);

            
        }

    });


};

var deleteProj = function() {
    console.log("u pressed delete");
    console.log(this.parentNode.innerText.slice(0, -5));
    let name = this.parentNode.innerText.slice(0, -5);
    this.parentNode.remove();

    let index = listOfProjects.indexOf(name);
    
    if (index !== -1) {
            listOfProjects.splice(index, 1);
    }

    


};




export {pageLoad, loadDefault}
import pageLoad from "./pageLoad";


export function displayAll() {
    console.log("display all works");
    const content = document.getElementById("content");
    let cardCont = document.createElement("div");
    content.appendChild(cardCont);
    cardCont.innerHTML = "";

    defaultProject.forEach((element) => {
            let card = document.createElement("div");
            cardCont.appendChild(card);
            card.id = "card";
            card.innerText = JSON.stringify(element, null, 4);

            
    });
}

export default displayAll;
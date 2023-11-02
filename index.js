// API: https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/
const parties = [];



function removeElement(element){
element.remove();
}

const getParties = async() =>{
    try {
        const response = await fetch ('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events');
        const json = await response.json();
        const data = json.data;
        data.forEach((party)=>{
            parties.push(party);
        })
        renderParties();
        
    } catch (err){
        console.error(err.message);
    }
}
//need the name, description, location, and date
const renderParties = () =>{
    const names = parties.map((party)=>{
    const div = document.createElement("div");
     div.className = "partyblock";
     div.id = party.id;
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");
    const desc = document.createElement("li");
    const loc = document.createElement("li");
    const date = document.createElement("li");
    const button = document.createElement("button");
    button.className ="deletebutton";
    button.innerHTML ="delete";
    button.addEventListener("click", (e) =>{e.preventDefault(); removeElement(button.closest(".partyblock"))});
    h2.innerHTML = capitalizefirstletter(party.name);
    desc.innerHTML = "Description: " + party.description;
    loc.innerHTML = "Location: " + party.location;
    date.innerHTML = "Date: " + party.date;
    ul.appendChild(loc);
    ul.appendChild(date);
    ul.appendChild(desc);
    div.appendChild(h2);
    div.appendChild(ul);
    div.appendChild(button);
    document.getElementById("container").appendChild(div);
    return div;
    });
document.getElementById("container").replaceChildren(...names);
}
function capitalizefirstletter(string){
let arr = string.split(" ");
let newarr = arr.map((word)=>{
    word = word.charAt(0).toUpperCase()+word.slice(1);
    return word;
})
string = newarr.join(" ");
return string;
}

function createParty(){
    const name = document.getElementById("partyName").value;
    console.log(name);
    const location = document.getElementById("partyLocation").value;
    const date = document.getElementById("partyDate").value;
   const description = document.getElementById("partyDescription").value;
   const party = {name,location,date,description};
     parties.push(party);
   renderParties();
 }
 const submitButton = document.getElementById("submitButton");
 submitButton.addEventListener("click",(e)=>{e.preventDefault(); createParty()});
getParties();

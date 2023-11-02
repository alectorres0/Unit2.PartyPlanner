const submitButton = document.getElementById("submitButton");
submitButton.addEventListener((e)=>{e.preventDefault();createParty});


function createParty(){
    const name = document.getElementById("partyName").value;
    const loc = document.getElementById("partyLocation").value;
    const date = document.getElementById("partyDate").value;
    const desc = document.getElementById("partyDescription").value;
    const party = {name,loc,date,desc};
    parties.push(party);
    renderParties();
}
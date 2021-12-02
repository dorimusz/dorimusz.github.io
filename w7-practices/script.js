const inputElement = (type, name, label) => {
    if (type === "checkbox") {
        return `
        <div class="checkbox">
            <label for="${name}">${label}</label>
            <input type="${type}" name="${name}" id="${name}">
        <div>
   `

    } else {
        return `
        <div>
            <label for="${name}">${label}</label>
            <input type="${type}" name="${name}" id="${name}">
        <div>
   `
    }

 }
 
 const selectElement = (type, name, label, selectOptions) => {
    let optionElements = "";
     
    for (const option of selectOptions) {
         optionElements += `
             <option>${option}</option>
         `;
    }
 
     return `
         <div>
             <label>${label}</label>
             <${type} name="${name}">
                 ${optionElements}
             </${type}>
         </div>
    `
 }
     
 const formElement = `
     <div id="container"> 
         <form id="form">
             ${inputElement("text", "firstName", "Keresztneved")}
             ${inputElement("file", "profilePicture", "Profilképed")}
             ${inputElement("email", "personalEmail", "Email címed")}
             ${inputElement("checkbox", "newsletter", "Szeretnél-e hírlevelet kapni")}
             ${inputElement("checkbox", "terms", "Elfogadod a felhasználási feltételeket?")}
             ${selectElement("select", "where", "Hol hallottál rólunk?", ["internetről", "ismerőstől", "egyéb"])}
             <button>Ok</button>
         </form>
     </div>
 `;
 
 const formSubmit = (event) => {
     event.preventDefault();
     console.log(event);
     const et = event.target;
     et.classList.add("submitted");
 
     const etValue = et.querySelector(`select[name="where"]`).value;
     console.log(etValue);
 }
 
 const inputEvent = (event) => {
     console.log(event.target.name);
     const fName = document.querySelector(`input[name="firstName"]`);
 
     let tryForm = event.target.closest('#form');
     console.log(tryForm);
     if (event.target.getAttribute("name") === "firstName") {
         document.getElementById("inputValueContent").innerHTML = event.target.value;
     }
 }
 
 const formTitle = `
     <div class="titleContainer">
         <h1>Iratkozz fel hírlevelünkre</h1>
     </div>
 `;
 
 function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formTitle);
    root.insertAdjacentHTML("beforeend", formElement);
    root.insertAdjacentHTML("beforeend", `
     <div id="inputValueContent"></div> 
    `);

    const form = document.getElementById("form"); 
    form.addEventListener("submit", formSubmit); 
 
     const inputList = form.querySelectorAll("input");
     for (const input of inputList) {
         input.addEventListener("input", inputEvent)
     }
 
 }
 
 window.addEventListener("load", loadEvent);
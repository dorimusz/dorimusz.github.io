const generateArray = function(amount) {
    let returnArray = [];

    amount = parseInt(amount);

    //Kútba fulladt terv a számok kiírására:
    let lengthCount = amount.toString().length;
    console.log(lengthCount);

    if (!Number.isNaN(amount)) { //akkor menjen be az if ágba, ha nem NaN
        //console.log("Az amount egy szám.");

        for (let i = 0; i < amount; i++) {

            //Ez csak abban az esetben működik, hogyha a max. megadott amount négy számjegyből áll
            if (i < 10) {
                returnArray.push(`000${i}`);
            } else if (i < 100) {
                returnArray.push(`00${i}`);
            } else if (i< 1000) {
                returnArray.push(`0${i}`);
            } else {
                returnArray.push(`${i}`);
            }
        }

    } else {
        //console.log("Ez nem szám.");
        returnArray.push("error");
    }

    return returnArray;
}


const loadEvent = function () {
    console.log("Az oldal betöltődött.");

    const root = document.getElementById("root");
    const list = generateArray(2000);
    
    if (list[0] !== "error") {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend", `<div>${item}</div>`);
        }
    }

}

window.addEventListener("load", loadEvent)
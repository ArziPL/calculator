const resultBlock = document.querySelector(".calc__result");
const result = document.querySelector(".calc__operations");


// COPY RESULT TO CLIPBOARD

resultBlock.addEventListener("click", copyToClipboard);

function copyToClipboard() {
    navigator.clipboard.writeText(result);
}

// CALCULATOR FUNCTION

let temporaryValue = "";

function calculations(val) {

    if(/[123456789,]/g.test(val)) {
        if(temporaryValue.includes(",") && val == ","){
            return
        }
        temporaryValue += val;
        result.textContent = temporaryValue;
    }


    if(val == "C") {
        result.textContent = result.textContent.slice(0,-1);
        temporaryValue = temporaryValue.slice(0,-1);
        if(result.textContent == "") {
            result.textContent = "0";
        }
    }

    if(val == "CE") {
        result.textContent = "0";
        temporaryValue = "";
        return
    }
}

// if(/[+-*/^&]/)
// }

calculations("2");
calculations("5");
calculations(",");
calculations("5");
calculations(",");
calculations(",");
calculations("5");
calculations("CE");
calculations("2");
calculations("5");
calculations("5");
calculations("C");
calculations("5");
calculations("2");




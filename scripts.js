const resultBlock = document.querySelector(".calc__result");
const result = document.querySelector(".calc__operations");
let inputBtnList = document.querySelectorAll(".calc__card");
for(ele of inputBtnList) {
    ele.addEventListener("click", () => {
        calculations(ele.value);
    });
}





function addListnerHandler() {
   
}






// COPY RESULT TO CLIPBOARD

resultBlock.addEventListener("click", copyToClipboard);

function copyToClipboard() {
    navigator.clipboard.writeText(result.textContent);
}















// CALCULATOR FUNCTION


let temporaryValueFirst = "";
let temporaryValueSec = "";
let temporarySymbol = "";

function calculations(val) {

    if(/[123456789,]/g.test(val)) {
        if(temporarySymbol != "") {
            if(temporaryValueSec.includes(",") && val == ","){
                return
            }
            temporaryValueSec += val;
            result.textContent = temporaryValueSec;
            return
        }
        if(temporaryValueFirst.includes(",") && val == ","){
            return
        }
        temporaryValueFirst += val;
        result.textContent = temporaryValueFirst;
    }


    if(val == "C") {
        if(temporarySymbol != "") {
            result.textContent = result.textContent.slice(0,-1);
            temporaryValueSec = temporaryValueSec.slice(0,-1);
            if(result.textContent == "") {
               result.textContent = "0";
               temporaryValueFirst = "";
               temporaryValueSec = "";
               temporarySymbol = "";
        }
        return
        }
        result.textContent = result.textContent.slice(0,-1);
        temporaryValue = temporaryValue.slice(0,-1);
        if(result.textContent == "") {
            result.textContent = "0";

        }
        return
    }

    if(val == "CE") {
        result.textContent = "0";
        temporaryValueFirst = "";
        temporarySymbol = "";
        temporaryValueSec = ""
    }

    if(/[\^&/*+-]/g.test(val)) {
        temporarySymbol = val;
    }

    if(temporaryValueFirst != "" && temporarySymbol != "" && temporaryValueSec != "" && val == "=") {
        switch(temporarySymbol) {
            case "+":
                temporaryValueFirst = result.textContent = parseFloat(temporaryValueFirst) + parseFloat(temporaryValueSec);
                temporarySymbol = "";
                temporaryValueSec = ""
                break;
            case "-":
                temporaryValueFirst = result.textContent = parseFloat(temporaryValueFirst) - parseFloat(temporaryValueSec);
                temporarySymbol = "";
                temporaryValueSec = ""
                break;
            case "*":
                temporaryValueFirst = result.textContent = parseFloat(temporaryValueFirst) * parseFloat(temporaryValueSec);
                temporarySymbol = "";
                temporaryValueSec = ""
                break;
            case "/":
                temporaryValueFirst = result.textContent = parseFloat(temporaryValueFirst) / parseFloat(temporaryValueSec);
                temporarySymbol = "";
                temporaryValueSec = ""
                break;
            case "^":
                temporaryValueFirst = result.textContent = Math.pow(parseFloat(temporaryValueFirst),parseFloat(temporaryValueSec));
                temporarySymbol = "";
                temporaryValueSec = ""
                break;

        }
    }

    if(val == "&") {
        temporaryValueFirst = result.textContent = Math.sqrt(parseFloat(temporaryValueFirst));
        temporarySymbol = "";
        temporaryValueSec = "";
    }

}


sqrt\(\)|[\^$/*+-]











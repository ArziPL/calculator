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
    if(/[123456789]/g.test(val)) {
        temporaryValue += val;
        result.textContent = temporaryValue;
    }
}

calculations("2");
calculations("5")

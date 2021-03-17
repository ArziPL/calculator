const resultBlock = document.querySelector(".calc__result");
const result = document.querySelector(".calc__operations").textContent;


// COPY RESULT TO CLIPBOARD

resultBlock.addEventListener("click", copyToClipboard);

function copyToClipboard() {
    navigator.clipboard.writeText(result);
}


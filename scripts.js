const resultBlock = document.querySelector(".calc__result");
const result = document.querySelector(".calc__operations");
const inputBtnList = document.querySelectorAll(".calc__card");
let operationSymbol = document.querySelector(".calc__symbol");

inputBtnList.forEach((item) => {
  item.addEventListener("click", () => {
    calculations(item.textContent);
  });
});

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
  temporaryValueFirst = temporaryValueFirst.toString();
  temporaryValueSec = temporaryValueSec.toString();
  if (/[0123456789,]/g.test(val)) {
    if (temporarySymbol != "") {
      if (temporaryValueSec.includes(",") && val == ",") {
        return;
      }
      temporaryValueSec += val;
      result.textContent = temporaryValueSec;
      return;
    }
    if (temporaryValueFirst.includes(",") && val == ",") {
      return;
    }
    temporaryValueFirst += val;
    result.textContent = temporaryValueFirst;
  }

  if (val == "C") {
    if (temporarySymbol != "") {
      result.textContent = result.textContent.slice(0, -1);
      temporaryValueSec = temporaryValueSec.slice(0, -1);
      if (result.textContent == "") {
        result.textContent = "0";
        temporaryValueFirst = "";
        temporaryValueSec = "";
        temporarySymbol = "";
        operationSymbol.textContent = "";
      }
      return;
    } else {
      result.textContent = result.textContent.slice(0, -1);
      temporaryValueFirst = temporaryValueFirst.slice(0, -1);
      if (result.textContent == "") {
        result.textContent = "0";
        temporaryValueFirst = "";
        temporaryValueSec = "";
        temporarySymbol = "";
        operationSymbol.textContent = "";
      }
    }
  }

  if (val == "CE") {
    result.textContent = "0";
    temporaryValueFirst = "";
    temporarySymbol = "";
    temporaryValueSec = "";
    operationSymbol.textContent = "";
  }

  if (/sqrt\(\)|[\^$/*+-]/g.test(val)) {
    temporarySymbol = val;
    operationSymbol.textContent = val;
  }

  if (temporaryValueFirst != "" && temporarySymbol != "" && temporaryValueSec != "" && val == "=") {
    switch (temporarySymbol) {
      case "+":
        temporaryValueFirst = result.textContent =
          parseFloat(temporaryValueFirst) + parseFloat(temporaryValueSec);
        temporarySymbol = "";
        operationSymbol.textContent = "";
        temporaryValueSec = "";
        break;
      case "-":
        temporaryValueFirst = result.textContent =
          parseFloat(temporaryValueFirst) - parseFloat(temporaryValueSec);
        temporarySymbol = "";
        operationSymbol.textContent = "";
        temporaryValueSec = "";
        break;
      case "*":
        temporaryValueFirst = result.textContent =
          parseFloat(temporaryValueFirst) * parseFloat(temporaryValueSec);
        temporarySymbol = "";
        operationSymbol.textContent = "";
        temporaryValueSec = "";
        break;
      case "/":
        temporaryValueFirst = result.textContent =
          parseFloat(temporaryValueFirst) / parseFloat(temporaryValueSec);
        temporarySymbol = "";
        operationSymbol.textContent = "";
        temporaryValueSec = "";
        break;
      case "^":
        temporaryValueFirst = result.textContent = Math.pow(
          parseFloat(temporaryValueFirst),
          parseFloat(temporaryValueSec)
        );
        temporarySymbol = "";
        operationSymbol.textContent = "";
        temporaryValueSec = "";
        break;
    }
  }

  if (val == "sqrt()") {
    temporaryValueFirst = result.textContent = Math.sqrt(parseFloat(temporaryValueFirst));
    temporarySymbol = "";
    operationSymbol.textContent = "";
    temporaryValueSec = "";
  }
}

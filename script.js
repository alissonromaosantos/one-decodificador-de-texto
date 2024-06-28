const screen = document.querySelector("body");
const textInput = document.querySelector("#input-text");
const encryptButton = document.querySelector(".encrypt-button");
const decryptButton = document.querySelector(".decrypt-button");
const warningMessage = document.querySelector(".warning-message");
const imageShowMessage = document.querySelector(".show-message img");
const titleShowMessage = document.querySelector(".show-message h3");
const paragraphShowMessage = document.querySelector(".show-message p");
const textareaShowMessage = document.querySelector("#output-text");
const copyButton = document.querySelector(".copy-button");

const screenSize = screen.offsetWidth;

let encryptedWords = [];
let decryptedWords = [];

function cryptographWords(event) {
  event.preventDefault();
  event.stopPropagation();

  let newWord = "";
  textareaShowMessage.value = "";

  if (
    textInput.value === textInput.value.toLowerCase() &&
    textInput.value !== "" &&
    !textInput.value.includes("à") &&
    !textInput.value.includes("á") &&
    !textInput.value.includes("é") &&
    !textInput.value.includes("ê") &&
    !textInput.value.includes("í") &&
    !textInput.value.includes("ó") &&
    !textInput.value.includes("ô") &&
    !textInput.value.includes("ú") &&
    !textInput.value.includes("ç") &&
    !textInput.value.includes("ã") &&
    !textInput.value.includes("õ")
  ) {
    warningMessage.style.color = "var(--gray-400)";

    imageShowMessage.style.display = "none";
    titleShowMessage.style.display = "none";
    paragraphShowMessage.style.display = "none";

    textareaShowMessage.style.display = "block";
    copyButton.style.display = "block";

    let words = textInput.value.split(" ");

    for (let word of words) {
      if (
        word.includes("a") ||
        word.includes("e") ||
        word.includes("i") ||
        word.includes("o") ||
        word.includes("u") ||
        !word.includes("a") ||
        !word.includes("e") ||
        !word.includes("i") ||
        !word.includes("o") ||
        !word.includes("u")
      ) {
        let letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "a") {
            letters.splice(i, 1, "ai");
            newWord += letters[i];
          } else if (letters[i] === "e") {
            letters.splice(i, 1, "enter");
            newWord += letters[i];
          } else if (letters[i] === "i") {
            letters.splice(i, 1, "imes");
            newWord += letters[i];
          } else if (letters[i] === "o") {
            letters.splice(i, 1, "ober");
            newWord += letters[i];
          } else if (letters[i] === "u") {
            letters.splice(i, 1, "ufat");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      textareaShowMessage.value = encryptedWords[encryptedWords.length - 1];
    }
  } else {
    warningMessage.style.color = "#f30000";

    if (screenSize > 1024) {
      imageShowMessage.style.display = "block";
    }

    titleShowMessage.style.display = "block";
    paragraphShowMessage.style.display = "block";

    textareaShowMessage.style.display = "none";
    copyButton.style.display = "none";
  }
}

function decryptographWords(event) {
  event.preventDefault();
  event.stopPropagation();

  let newText = "";
  textareaShowMessage.value = "";

  if (
    textInput.value === textInput.value.toLowerCase() &&
    textInput.value !== "" &&
    !textInput.value.includes("à") &&
    !textInput.value.includes("á") &&
    !textInput.value.includes("é") &&
    !textInput.value.includes("ê") &&
    !textInput.value.includes("í") &&
    !textInput.value.includes("ó") &&
    !textInput.value.includes("ô") &&
    !textInput.value.includes("ú") &&
    !textInput.value.includes("ç") &&
    !textInput.value.includes("ã") &&
    !textInput.value.includes("õ")
  ) {
    warningMessage.style.color = "var(--gray-400)";

    imageShowMessage.style.display = "none";
    titleShowMessage.style.display = "none";
    paragraphShowMessage.style.display = "none";

    textareaShowMessage.style.display = "block";
    copyButton.style.display = "block";

    let text = textInput.value;

    newText = text
      .replaceAll("ai", "a")
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    textareaShowMessage.value = newText;
  } else {
    warningMessage.style.color = "#f30000";

    if (screenSize > 1024) {
      imageShowMessage.style.display = "block";
    }

    titleShowMessage.style.display = "block";
    paragraphShowMessage.style.display = "block";

    textareaShowMessage.style.display = "none";
    copyButton.style.display = "none";
  }
}

function copyText(event) {
  event.preventDefault();
  event.stopPropagation();

  textareaShowMessage.select();
  document.execCommand("copy");
}

copyButton.addEventListener("click", (event) => {
  copyText(event);
});

encryptButton.addEventListener("click", (event) => {
  cryptographWords(event);
});

decryptButton.addEventListener("click", (event) => {
  decryptographWords(event);
});

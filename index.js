const textArea = document.querySelector(".text-area");
const message = document.querySelector(".mensagem");

function buttonEncrypt() {
    const encryptedText = encrypt(textArea.value);
    message.value = encryptedText;
    textArea.value = "";
};

function encrypt(encryptedMessage) {
    let matrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encryptedMessage = encryptedMessage.toLowerCase();

    for (let i = 0; i < matrix.length; i++) {
       if (encryptedMessage.includes(matrix[i][0])) {
            encryptedMessage =  encryptedMessage.replaceAll(matrix[i][0], matrix[i][1]);
       }
        
    }

    return encryptedMessage;
};

function decrypt(decryptMessage) {
    let matrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    decryptMessage = decryptMessage.toLowerCase();

    for (let i = 0; i < matrix.length; i++) {
       if (decryptMessage.includes(matrix[i][1])) {
        decryptMessage =  decryptMessage.replaceAll(matrix[i][1], matrix[i][0]);
       }
    }

    return decryptMessage;
};


function buttonDecrypt() {
    const dencryptedText = decrypt(textArea.value);
    message.value = dencryptedText;
    textArea.value = "";
};

function copyButton() {
    navigator.clipboard.write(textArea.value);
}







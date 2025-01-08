const qrText = document.querySelector("#qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");
let size = sizes.value;
const canvas = qrContainer.querySelector('canvas');

function isEmptyInput() {
    if(qrText.value.length > 0) {
        generateqrCode(); 
    }
    else {
        alert("Enter the text or URL");
    }
}

function generateqrCode() {
    qrContainer.innerHTML = ""; 
    const qr = new QRCode(qrContainer, {
        text: qrText.value.trim() || " ",
        width: parseInt(size),
        height: parseInt(size),
        colorLight: "#fff",
        colorDark: "#000",
    });

    setTimeout(() => {
        if (canvas) {
            const img = document.createElement('img');
            img.src = canvas.toDataURL("image/png"); 
            qrContainer.innerHTML = "";
            qrContainer.appendChild(img); 
        }
    }, 100);
}

generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener("change", (e) => {
    size = e.target.value; 
    generateqrCode();
    isEmptyInput();
});

downloadBtn.addEventListener("click" , () => {
    let img = document.querySelector(".qr-body img");
    if (img.getAttribute('src') !== null) {
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAttr);
    }
    else {
        downloadBtn.setAttribute("href",`${document.canvas.toDataURL()}`)
    }
})
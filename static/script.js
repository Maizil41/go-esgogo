const textElement = document.getElementById('text');
const text = "Hello, World!";
let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(deleteText, 10000);
    }
}

function deleteText() {
    if (index > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        index--;
        setTimeout(deleteText, 50);
    } else {
        setTimeout(typeText, 1000);
    }
}

typeText();

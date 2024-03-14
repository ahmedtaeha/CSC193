window.onload = function () {
    document.getElementById("biggerBtn").onclick = makeTextBigger;
    document.getElementById("fancyShmancy").onchange = applyFancyStyle;
    document.getElementById("boringBetty").onchange = applyBoringStyle;
    document.getElementById("mooBtn").onclick = mooText;
};

function makeTextBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

function applyFancyStyle() {
    let textarea = document.getElementById("userText");
    if (document.getElementById("fancyShmancy").checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline";
    }
}

function applyBoringStyle() {
    if (document.getElementById("boringBetty").checked) {
        let textarea = document.getElementById("userText");
        textarea.style.fontWeight = "normal";
        textarea.style.color = "black";
        textarea.style.textDecoration = "none";
    }
}

function mooText() {
    let textarea = document.getElementById("userText");
    let text = textarea.value.toUpperCase();
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i] + "-MOO";
        }
    }
    textarea.value = sentences.join(".");
}

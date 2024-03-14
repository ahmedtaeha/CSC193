document.addEventListener('DOMContentLoaded', function () {
    // Initial alert to test if JS code is running.
    // Removed the initial alert("Hello, world!"); to meet the requirement:
    // Modify your JS code and HTML so that the "Hello, world!" alert message won't pop up until the user clicks the "Bigger" button.

    // Event handler for the "Bigger" button
    document.getElementById("biggerBtn").onclick = function () {
        alert("Hello, world!"); // Alert moved inside the function as per instructions.
        makeTextBigger();
    };

    // Event handlers for "FancyShmancy" and "BoringBetty" radio buttons
    document.getElementById("fancyShmancy").onchange = function () {
        if (this.checked) {
            applyFancyStyle();
        }
    };

    document.getElementById("boringBetty").onchange = function () {
        if (this.checked) {
            applyBoringStyle();
        }
    };

    // Event handler for the "Moo" button
    document.getElementById("mooBtn").onclick = mooText;
});

function makeTextBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

function applyFancyStyle() {
    let textarea = document.getElementById("userText");
    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline";
}

function applyBoringStyle() {
    let textarea = document.getElementById("userText");
    textarea.style.fontWeight = "normal";
    textarea.style.color = "black";
    textarea.style.textDecoration = "none";
}

function mooText() {
    let textarea = document.getElementById("userText");
    let text = textarea.value.toUpperCase();
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-MOO";
        }
    }
    textarea.value = sentences.join(". ").trim();
}

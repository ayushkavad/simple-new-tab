import { updateClock, generatePastelColor } from "./helper.js";


function updateClockNewTab(forceUpdateFont = false, forceUpdateFontSize = false) {
    updateClock("digitalClockNewTab", forceUpdateFont, forceUpdateFontSize)
}

// Update Tab Name
chrome.storage.sync.get(['newTabName'], function (result) {
    if (!result.newTabName) {
        result.newTabName = "Simple New Tab ✨"
    }
    document.title = result.newTabName;
});

// Update the clock by refresh rate set in settings page.
chrome.storage.sync.get(["refreshRate"], function (result) {
    if (result.refreshRate == undefined) {
        result.refreshRate = 5;
    }
    setInterval(updateClockNewTab, (1000 / result.refreshRate));
})

// Update the clock every second
// setInterval(updateClockNewTab, 10);

// Initial update
updateClockNewTab(true, true);

// Update background
document.body.style.backgroundColor = generatePastelColor();

document.addEventListener("DOMContentLoaded", function() {
})
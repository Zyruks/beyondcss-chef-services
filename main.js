"use strict";
const browser = navigator.userAgent.match(/firefox|fxiso/i);
const sectionHeader = document.querySelectorAll(".js-section-header");

/**
 * If the section header has a paragraph, add a margin of 36px to the bottom of the header. If the
 * section header does not have a paragraph, add a margin of 90px to the bottom of the header
 */
function headerMargin() {
  for (let header of sectionHeader) {
    if (header.getElementsByTagName("p").length !== 0) {
      header.classList.add("margin-block-end-36");
    } else if (header.getElementsByTagName("p").length === 0) {
      header.classList.add("margin-block-end-90");
    }
  }
}

/* This is checking to see if the browser is Firefox. If it is, it will run the headerMargin function.
If it is not, it will log "Browser is working properly" to the console. */
if (browser !== null && browser["0"] === "Firefox") {
  headerMargin();
} else {
  console.log("Browser is not Firefox");
}

console.log("The extension is up and running");

var images = document.getElementsByTagName("img");

for (let elt of images) {
  elt.src = `${browser.runtime.getURL("logo.png")}`;
  elt.alt = "an alt text";
}

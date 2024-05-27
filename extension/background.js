function openTab() {
  var newTab = (typeof browser !== "undefined" ? browser : chrome).tabs.create({
    url: "https://twitter.com",
    active: true,
  });
}

(typeof browser !== "undefined"
  ? browser
  : chrome
).browserAction.onClicked.addListener(openTab);

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: "https://twitter.com", // Replace with your actual app URL
    active: true,
  });
});

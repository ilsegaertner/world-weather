chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: "https://global-weather-info.netlify.app/", // Replace with your actual app URL
    active: true,
  });
});

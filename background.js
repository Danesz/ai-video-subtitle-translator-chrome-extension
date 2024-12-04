
chrome.tabs.onActivated.addListener((activeInfo) => {
  hookTranslator(activeInfo.tabId);
});
chrome.tabs.onUpdated.addListener(async (tabId) => {
  hookTranslator(tabId);
});

async function hookTranslator(tabId) {
  const tab = await chrome.tabs.get(tabId);
  if (!tab.url.startsWith('http')) {
    return;
  }
  console.log("yolo injectio")
  const injection = await chrome.scripting.executeScript({
    target: { tabId },
    files: ['scripts/hook_translator.js']
  });
  chrome.storage.session.set({ pageContent: injection[0].result });
}

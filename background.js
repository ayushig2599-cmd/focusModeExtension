// Function to enable or disable the ruleset
async function updateBlockingRules(enabled) {
  const rulesetId = 'ruleset_1';
  if (enabled) {
    await chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: [rulesetId]
    });
  } else {
    await chrome.declarativeNetRequest.updateEnabledRulesets({
      disableRulesetIds: [rulesetId]
    });
  }
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'updateRules') {
    updateBlockingRules(request.enabled);
  }
});

// Sync on startup
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['blockingEnabled'], (result) => {
    const isEnabled = result.blockingEnabled !== false;
    updateBlockingRules(isEnabled);
  });
});

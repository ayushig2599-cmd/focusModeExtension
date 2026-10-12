const toggle = document.getElementById('block-toggle');
const statusLabel = document.getElementById('status-label');

// Initialize toggle state from storage
chrome.storage.local.get(['blockingEnabled'], (result) => {
  const isEnabled = result.blockingEnabled !== false; // Default to true
  toggle.checked = isEnabled;
  updateStatusLabel(isEnabled);
});

toggle.addEventListener('change', () => {
  const isEnabled = toggle.checked;
  chrome.storage.local.set({ blockingEnabled: isEnabled }, () => {
    updateStatusLabel(isEnabled);
    // Tell background script to update rules
    chrome.runtime.sendMessage({ action: 'updateRules', enabled: isEnabled });
  });
});

function updateStatusLabel(isEnabled) {
  statusLabel.textContent = isEnabled ? 'Active' : 'Inactive';
  statusLabel.style.color = isEnabled ? '#28a745' : '#dc3545';
}

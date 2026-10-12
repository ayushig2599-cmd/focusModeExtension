
  Project Files

   - manifest.json: Main configuration.
   - rules.json: The blocking logic for Instagram and YouTube.
   - blocked.html: The page users see when a site is blocked.
   - popup.html/js: The interface to toggle the blocker on and off.
   - background.js: Manages the extension state and rulesets.

  How to Load the Extension in Chrome
   1. Open Google Chrome and navigate to chrome://extensions/.
   2. In the top right corner, enable Developer mode.
   3. Click the Load unpacked button that appears in the top left.
   4. Clone this project and load this folder.
   5. The "Focus Blocker" should now appear in your list of extensions.

  How to Test It
   1. Blocking: Try visiting instagram.com (https://instagram.com) or youtube.com (https://youtube.com). You should be automatically redirected to your custom "Focus Time!" page.
   2. Toggling: Click the extension icon in your Chrome toolbar (you might need to pin it first). Use the switch to turn blocking Off, then try visiting the sites again—they should load normally.
      Toggle it back On to resume blocking.

      


const box = document.getElementById('auto');
chrome.storage.local.get('settings').then(({ settings }) => { box.checked = !settings || settings.autoOpen !== false; });
box.addEventListener('change', async () => {
  const { settings = {} } = await chrome.storage.local.get('settings');
  settings.autoOpen = box.checked;
  await chrome.storage.local.set({ settings });
});
if (/Mac/.test(navigator.platform)) document.querySelectorAll('.mod').forEach(k => { k.textContent = '⌘'; });

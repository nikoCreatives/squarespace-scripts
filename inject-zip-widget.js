document.addEventListener('DOMContentLoaded', async function () {
  const container = document.getElementById('zip-widget-container');
  if (!container) return;

  try {
    const htmlRes = await fetch('https://cdn.jsdelivr.net/gh/nikoCreatives/squarespace-scripts/zip-widget.html');
    const htmlText = await htmlRes.text();
    container.innerHTML = htmlText;

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/nikoCreatives/squarespace-scripts/zip-widget.js';
    document.body.appendChild(script);
  } catch (err) {
    console.error('ZIP Widget failed to load:', err);
  }
});

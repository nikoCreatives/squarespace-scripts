document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('zip-widget-container');
  if (!container) {
    console.warn("No container with ID 'zip-widget-container' found.");
    return;
  }

  try {
    const htmlRes = await fetch('https://cdn.jsdelivr.net/gh/nikoCreatives/squarespace-scripts/zip-widget.html');
    const htmlText = await htmlRes.text();
    container.innerHTML = htmlText;

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/nikoCreatives/squarespace-scripts/zip-widget.js';
    script.defer = true;
    document.body.appendChild(script);
  } catch (err) {
    console.error('Failed to load ZIP widget:', err);
  }
});

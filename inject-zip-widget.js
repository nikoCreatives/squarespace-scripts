// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('zip-widget-container');
  if (!container) {
    console.error('zip-widget-container not found');
    return;
  }

  try {
    // Load HTML
    const htmlResponse = await fetch('https://cdn.jsdelivr.net/gh/nikoCreatives/squarespace-scripts@main/zip-widget.html');
    const htmlContent = await htmlResponse.text();
    container.innerHTML = htmlContent;

    // Load JS after injecting HTML
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/nikoCreatives/squarespace-scripts@main/zip-widget.js';
    script.defer = true;
    document.body.appendChild(script);
  } catch (err) {
    console.error('Failed to load ZIP widget:', err);
  }
});

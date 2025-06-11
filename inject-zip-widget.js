(async () => {
  try {
    const response = await fetch('https://cdn.jsdelivr.net/gh/nikoCreatives/squarespace-scripts@main/zip-widget.html');
    const html = await response.text();

    const container = document.getElementById('zip-widget-container');
    if (!container) {
      console.error('No element with ID "zip-widget-container" found on the page.');
      return;
    }

    container.innerHTML = html;

    // Dynamically load the zip-widget.js logic **after** HTML is inserted
    const logicScript = document.createElement('script');
    logicScript.src = 'https://cdn.jsdelivr.net/gh/nikoCreatives/squarespace-scripts@main/zip-widget.js?v=2.0'; // Add versioning to bust cache
    document.body.appendChild(logicScript);
  } catch (err) {
    console.error('ZIP widget injection failed:', err);
  }
})();

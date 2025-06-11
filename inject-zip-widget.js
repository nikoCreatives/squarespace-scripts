(async function () {
  const htmlRes = await fetch('https://cdn.jsdelivr.net/gh/nikoCreatives/squarespace-scripts/zip-widget.html');
  const htmlText = await htmlRes.text();

  const container = document.createElement('div');
  container.innerHTML = htmlText;
  document.currentScript.insertAdjacentElement('beforebegin', container);

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/gh/nikoCreatives/squarespace-scripts/zip-widget.js';
  document.body.appendChild(script);
})();

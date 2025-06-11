(function () {
  const zipCodes = [
    '60007', '60018', '60068', '60106', '60131', '60176', '60601', '60602',
    '60603', '60604', '60605', '60606', '60607', '60608', '60609', '60610',
    '60611', '60612', '60613', '60614', '60615', '60616', '60617', '60618',
    '60619', '60620', '60621', '60622', '60623', '60624', '60625', '60626',
    '60628', '60629', '60630', '60631', '60632', '60633', '60634', '60636',
    '60637', '60638', '60639', '60640', '60641', '60642', '60643', '60644',
    '60645', '60646', '60647', '60649', '60651', '60652', '60653', '60654',
    '60655', '60656', '60657', '60659', '60660', '60661', '60706', '60707',
    '60714', '60804', '53201', '53202', '53203', '53204', '53205', '53206',
    '53207', '53208', '53209', '53210', '53211', '53212', '53213', '53214',
    '53215', '53216', '53217', '53218', '53219', '53220', '53221', '53222',
    '53223', '53224', '53225', '53226', '53227', '53228', '53233', '53234',
    '53237', '53259', '53263', '53274', '53278', '53288', '53290', '53293', '53295'
  ];

  const css = `
    @media only screen and (min-width: 768px) {
      #zip-code-form {
        flex-direction: row !important;
        align-items: center;
      }
    }
  `;

  const html = `
    <style>${css}</style>
    <div style="background-color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); padding: 24px;">
      <form id="zip-code-form" style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="flex-grow: 1;">
          <input type="text" id="zip-code" name="zip-code" placeholder="Enter your ZIP code"
            style="width: 100%; padding: 0.75rem 1rem; border: 1px solid #ddd; font-size: 16px; box-sizing: border-box;">
        </div>
        <button type="submit"
          style="background-color: #1e3c70; color: white; font-weight: bold; padding: 0.75rem 1.5rem; border: none; cursor: pointer; font-size: 16px; transition: background-color 0.3s;">
          Check Availability
        </button>
      </form>
      <div id="zip-result" style="margin-top: 20px; display: none;">
        <div id="zip-success" style="display: none; background-color: #f0f9f0; border: 1px solid #c3e6cb; padding: 15px; text-align: left;">
          <div style="display: flex; align-items: flex-start;">
            <div style="color: #155724; margin-right: 10px; margin-top: 3px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <p style="color: #155724; font-weight: 600; margin: 0 0 5px 0;">Good news! We serve your area.</p>
              <p style="color: #2d7548; font-size: 14px; margin: 0 0 10px 0;">Contact us today for a free estimate on your roofing project.</p>
              <div style="margin-top: 10px;">
                <a href="#form" style="display: inline-block; background-color: #28a745; color: white; font-weight: 500; padding: 8px 16px; text-decoration: none; font-size: 14px;">Request a Quote</a>
              </div>
            </div>
          </div>
        </div>
        <div id="zip-error" style="display: none; background-color: #fdf2f2; border: 1px solid #f5c6cb; padding: 15px; text-align: left;">
          <div style="display: flex; align-items: flex-start;">
            <div style="color: #721c24; margin-right: 10px; margin-top: 3px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <p style="color: #721c24; font-weight: 600; margin: 0 0 5px 0;">We don't currently serve this area.</p>
              <p style="color: #973d3d; font-size: 14px; margin: 0 0 10px 0;">However, we're expanding our service areas. Please contact us to discuss your needs.</p>
              <div style="margin-top: 10px;">
                <a href="tel:8558197663" style="display: inline-block; background-color: #dc3545; color: white; font-weight: 500; padding: 8px 16px; text-decoration: none; font-size: 14px;">(855) 819-7663</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  function initZipChecker() {
    const target = document.getElementById('zip-checker');
    if (!target) return;

    target.innerHTML = html;

    const form = document.getElementById('zip-code-form');
    const input = document.getElementById('zip-code');
    const result = document.getElementById('zip-result');
    const success = document.getElementById('zip-success');
    const error = document.getElementById('zip-error');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const zip = input.value.trim();
      result.style.display = 'block';

      if (zipCodes.includes(zip)) {
        success.style.display = 'block';
        error.style.display = 'none';
      } else {
        success.style.display = 'none';
        error.style.display = 'block';
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initZipChecker);
})();

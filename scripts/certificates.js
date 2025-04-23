document.addEventListener('DOMContentLoaded', () => {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <img class="modal-image" src="" alt="Certificate">
            <br>
            <a href="#" class="download-btn" target="_blank"><i class="bi bi-download"></i></a>
        </div>
    `;
    document.body.appendChild(modal);

    // Certificate links to Google Drive
    const certificateLinks = {
        'JavaScript Avanzado': 'https://drive.google.com/your-js-cert-link',
        'React Development': 'https://drive.google.com/your-react-cert-link',
        'SEO Profesional': 'https://drive.google.com/your-seo-cert-link',
        'Python Programming': 'https://drive.google.com/your-python-cert-link',
        'TypeScript Essential': 'https://drive.google.com/your-typescript-cert-link',
        'HTML5 & CSS3 Master': 'https://drive.google.com/your-html-css-cert-link',
        'Git & GitHub Pro': 'https://drive.google.com/your-git-cert-link',
        'Node.js Backend': 'https://drive.google.com/your-nodejs-cert-link',
        'UI/UX Design': 'https://drive.google.com/your-uiux-cert-link',
        'API REST Development': 'https://drive.google.com/your-api-cert-link'
    };

    // Get all certificate elements
    const certificates = document.querySelectorAll('.certificate');

    certificates.forEach(cert => {
        cert.addEventListener('click', () => {
            const img = cert.querySelector('.cert-preview');
            const title = cert.querySelector('h3').textContent;
            const modalImg = modal.querySelector('.modal-image');
            const downloadBtn = modal.querySelector('.download-btn');

            modalImg.src = img.src;
            modalImg.alt = img.alt;
            downloadBtn.href = certificateLinks[title];
            modal.classList.add('active');
        });
    });

    // Close modal when clicking the close button or outside the modal
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
})
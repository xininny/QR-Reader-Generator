document.addEventListener('DOMContentLoaded', function() {
    function generateQRCode() {
        const url = document.querySelector('.url-input').value;
        if (url) {
            const qrCodeContainer = document.createElement('div');
            const qrCode = new QRCode(qrCodeContainer, {
                text: url,
                width: 200,
                height: 200
            });

            setTimeout(() => {
                const qrImage = qrCodeContainer.querySelector('img').src;
                const imagePlaceholder = document.querySelector('.Image');
                imagePlaceholder.innerHTML = ''; 
                const imgElement = document.createElement('img');
                imgElement.src = qrImage;
                imagePlaceholder.appendChild(imgElement); 
            }, 500);
        } else {
            alert('Please enter a valid URL.');
        }
    }

    function downloadQRCode() {
        const qrImage = document.querySelector('.Image img')?.src;
        if (qrImage) {
            const link = document.createElement('a');
            link.href = qrImage;
            link.download = 'QRCode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert('Please generate the QR code first.');
        }
    }

    document.querySelector('.Generate-button').addEventListener('click', generateQRCode);
    document.querySelector('.Download-button').addEventListener('click', downloadQRCode);

    document.querySelector('.url-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            generateQRCode();
        }
    });

    document.querySelector('.url-input').addEventListener('input', function() {
        const imagePlaceholder = document.querySelector('.Image');
        imagePlaceholder.innerHTML = '';

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('Image-container');
        const generateIcon = document.createElement('img');
        generateIcon.src = '/images/Generate-button.svg';
        generateIcon.alt = 'Generate-icon';
        generateIcon.classList.add('Generate-icon');
        imageContainer.appendChild(generateIcon);

        const generateTextContainer = document.createElement('div');
        generateTextContainer.classList.add('Generate-text-container');
        const generateText1 = document.createElement('div');
        generateText1.classList.add('Generate-text-1');
        generateText1.textContent = 'QR code image';
        const generateText2 = document.createElement('div');
        generateText2.classList.add('Generate-text-2');
        generateText2.textContent = 'will appear here';

        generateTextContainer.appendChild(generateText1);
        generateTextContainer.appendChild(generateText2);

        imagePlaceholder.appendChild(imageContainer);
        imagePlaceholder.appendChild(generateTextContainer);
    });
});

document.querySelector(".Nav-non-select-1").addEventListener("click", function () {
    window.location.href = "image-upload.html";
});

document.querySelector(".Nav-non-select-2").addEventListener("click", function () {
    window.location.href = "clipboard.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const uploadContainer = document.querySelector(".Upload");
  const imageContainer = document.querySelector(".Upload-image-container");
  const textContainer = document.querySelector(".Upload-text-container");
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";

  let uploadedImage = null;

  const urlInput = document.querySelector(".url-input");
  urlInput.disabled = true;

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (uploadedImage) {
        uploadedImage.remove();
      }

      uploadedImage = document.createElement("img");
      uploadedImage.src = event.target.result;
      uploadedImage.style.maxWidth = "100%";
      uploadedImage.style.maxHeight = "100%";
      uploadedImage.style.objectFit = "contain";
      uploadedImage.style.cursor = "pointer";
      uploadContainer.appendChild(uploadedImage);

      imageContainer.classList.add("hidden");
      textContainer.classList.add("hidden");

      uploadedImage.onload = () => {
        const qrCanvas = document.createElement("canvas");
        const qrContext = qrCanvas.getContext("2d");
        qrCanvas.width = uploadedImage.width;
        qrCanvas.height = uploadedImage.height;
        qrContext.drawImage(uploadedImage, 0, 0, qrCanvas.width, qrCanvas.height);

        const imageData = qrContext.getImageData(0, 0, qrCanvas.width, qrCanvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          urlInput.value = code.data; 
        } else {
          urlInput.value = "No QR code detected."; 
        }
      };
    };
    reader.readAsDataURL(file);
  };

  const addDragAndDropHandlers = (element) => {
    element.addEventListener("dragover", (event) => {
      event.preventDefault();
      element.classList.add("dragover");
    });

    element.addEventListener("dragleave", () => {
      element.classList.remove("dragover");
    });

    element.addEventListener("drop", (event) => {
      event.preventDefault();
      element.classList.remove("dragover");
      const file = event.dataTransfer.files[0];
      if (file) {
        handleFile(file);
      }
    });
  };

  uploadContainer.addEventListener("click", () => {
    if (uploadedImage) {
      uploadedImage.remove();
      uploadedImage = null;

      imageContainer.classList.remove("hidden");
      textContainer.classList.remove("hidden");

      urlInput.value = "";
    } else {
      fileInput.value = null;
      fileInput.click();
    }
  });

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFile(file);
    }
  });

  addDragAndDropHandlers(uploadContainer);

  document
    .querySelector(".Nav-non-select-1")
    .addEventListener("click", function () {
      window.location.href = "clipboard.html";
    });

  document
    .querySelector(".Nav-non-select-2")
    .addEventListener("click", function () {
      window.location.href = "generate.html";
    });

  document.querySelector(".open-url").addEventListener("click", () => {
    const decodedURL = urlInput.value;
    if (decodedURL) {
      window.open(decodedURL, "_blank");
    } else {
      alert("No decoded URL available."); 
    }
  });
});

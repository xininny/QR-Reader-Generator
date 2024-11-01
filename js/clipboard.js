document.addEventListener("DOMContentLoaded", () => {
  const uploadContainer = document.querySelector(".Upload");
  const imageContainer = document.querySelector(".Upload-image-container");
  const textContainer = document.querySelector(".Upload-text-container");
  const urlInput = document.querySelector(".url-input");
  let uploadedImage = null;
  urlInput.disabled = true;

  const handleClipboardPaste = (event) => {
    const items = event.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const blob = items[i].getAsFile();
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            replaceImage(img);
            decodeQRFromImage(img);
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(blob);
        break;
      }
    }
  };

  const replaceImage = (newImage) => {
    newImage.style.maxWidth = "100%";
    newImage.style.maxHeight = "100%";
    newImage.style.objectFit = "contain";

    uploadContainer.appendChild(newImage);
    uploadedImage = newImage;

    imageContainer.style.display = "none";
    textContainer.style.display = "none";

    newImage.addEventListener("click", removeImage);
  };

  const removeImage = () => {
    if (uploadedImage) {
      uploadContainer.removeChild(uploadedImage);
      uploadedImage = null;

      imageContainer.style.display = "flex";
      textContainer.style.display = "flex";

      urlInput.value = "";
    }
  };

  const decodeQRFromImage = (img) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    const imageData = ctx.getImageData(0, 0, img.width, img.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      urlInput.value = code.data; 
    } else {
      urlInput.value = "No QR code detected.";
    }
  };

  const openDecodedURL = () => {
    const decodedURL = urlInput.value;
    if (decodedURL) {
      window.open(decodedURL, "_blank");
    } else {
      alert("Please enter a URL.");
    }
  };

  document.querySelector(".Nav-non-select-1").addEventListener("click", function () {
    window.location.href = "image-upload.html";
  });

  document.querySelector(".Nav-non-select-2").addEventListener("click", function () {
    window.location.href = "generate.html";
  });

  document.addEventListener("paste", handleClipboardPaste);
  document.querySelector(".open-url").addEventListener("click", () => {
    const decodedURL = urlInput.value;
    if (decodedURL) {
      window.open(decodedURL, "_blank");
    } else {
      alert("No decoded URL available."); 
    }
  });

  uploadContainer.addEventListener("click", () => {
    if (!uploadedImage) {
      document.addEventListener("paste", handleClipboardPaste);
    }
  });
});

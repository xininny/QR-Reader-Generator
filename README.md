# QR Reader & Generator

A Chrome extension that can decode QR codes from images and generate QR codes from URLs.

[**View the extension on the Chrome Web Store**](https://chromewebstore.google.com/detail/qr-reader-generator/ijpcbkmfaeepjimbaadgiafalbakolmg)

## Features

- **Image Upload**: Upload images containing QR codes to decode their content.
- **Clipboard Paste**: Paste copied images from the clipboard to decode QR codes.
- **QR Code Generation**: Generate QR codes from entered URLs and download them.

## Installation

### Method 1: Install from the Chrome Web Store

1. Open the Chrome browser and navigate to the [**QR Reader & Generator extension page**](https://chromewebstore.google.com/detail/qr-reader-generator/ijpcbkmfaeepjimbaadgiafalbakolmg).
2. Click the **Add to Chrome** button to install the extension.
3. Once installed, you can access it through the browser's extension icon.

### Method 2: Install Manually

1. Clone this repository or download it as a ZIP file.

   ```bash
   git clone https://github.com/xininny/qr-reader-generator.git
   ```

   Or download the ZIP file and extract it.

2. Open the Chrome browser and enter `chrome://extensions/` in the address bar.
3. Enable **Developer mode** in the top right corner.
4. Click on the **Load unpacked** button.
5. Select the downloaded folder to load the extension.

## Usage

1. Click the extension icon in Chrome to launch it.
2. In the navigation bar at the top, select the desired function:
   - **Image**: Upload an image to decode a QR code.
   - **Clipboard**: Paste an image from the clipboard to decode a QR code.
   - **Generate**: Enter a URL to generate a QR code.
3. Follow the instructions to decode or generate QR codes.

## Main Technology Stack

- **HTML5 & CSS3**: Building the user interface
- **JavaScript**: QR code processing and functionality implementation
- **jsQR.js**: QR code decoding library (Apache License 2.0)
- **qrcode.min.js**: QR code generation library (MIT License)

## File Structure

The main folder and file structure of the project is as follows:

```
QR Reader & Generator/
├── css/
│   ├── clipboard.css
│   ├── generate.css
│   └── image-upload.css
├── html/
│   ├── clipboard.html
│   ├── generate.html
│   └── image-upload.html
├── icons/
│   ├── icon.png
│   └── logo.png
├── images/
│   └── *.svg
├── js/
│   ├── clipboard.js
│   ├── generate.js
│   ├── image-upload.js
│   ├── jsQR.js
│   └── qrcode.min.js
├── manifest.json
└── package-lock.json
```

- **css/**: Stylesheet files
  - `clipboard.css`, `generate.css`, `image-upload.css`
- **html/**: HTML files for each function
  - `clipboard.html`, `generate.html`, `image-upload.html`
- **icons/**: Extension icons
- **images/**: SVG images used within the extension
- **js/**: JavaScript files
  - `clipboard.js`, `generate.js`, `image-upload.js`: Function-specific scripts
  - `jsQR.js`, `qrcode.min.js`: External libraries
- **manifest.json**: Extension configuration file
- **package-lock.json**: Package lock file (dependency management)

## License

This project is licensed under the MIT License. See the [`LICENSE`](LICENSE) file for details.

### External Library Licenses

This project uses the following external libraries, each with its own license:

- **jsQR.js**: [GitHub Link](https://github.com/cozmo/jsQR) - Apache License 2.0
- **qrcode.min.js**: [GitHub Link](https://github.com/davidshimjs/qrcodejs) - MIT License

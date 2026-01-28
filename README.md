# Network Based Image Optimization

This project demonstrates network aware image optimization by detecting the user’s network conditions using the Network Information API and dynamically applying ImageKit image quality parameters.

The goal is to deliver the best possible image quality while minimizing data usage and improving load performance on slower networks.

---

## Project Overview

Different users access websites on different network conditions such as slow mobile networks or fast broadband connections.

Instead of serving the same image quality to everyone, this project detects the user’s effective network type at runtime and adjusts image quality accordingly using ImageKit URL based transformations.

This ensures:
Better performance on slow networks  
Reduced data usage  
Improved user experience  

---

## Live Demo

You can view and test the project here:

https://kashish-dev-101.github.io/Network-Based-ImageOptimzation/

To simulate different network conditions, use Chrome DevTools network throttling and reload the page.

---

## How It Works

1. The browser’s Network Information API is used to detect the user’s connection details.
2. The effective network type is read using `navigator.connection.effectiveType`.
3. Based on the detected network speed, an appropriate ImageKit quality parameter is selected.
4. The image URL is dynamically constructed using ImageKit transformation parameters.
5. The optimized image is then loaded in the browser.

---

## Network Detection Logic

The project uses the following mapping between network type and image quality:

Slow networks like slow 2g or 2g  
Lower quality images to reduce load time  

Medium networks like 3g  
Balanced image quality and performance  

Fast networks like 4g or better  
Higher quality images for better visual experience  

If the Network Information API is not supported by the browser, a safe default quality is applied.

---

## Image Optimization Using ImageKit

ImageKit allows real time image optimization through URL based transformations.

In this project:
The quality parameter is dynamically adjusted  
The image width is fixed for consistent layout  
Only the required image quality is delivered per network type  

This approach avoids unnecessary large image downloads on slow connections.

---

## Testing the Project

To test different scenarios:

1. Open the demo link in Google Chrome
2. Open Chrome DevTools
3. Go to the Network tab
4. Enable network throttling
5. Select Slow 3G, Fast 3G, or Online
6. Reload the page and observe image quality changes

You will also see a label on the page indicating the detected network type and applied image quality.

---

## Browser Support Notes

The Network Information API is not supported in all browsers.

This project includes a fallback mechanism that applies a default image quality when the API is unavailable, ensuring graceful degradation.

---

## References

Network Information API documentation  
https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API

ImageKit Image Optimization  
https://imagekit.io/docs/image-transformations

---






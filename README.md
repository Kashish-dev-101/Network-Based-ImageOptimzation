# Network Based Image Optimization

This project demonstrates network-aware image optimization by detecting the user's network conditions using the Network Information API and dynamically applying ImageKit image quality parameters.

**Live Demo:** [https://kashish-dev-101.github.io/Network-Based-ImageOptimzation/](https://kashish-dev-101.github.io/Network-Based-ImageOptimzation/)

---

## Why Network-Based Optimization?

Different users access websites on different network conditions—slow mobile networks or fast broadband connections.

Instead of serving the same image quality to everyone, this project detects the user's effective network type at runtime and adjusts image quality accordingly using ImageKit URL-based transformations.

**Benefits:**
- Better performance on slow networks
- Reduced data usage
- Improved user experience

---

## How It Works

1. The browser's [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API) detects the user's connection
2. The effective network type is read using `navigator.connection.effectiveType`
3. Based on network speed, an appropriate ImageKit quality parameter (`q`) is selected
4. The image URL is dynamically constructed with the quality transformation
5. The optimized image loads in the browser

---

## Quality Mapping

| Network Type | Quality (`q`) | Use Case |
|--------------|---------------|----------|
| 2G / slow-2g | 40 | Minimal quality for fastest load |
| 3G | 55 | Balanced quality and performance |
| 4G / WiFi | 75 | High quality for best visuals |
| API not supported | 60 | Safe default fallback |

---

## Quick Implementation

Here's the core logic—it's simple to implement:

```javascript
function getQualityFromNetwork() {
  const connection = navigator.connection;

  if (!connection) {
    return { q: 60 }; // Fallback for unsupported browsers
  }

  const type = connection.effectiveType;

  if (type === "slow-2g" || type === "2g") return { q: 40 };
  if (type === "3g") return { q: 55 };
  return { q: 75 }; // 4G or better
}

// Apply to ImageKit URL
const quality = getQualityFromNetwork().q;
const imageUrl = `https://ik.imagekit.io/your_id/image.jpg?tr=q-${quality}`;
```

---

## Testing the Demo

To test different network scenarios:

1. Open the [demo link](https://kashish-dev-101.github.io/Network-Based-ImageOptimzation/) in Google Chrome
2. Open Chrome DevTools (F12)
3. Go to the **Network** tab
4. Enable **network throttling** (dropdown near "No throttling")
5. Select **Slow 3G**, **Fast 3G**, or **Online**
6. Reload the page and observe the quality change

The page displays the detected network type and applied quality value.

---

## Browser Support

The Network Information API is primarily supported in **Chromium-based browsers** (Chrome, Edge, Opera).

| Browser | Support |
|---------|---------|
| Chrome | Yes |
| Edge | Yes |
| Opera | Yes |
| Firefox | No |
| Safari | No |

The project includes a fallback that applies default quality (60) when the API is unavailable.

---

## References

- [Network Information API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)
- [ImageKit Image Transformations](https://imagekit.io/docs/image-transformations)
- [ImageKit Quality Parameter](https://imagekit.io/docs/image-transformations#quality-q)

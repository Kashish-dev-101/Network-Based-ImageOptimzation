const BASE_IMAGE =
  "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/pexels-pixabay-532303_-IGCtCUDv.jpg";

const infoEl = document.getElementById("info");
const imgEl = document.getElementById("image");
const imageUrlEl = document.getElementById("imageUrl");

function getQualityFromNetwork() {
  const connection = navigator.connection; // https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
  // console.log(connection);

  if (!connection) {
    return { q: 60, label: "<strong>Network API not supported</strong> → quality: <strong>60</strong>" };
  }

  const type = connection.effectiveType;
  // console.log(type);

  if (type === "slow-2g" || type === "2g") {
    return { q: 40, label: "<strong>Slow network (2G)</strong> → quality: <strong>40</strong>" };
  }

  if (type === "3g") {
    return { q: 55, label: "<strong>Medium network (3G)</strong> → quality: <strong>55</strong>" };
  }

  return { q: 75, label: "<strong>Fast network (4G/WiFi)</strong> → quality: <strong>75</strong>" };
}

function renderImage() {
  const { q, label } = getQualityFromNetwork();

  const optimizedUrl = `${BASE_IMAGE}?tr=q-${q},w-800`;

  infoEl.innerHTML = label;
  imgEl.src = optimizedUrl;
  imageUrlEl.textContent = optimizedUrl;
  imageUrlEl.href = optimizedUrl;
}

renderImage();

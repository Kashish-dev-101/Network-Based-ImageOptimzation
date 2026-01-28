const BASE_IMAGE =
  "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/pexels-pixabay-532303_-IGCtCUDv.jpg";

const infoEl = document.getElementById("info");
const imgEl = document.getElementById("image");

function getQualityFromNetwork() {
  const connection = navigator.connection; // https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
  console.log(connection);

  if (!connection) {
    return { q: 60, label: "Network API not supported → default quality" };
  }

  const type = connection.effectiveType;
  console.log(type);

  if (type === "slow-2g" || type === "2g") {
    return { q: 40, label: "Slow network → q=40" };
  }

  if (type === "3g") {
    return { q: 55, label: "Medium network → q=55" };
  }

  return { q: 75, label: "Fast network → q=75" };
}

function renderImage() {
  const { q, label } = getQualityFromNetwork();

  const optimizedUrl = `${BASE_IMAGE}?tr=q-${q},w-800`;

  infoEl.textContent = label;
  imgEl.src = optimizedUrl;
}

renderImage();

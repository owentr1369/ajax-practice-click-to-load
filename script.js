const loadMore = document.getElementById("load-more");

document.addEventListener("DOMContentLoaded", () => {
  firstLoad();
});
let originalData;
loadMore.onclick = () => {
  console.log("1");
};
async function loadData() {
  await fetch("https://fakestoreapi.com/products/")
    .then((response) => response.json())
    .then((data) => (originalData = data));
}

async function firstLoad() {
  await loadData();
  let firstData = originalData.slice(0, 3);
  console.log(firstData);
}

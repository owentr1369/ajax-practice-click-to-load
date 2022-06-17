const loadMore = document.getElementById("load-more");
const items = document.getElementById("items");
let originalData;
let firstLoadData;

document.addEventListener("DOMContentLoaded", () => {
  loadData();
});

loadMore.onclick = () => {
  console.log("1");
};
async function loadData() {
  await fetch("https://fakestoreapi.com/products/")
    .then((response) => response.json())
    .then((data) => (originalData = data));

  let renderData = originalData.slice(0, 3);
  console.log(renderData);
  function render() {
    const htmls = renderData.map((renderDataItem) => {
      return `<div class="item">
          <h2>${renderDataItem.title}</h2>
          <span>Price: <strong>$${renderDataItem.price}</strong></span>
          <img
            src="${renderDataItem.image}"
            alt=""
          />
          <p>
           ${renderDataItem.description}
          </p>
        </div>`;
    });
    items.innerHTML = htmls.join("");
  }
  render();
}

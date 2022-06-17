const loadMore = document.getElementById("load-more");

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded");
});

loadMore.onclick = () => {
  console.log("1");
};
async function loadData() {
  await fetch("https://fakestoreapi.com/products/")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

loadData();

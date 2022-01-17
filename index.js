const conPromise = () => {
  fetch("https://api.github.com/zen")
    .then((response) => {
      if (response.status === 404) {
        throw new Error("No exixte la direccion");
      } else {
        return response.text();
      }
    })
    .then((data) => {
      const h2 = document.createElement("h2");
      h2.innerText = `"${data}"`;
      document.querySelector("div.container").appendChild(h2);
    })
    .catch((error) => {
      console.error(error);
      const errorItem = document.createElement("p");
      errorItem.textContent = error;
      document.querySelector("div.container").appendChild(errorItem);
    });
};

const conAsync = async () => {
  try {
    const res = await fetch("https://api.github.com/zen");
    if (res.status !== 200) {
      throw new Error("error al consultar la appi");
    }
    const data = await res.text();
    const h2 = document.createElement("h2");
    h2.innerText = `"${data}"`;
    document.querySelector("div.container").appendChild(h2);
  } catch (error) {
    const errorItem = document.createElement("p");
    errorItem.textContent = error;
    document.querySelector("div.container").appendChild(errorItem);
  }
};
function main() {
  // conPromise();
  conAsync();
}

main();

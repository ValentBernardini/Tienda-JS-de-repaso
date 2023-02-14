const shoesData = [
    { name: "zapato1", category: "informal", price: 50 },
    { name: "zapato2", category: "elegante", price: 100 },
    { name: "zapato3", category: "informal", price: 30 },
    { name: "zapato4", category: "elegante", price: 80 },
    { name: "zapato5", category: "informal", price: 40 },
    { name: "zapato6", category: "elegante", price: 120 },
    { name: "zapato7", category: "informal", price: 60 },
    { name: "zapato8", category: "elegante", price: 90 },
    { name: "zapato9", category: "informal", price: 35 },
    { name: "zapato10", category: "elegante", price: 110 },
  ];
  
  const shoesContainer = document.querySelector("#shoes-container");
  const cartItemsList = document.querySelector("#cart-items");
  const shoeTemplate = document.querySelector("#shoe-template");
  
  function renderShoe(shoe) {
    const shoeElement = shoeTemplate.content.cloneNode(true);
    shoeElement.querySelector(".shoe-name").textContent = shoe.name;
    shoeElement.querySelector(".shoe-category").textContent = shoe.category;
    shoeElement.querySelector(".shoe-price").textContent = `$${shoe.price}`;
    shoeElement.querySelector(".add-to-cart").addEventListener("click", () => {
      const item = document.createElement("li");
      item.textContent = shoe.name;
      cartItemsList.appendChild(item);
    });
    shoesContainer.appendChild(shoeElement);
  }
  
  function renderShoes() {
    shoesData.forEach((shoe) => renderShoe(shoe));
  }
  
  function filterShoesByName(searchTerm) {
    shoesContainer.innerHTML = "";
    shoesData
      .filter((shoe) => shoe.name.includes(searchTerm))
      .forEach((shoe) => renderShoe(shoe));
  }
  
  document.querySelector("#search").addEventListener("input", (event) => {
    filterShoesByName(event.target.value);
  });
  
  renderShoes();


 

  
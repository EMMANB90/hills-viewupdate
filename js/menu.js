document.addEventListener("DOMContentLoaded", () => {
  const sheetURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRwLTFBy7eUDnGaC4mAdq4IlX4doDU2ecg1dUQ2zUYSV4d91p1K_ct053LtCGAZI-mtwNihKt-qo3LA/pub?output=csv";

  fetch(sheetURL)
    .then(res => res.text())
    .then(csv => {
      const rows = csv.split("\n").slice(1); // skip header

      const beerList = document.getElementById("beer-list");
      const foodList = document.getElementById("food-list");

      rows.forEach(row => {
        if (!row.trim()) return;

        const [item, name, price] = row.split(",");

        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `
          <div class="content">
            <h3>${name}</h3>
            <p class="price">${price} RWF</p>
          </div>
        `;

        if (item.trim().toLowerCase() === "beer") {
          beerList.appendChild(card);
        } else if (item.trim().toLowerCase() === "food") {
          foodList.appendChild(card);
        }
      });
    })
    .catch(err => {
      console.error("Failed to load menu:", err);
    });
});

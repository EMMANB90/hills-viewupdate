
document.getElementById("whatsappOrderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  const item = document.getElementById("orderItem").value;
  const note = document.getElementById("orderNote").value;

  const message =
    `Hello, I would like to place an order:%0A%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Item: ${item}%0A` +
    `Note: ${note}`;

  window.open(
    `https://wa.me/+250783000457?text=${message}`,
    "_blank"
  );
});


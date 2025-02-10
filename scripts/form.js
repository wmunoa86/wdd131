const products = [
    { id: "fc-1888", name: "Flux Capacitor" },
    { id: "fc-2050", name: "Power Laces" },
    { id: "fs-1987", name: "Time Circuits" },
    { id: "ac-2000", name: "Low Voltage Reactor" },
    { id: "jj-1969", name: "Warp Equalizer" }
];

// Populate product dropdown
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Track number of reviews
    const reviewCount = localStorage.getItem("reviewCount") || 0;
    localStorage.setItem("reviewCount", parseInt(reviewCount) + 1);
});

document.addEventListener("DOMContentLoaded", () => {
    const reviewCountSpan = document.getElementById("reviewCount");
    const reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCountSpan.textContent = reviewCount;
});

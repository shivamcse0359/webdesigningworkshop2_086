document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector(".search-btn");

    searchBtn.addEventListener("click", () => {
        const from = document.querySelector(
            'input[placeholder="City or Airport"]'
        ).value;

        const to = document.querySelectorAll(
            'input[placeholder="City or Airport"]'
        )[1].value;

        if (!from || !to) {
            alert("Please enter both source and destination.");
            return;
        }

        alert(`Searching flights from ${from} to ${to}`);
    });
});
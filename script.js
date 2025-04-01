// Optimized Search Functionality
const searchInput = document.getElementById("inputBox");
const cards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("input", search);
}

function search() {
    if (!searchInput) return;

    const input = searchInput.value.trim().toLowerCase();

    cards.forEach((card) => {
        const titleElement = card.querySelector(".card-title");
        if (titleElement) {
            const title = titleElement.textContent.trim().toLowerCase();
            card.style.display = title.includes(input) ? "block" : "none";
        } else {
            console.warn("Card title not found in card:", card);
        }
    });

    if (!input) {
        cards.forEach((card) => {
            card.style.display = "block";
        });
    }
}

// Follow Us Modal
const followUsBtn = document.getElementById("followUsBtn");
const modal = document.getElementById("followUsModal");
const closeButton = document.getElementsByClassName("close-button")[0];

if (followUsBtn && modal && closeButton) {
    followUsBtn.addEventListener("click", function () {
        modal.style.display = "flex"; // Use flex to center
        document.body.classList.add("modal-open");
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    });

    // Initial Modal Load (if needed, remove if you only want click trigger)
    window.onload = function () {
        // modal.style.display = "flex";
        // document.body.classList.add("modal-open");
    };
} else {
    console.error("One or more modal elements not found.");
}
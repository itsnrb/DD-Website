document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll('.grid-item');
    const minHeight = 300; // Minimum height for each item
    const maxHeight = 500; // Maximum height for each item

    gridItems.forEach(item => {
        // Generate a random height between minHeight and maxHeight
        const randomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
        item.style.height = `${randomHeight}px`; // Apply the height to the item
    });
});
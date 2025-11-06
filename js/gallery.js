// Select filter buttons and gallery items
const filters = document.querySelectorAll('.gallery-filters li');
const galleryItems = document.querySelectorAll('.gallery-item');

// Adding click event to each filter button
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    // Removing 'filter-active' class from all buttons
    filters.forEach((btn) => btn.classList.remove('filter-active'));

    // Adding 'filter-active' class to the clicked button
    filter.classList.add('filter-active');

    // Getting the filter value of the clicked button
    const filterValue = filter.getAttribute('data-filter');

    // Show/hide gallery items based on the filter
    galleryItems.forEach((item) => {
      if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
        item.style.display = 'block'; // Show the item
      } else {
        item.style.display = 'none'; // Hide the item
      }
    });
  });
});

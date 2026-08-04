document.addEventListener("DOMContentLoaded", function () {
  var filters = document.querySelector("[data-resource-filters]");

  if (!filters) {
    return;
  }

  var buttons = Array.from(
    filters.querySelectorAll("[data-resource-filter]")
  );
  var cards = Array.from(document.querySelectorAll("[data-resource-card]"));
  var status = filters.querySelector("[data-resource-filter-status]");

  function updateStatus(visibleCount, filterLabel) {
    var resourceWord = visibleCount === 1 ? "resource" : "resources";

    if (filterLabel === "All resources") {
      status.textContent = "Showing all " + visibleCount + " " + resourceWord + ".";
      return;
    }

    status.textContent =
      "Showing " + visibleCount + " " + resourceWord + " for " + filterLabel + ".";
  }

  function applyFilter(activeButton) {
    var selectedFilter = activeButton.getAttribute("data-resource-filter");
    var visibleCount = 0;

    buttons.forEach(function (button) {
      var isActive = button === activeButton;
      button.setAttribute("aria-pressed", String(isActive));
      button.classList.toggle("is-active", isActive);
    });

    cards.forEach(function (card) {
      var categories = card
        .getAttribute("data-resource-categories")
        .split(/\s+/)
        .filter(Boolean);
      var isVisible =
        selectedFilter === "all" || categories.includes(selectedFilter);

      card.hidden = !isVisible;

      if (isVisible) {
        visibleCount += 1;
      }
    });

    updateStatus(visibleCount, activeButton.textContent.trim());
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyFilter(button);
    });
  });

  applyFilter(buttons[0]);
});

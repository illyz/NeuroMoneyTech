document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = Array.from(document.querySelectorAll("[data-nav-dropdown]"));

  function setDropdownOpen(dropdown, isOpen) {
    var button = dropdown.querySelector(".nav-dropdown__toggle");
    var menu = dropdown.querySelector(".nav-dropdown__menu");

    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute(
      "aria-label",
      (isOpen ? "Hide" : "Show") + " pages under Research"
    );
    menu.hidden = !isOpen;
    dropdown.classList.toggle("is-open", isOpen);
  }

  function closeOtherDropdowns(currentDropdown) {
    dropdowns.forEach(function (dropdown) {
      if (dropdown !== currentDropdown) {
        setDropdownOpen(dropdown, false);
      }
    });
  }

  dropdowns.forEach(function (dropdown) {
    var button = dropdown.querySelector(".nav-dropdown__toggle");

    button.addEventListener("click", function (event) {
      event.stopPropagation();
      var willOpen = button.getAttribute("aria-expanded") !== "true";
      closeOtherDropdowns(dropdown);
      setDropdownOpen(dropdown, willOpen);
    });

    dropdown.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setDropdownOpen(dropdown, false);
        button.focus();
      }
    });
  });

  document.addEventListener("click", function (event) {
    dropdowns.forEach(function (dropdown) {
      if (!dropdown.contains(event.target)) {
        setDropdownOpen(dropdown, false);
      }
    });
  });
});

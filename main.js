document.addEventListener("DOMContentLoaded", function () {
  const searchItems = document.querySelector(".searchItems");
  const bottomMenu = document.querySelector(".bottomMenu");
  const menuItems = document.querySelectorAll(".menuItems");
  const closeButton = document.querySelector(".closeButton");

  function showSearch() {
    const inputField = document.createElement("input");
    inputField.classList.add("searchInput");
    inputField.placeholder = "Minecraft, multiplayer...";

    const searchButton = document.createElement("button");
    searchButton.classList.add("searchButton");
    searchButton.textContent = 'Advance Search';

    searchItems.innerHTML = "";
    searchItems.appendChild(inputField);
    searchItems.appendChild(searchButton);

    for (const menuItem of menuItems) {
      menuItem.style.display = "none";
    }

    closeButton.style.display = "block";

    bottomMenu.style.transition = "background 0.3s";
    bottomMenu.style.background = "none";

    inputField.focus();
  }

  function hideSearch() {
    searchItems.innerHTML = "<i class='fas fa-search'></i> ";

    for (const menuItem of menuItems) {
      menuItem.style.display = "block";
    }

    closeButton.style.display = "none";

    bottomMenu.style.transition = "background 0.3s";
    bottomMenu.style.background = "linear-gradient(304deg, rgba(62, 78, 88, 1) 0%, rgba(11, 22, 29, 1) 97%)";
    bottomMenu.style.gap = "2rem";
  }

  searchItems.addEventListener("click", showSearch);

  closeButton.addEventListener("click", hideSearch);
});

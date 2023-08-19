document.addEventListener("DOMContentLoaded", function () {
  const searchItems = document.querySelector(".searchItems");
  const bottomMenu = document.querySelector(".bottomMenu");
  const menuItems = document.querySelectorAll(".menuItems");
  const closeButton = document.querySelector(".closeButton");

  const originalStyles = {
    background: getComputedStyle(bottomMenu).background,
    gap: getComputedStyle(bottomMenu).gap,
  };

  function toggleSearch(show) {
    searchItems.innerHTML = show
      ? `<input type="text" class="searchInput" placeholder="Minecraft, multiplayer...">
         <button class="searchButton">Advance Search</button>`
      : '<i class="fas fa-search"></i> ';

    menuItems.forEach((menuItem) => (menuItem.style.display = show ? "none" : "block"));
    closeButton.style.display = show ? "block" : "none";

    bottomMenu.style.transition = "background 0.3s";
    bottomMenu.style.background = show ? "none" : originalStyles.background;
    bottomMenu.style.gap = show ? "0" : originalStyles.gap;
    menuItems.forEach((menuItem) => (menuItem.style.display = show ? "none" : "flex"));
    menuItems.forEach((menuItem) => (menuItem.style.gap = show ? "0" : "0.8rem"));
  }

  searchItems.addEventListener("click", () => toggleSearch(true));
  closeButton.addEventListener("click", () => toggleSearch(false));
});
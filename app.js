const app = document.querySelector(".app");
const sidebar = document.querySelector(".sidebar");
const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".closeButton");

hamburgerBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);

function openSidebar() {
  sidebar.classList.add("open");
  app.classList.add("sidebarOpen");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  app.classList.remove("sidebarOpen");
}

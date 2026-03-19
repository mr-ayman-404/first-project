document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");

  fetch("head.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("تعذر تحميل الهيدر");
      }
      return response.text();
    })
    .then((data) => {
      headerContainer.innerHTML = data;
    })
    .catch((error) => {
      console.error("خطأ:", error);
      headerContainer.innerHTML = "<p style='color:red'>تعذر تحميل الهيدر</p>";
    });
});
// فتح القائمة
document.getElementById("toggleSidebar").addEventListener("click", () => {
  document.getElementById("sidebar").classList.add("open");
});

// إغلاق القائمة
document.getElementById("closeSidebar").addEventListener("click", () => {
  document.getElementById("sidebar").classList.remove("open");
});

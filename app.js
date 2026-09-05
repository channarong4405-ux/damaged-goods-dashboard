// สคริปต์กรองข้อมูลค้นหาเบื้องต้น (Simple Search Filter)
const searchInput = document.getElementById('searchInput');
const tableBody = document.getElementById('tableBody');
const rows = tableBody.getElementsByTagName('tr');

searchInput.addEventListener('keyup', function() {
  const filter = searchInput.value.toLowerCase();
  for (let i = 0; i < rows.length; i++) {
    const rowText = rows[i].textContent.toLowerCase();
    if (rowText.includes(filter)) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
});

// Tab filter functionality
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all tabs
    tabBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked tab
    this.classList.add('active');
  });
});
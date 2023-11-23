document.addEventListener("DOMContentLoaded", function () {
  const adminLoginLink = document.getElementById("admin-login");
  const adminLoginForm = document.getElementById("admin-login-form");
  const studentList = document.getElementById("student-list");

  adminLoginLink.addEventListener("click", function (event) {
    event.preventDefault();
    adminLoginForm.style.display = "block";
  });

  // You can add additional logic here, e.g., AJAX to submit the login form and fetch the student list
});

<?php
// Simulated authentication logic, replace with your actual authentication mechanism
$validUsername = "admin";
$validPassword = "admin123";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if ($username === $validUsername && $password === $validPassword) {
        // Authentication successful, fetch and display student list
        $students = array("Student1", "Student2", "Student3"); // Replace with your actual student data

        echo "<h2>Student List:</h2>";
        echo "<ul>";
        foreach ($students as $student) {
            echo "<li>$student</li>";
        }
        echo "</ul>";
    } else {
        // Authentication failed, display an error message
        echo "<p>Invalid username or password. Please try again.</p>";
    }
}
?>

function ValidateForm() {
    var content = document.getElementById("content").value.trim();
    if (content === "") {
        alert("Task content cannot be empty.");
        return false;  // Prevent form submission
    }
    return true; // Allow submission
}
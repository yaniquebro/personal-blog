const form = document.getElementById('form');
const username = document.getElementById('username');
const title = document.getElementById('post-title');
const content = document.getElementById('post-content');

// Function to save blog post to local storage
function saveBlogPost() {
    const blogHistory = JSON.parse(localStorage.getItem("blogPost")) || [];

    // Create new blog post object
    const blogPost = {
        username: username.value,
        title: title.value,
        content: content.value.trim()
    };

    // Add new blog post at the beginning of the list
    blogHistory.unshift(blogPost);

    localStorage.setItem('blogPost', JSON.stringify(blogHistory));

    return blogPost;
}

// Function to validate form fields
function validateForm() {
    if (username.value.trim() === '' || title.value.trim() === '' || content.value.trim() === '') {
        alert('Please fill out all fields.');
        return false; // Returning false prevents form submission
    }

    return true; // Return true if all fields are filled
}

// Add event listener to submit form
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Check if form is valid before saving blog post
    if (validateForm()) {
        const blogPost = saveBlogPost();
        window.location.href = 'blog.html';
    }
});
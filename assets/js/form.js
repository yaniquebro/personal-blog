function addToSeries (e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const postTitle = document.getElementById("post-title").value.trim();
    const postContent = document.getElementById("blog-post").value.trim();

    let blogPost = {
        username: username,
        title: postTitle,
        content: postContent
    }
    console.log(blogPost)

    if(localStorage.getItem('blogEntries') == null) {
        localStorage.setItem('blogEntries', '[]');
    }    

    const allEntries = JSON.parse(localStorage.getItem('blogEntries'));
    
    allEntries.push(blogPost);
    console.log(`updated array: ${allEntries}`)

    localStorage.setItem('blogEntries', JSON.stringify(allEntries));

    window.location.href = './blog.html';
}

document.getElementById(`submit`).addEventListener("click", addToSeries)
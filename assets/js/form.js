// function addToSeries (e) {

//     e.preventDefault();

//     const username = document.getElementById("username").value.trim();
//     const postTitle = document.getElementById("post-title").value.trim();
//     const postContent = document.getElementById("blog-post").value.trim();

//     let blogPost = {
//         username: username,
//         title: postTitle,
//         content: postContent
//     }
//     console.log(blogPost)

//     if(localStorage.getItem('blogEntries') == null) {
//         localStorage.setItem('blogEntries', '[]');
//     }    

//     const allEntries = JSON.parse(localStorage.getItem('blogEntries'));
    
//     allEntries.push(blogPost);
//     console.log(`updated array: ${allEntries}`)

//     localStorage.setItem('blogEntries', JSON.stringify(allEntries));

//     window.location.href = './blog.html';
// }

// document.getElementById('submit').addEventListener("click", addToSeries)




function storeInput() {
    const blogPost = [];
    let posts = JSON.parse(localStorage.getItem('post'));
    if (posts === null) {
         posts = [];
    };
    if (posts.length > 4) {
         posts.length = 0;
    }
    var username = document.getElementById('username').value;
    var title = document.getElementById('post-title').value;
    var content = document.getElementById('post-content').value;
    const newPost = [username, title, content]
    if (posts === null) {
         blogPost.push(newPost);
         localStorage.setItem('post',JSON.stringify(blogPost));
    }
    else {
         posts.push(newPost);
         localStorage.setItem("post", JSON.stringify(posts));   
    }
    if (username !== '' && title !== '' && content !== '') {
         window.location.assign('blog.html')
    } else {
         alert("Please enter your Username, Title, and Content to proceed")
    }

}
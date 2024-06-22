const blogTitle = document.querySelector(".post-title")
const blogContent = document.querySelector(".post-content")
const postedBy = document.querySelector(".username")
const blogSection = document.querySelector("#blog-entries")


// Gets the user information from local storage 
function displayFormInfo(){

    const displayInfo = JSON.parse(localStorage.getItem("userInfo"))

    console.log(displayInfo)

    displayInfo.forEach(index => {

        // Displays the informattion from each item in the array in local storage
        blogSection.innerHTML += `
        <section>
        <h3 class="blog-title-1">${index.userTitle}</h3>
        <p class="content">${index.userContent}</p>
        <p class="posted-by">Posted By: ${index.user}</p>
        </section>
        `
    });
}


displayFormInfo();
// Retrieve the selected post data from localStorage
const post = JSON.parse(localStorage.getItem('selectedPost'));

// Set the post details in the DOM
document.getElementById('post-title').innerText = post.title;
document.getElementById('post-summary').innerText = post.summary;
document.getElementById('post-content').innerHTML = post.content;

// Initialize the like count
let likeCount = 0;
document.getElementById('like-button').addEventListener('click', function() {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
});

// Initialize the comments
const commentsContainer = document.getElementById('comments-container');
const comments = [];

// Add comment functionality
document.getElementById('add-comment-button').addEventListener('click', function() {
    const commentText = document.getElementById('comment-input').value;
    if (commentText) {
        comments.push(commentText);
        document.getElementById('comment-input').value = '';
        renderComments();
    }
});

// Function to render comments
function renderComments() {
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.innerText = comment;
        commentsContainer.appendChild(commentDiv);
    });
}

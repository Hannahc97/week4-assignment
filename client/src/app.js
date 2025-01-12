// The main purpose is to handle the data from the form 

// Select the form from the dom 
const guestbookForm = document.getElementById("guestbook-form");
const commentsContainer = document.getElementById("comments-container");

// We need to build an event that handles the data from the form
// event handler
// event listener 
function handleSubmitGuestbookForm (event){
  event.preventDefault();
  const formData = new FormData(guestbookForm);
  const formValues = Object.fromEntries(formData); //extracting the values from that form data

// The server url should be your local host while you are developing 
//! When you finish you should replace it with your RENDER server url 
  fetch("https://week4-assignment-w63z.onrender.com/new-data", { //the client is trying to send a POST request to the /new-data route on the backend server 
    method: "POST",
    headers: {"Content-type": "application/json",},
    body: JSON.stringify({formValues})
  });
  setTimeout( () => {
    alert("Message submitted!")})

  console.log(formValues) 
}
guestbookForm.addEventListener("submit", handleSubmitGuestbookForm);


// The same way as we fetch the POST route, we also need to fetch the GET route, so we can display the data from the database on the DOM 

async function viewGuestbook (){
  const response = await fetch("https://week4-assignment-w63z.onrender.com/comments")
  const data = await response.json()
  data.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.className = "comment";
    
    const userName = document.createElement("p");
    const userFrom = document.createElement("p");
    const userRating = document.createElement("p");
    const userComment = document.createElement("p");
    
    userName.textContent = `Name 😊: ${comment.guest_name}`;
    userFrom.textContent = `Vacationing from 🏠: ${comment.guest_from}`;
    userRating.textContent = `Rating ⭐️: ${comment.rating}/5`;
    userComment.textContent = `Comment 🗒️: ${comment.comment}`;

    commentElement.appendChild(userName);
    commentElement.appendChild(userFrom);
    commentElement.appendChild(userRating);
    commentElement.appendChild(userComment);
    commentsContainer.appendChild(commentElement);
    commentsContainer.appendChild(commentElement)
  })
}
viewGuestbook()
// document.addEventListener("DOMContentLoaded", viewGuestbook);
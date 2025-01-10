// The main purpose is to handle the data from the form 

// Select the form from the dom 
const guestbookForm = document.getElementById("guestbook-form");

// We need to build an event that handles the data from the form
// event handler
// event listener 
function handleSubmitGuestbookForm (event){
  event.preventDefault();
  const formData = new FormData(guestbookForm);
  const formValues = Object.fromEntries(formData); //extracting the values from that form data

// The server url should be your local host while you are developing 
//! When you finish you should replace it with your RENDER server url 
    fetch("http://localhost:4000/new-data", { //the client is trying to send a POST request to the /new-data route on the backend server 
      method: "POST",
      headers: {"Content-type": "application/json",},
      body: JSON.stringify({formValues})
    });
  console.log(formValues) 
  viewGuestbook()
}

guestbookForm.addEventListener("submit", handleSubmitGuestbookForm);


// The same way as we fetch the POST route, we also need to fetch the GET route, so we can display the data from the database on the DOM 
async function viewGuestbook (){
  const response = await fetch("http://localhost:4000/comments")
  const data = await response.json()
  const commentsContainer = document.getElementById("comments-container");
  data.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.className = "comment";
    commentElement.innerHTML = `
    <p> Name: ${comment.guest_name} </p>
    <p> Vacationing from: ${comment.guest_from} </p>
    <p> Rating: ${comment.rating}/5 </p>
    <p> Comment: ${comment.comment} </p>` 
    commentsContainer.appendChild(commentElement)
  })
}
document.addEventListener("DOMContentLoaded", viewGuestbook);

document.addEventListener("DOMContentLoaded", viewGuestbook);
// The main purpose is to handle the data from the form 

// Select the form from the dom 
const guestbookForm = document.getElementById("guestbook-form");
const commentsContainer = document.getElementById("comments-container");

// Function to create a comment element 
function createComment (comment) {
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
  // commentsContainer.appendChild(commentElement);
  // commentsContainer.appendChild(commentElement)
  
  return commentElement

}

// We need to build an event that handles the data from the form
// event handler
// event listener 
async function handleSubmitGuestbookForm (event){
  event.preventDefault();
  const formData = new FormData(guestbookForm);
  const formValues = Object.fromEntries(formData); //extracting the values from that form data
  console.log(formValues)


  try {
    // The server url should be your local host while you are developing 
    //! When you finish you should replace it with your RENDER server url 
    const response = await fetch("https://week4-assignment-w63z.onrender.com/new-data", { //the client is trying to send a POST request to the /new-data route on the backend server 
      method: "POST",
      headers: {"Content-type": "application/json",},
      body: JSON.stringify({formValues})
    });

    if (response.ok){
      // Create the new comment object with the same structure as database data
      const newComment = {
        guest_name: formValues.name,
        guest_from: formValues.origin,
        rating: formValues.rating,
        comment: formValues.comment,
      }

      // Add the new comment to the top of the comments container
      const newCommentElement = createComment(newComment)
      commentsContainer.insertBefore(newCommentElement, commentsContainer.firstChild)


      // Clear the form
      guestbookForm.reset()

      alert("Message submitted!")

    } else{
      alert("Error submitting message. Please try again.")
    }

  }
  catch (error) {
    console.error("Error:", error)
    alert("Error submitting message please try again")

  }

}
guestbookForm.addEventListener("submit", handleSubmitGuestbookForm);

// https://week4-assignment-w63z.onrender.com/new-data


// The same way as we fetch the POST route, we also need to fetch the GET route, so we can display the data from the database on the DOM 

// Load existing comments when page loads
async function viewGuestbook (){

  try{
      const response = await fetch("https://week4-assignment-w63z.onrender.com/comments")
      const data = await response.json()

      data.forEach((comment) => {
        const commentElement = createComment(comment)
        commentsContainer.appendChild(commentElement)
        // commentsContainer.insertBefore(commentElement, commentsContainer.firstChild)
      })
  }
  catch (error) {
    console.error(error)
  }
}

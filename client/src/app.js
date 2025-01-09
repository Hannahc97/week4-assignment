// The main purpose is to handle the data from the form 

// Select the form from the dom 

// We need to build an event that handles the data from the form
// event handler
// event listener 

// The server url should be your local host while you are developing 
//! When you finish you should replace it with your RENDER server url 

fetch("server url", {
  method: "POST",
  header: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({formValues})
});

// The same way as we fetch the POST route, we also need to fetch the GET route, so we can display the data from the database on the DOM 


//start with db as recommended by manny 
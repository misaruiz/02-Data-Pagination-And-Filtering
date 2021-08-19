/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page){
   var startIndex = (page * 9) - 9;
   var endIndex = page * 9;
   const studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = '';
   for (i=0;i<list.length;i++){
      if(i>=startIndex && i<endIndex){
         const studentItem = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${data[i].picture.thumbnail}" alt="Profile Picture">
               <h3>${data[i].name.first} ${data[i].name.last}</h3>
               <span class="email">${data[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${data[i].registered.date}</span>
            </div>
         </li>
         `;
         studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   // create a variable to calculate the number of pages needed
 
   // select the element with a class of `link-list` and assign it to a variable
 
   // set the innerHTML property of the variable you just created to an empty string
 
   // loop over the number of pages needed
     // create the elements needed to display the pagination button
     // insert the above elements
 
   // give the first pagination button a class of "active"
 
   // create an event listener on the `link-list` element
     // if the click target is a button:
       // remove the "active" class from the previous button
       // add the active class to the clicked button
       // call the showPage function passing the `list` parameter and page to display as arguments
 }

// Call functions
showPage(data, 1 );
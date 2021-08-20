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
   // this makes groups of 9 students per page
   var startIndex = (page * 9) - 9;
   var endIndex = page * 9;
   const studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = '';
   // this loops through each student in the data script and creates a list item with all the student details
   for (i=0;i<list.length;i++){
      // this checks which students are within the startIndex and endIndex range and list them only, list will change with pagination
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
};


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   // this determains the amount of pages, thus the amount of pagination buttons
   let numOfPages = Math.ceil(list.length/9);
   const linkList = document.querySelector('ul.link-list');
   linkList.innerHTML = '';
   // this loops through the amount of pages determined above and creates a button with the page number
   for (i=1;i<=numOfPages;i++){
      let button = `<li><button type="button">${i}</button></li>`;
      linkList.insertAdjacentHTML('beforeend', button);
      var activeButton =  document.querySelector('button');
      activeButton.className = 'active';
      // this eventListerner waits for a click and executes a function only if it is a button
      linkList.addEventListener("click", (e) => {
         if (e.target.tagName === 'BUTTON') {
            // this looks for the active button and removes the active class
            var deactiveButton = document.querySelector('.active');
            deactiveButton.className = '';
            // this adds the active class to button that was clicked (there has to be a way to know if the button clicked is already active so it doesn't remove active class and then add it again)
            e.target.className = 'active';
            // when a button is clicked this executes the showPage function again with the new target page number
            showPage(data, e.target.textContent);
         };
      });
   };
 };

 //this calls both functions on page load
addPagination(data);
showPage(data, 1);
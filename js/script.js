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
   var numOfPages = Math.ceil(list.length / 9)
   var linkList = document.querySelector('ul.link-list');
   linkList.innerHTML = '';
   for (i=1;i<=numOfPages.length;i++){
      const button = `
      <li>
         <button type="button">${i}</button>
      </li>`;

      linkList.insertAdjacentHTML('beforeend', button); 
      document.querySelector('.button:first').className = 'active';
      link-list.addEventListener("click", (e) => {
         if (e.target.tagName === 'BUTTON') {
            document.querySelector('.active').className = '';
            showPage(data, e.target.textCOntent);
         }
      });
      };
 };

// Call functions
addPagination(data);
showPage(data, 1);
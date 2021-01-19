# techstep_takehome
Welcome to the Techstep takehome assessment. This assessment will test upon your fullstack development skills. The stack that we use is **ReactJS** (with a GatsbyJS framework), **ExpressJS**, **NodeJS**, and **MySQL** as the database. 

For this assessment we are going to have you add functionality to a button that leads to a new page, and on this page we would like you to implement a simple search bar. This can be done however you like. On search, the data to be filtered on must be retrieved from the database (which has already been setup). 

Parts of the assessment:
- Creating a new page and linking the button on the home page to your new page.
- Add styling and a search bar to your page.
- The search bar should retrieve data when someone searches a name.
- Pull data from table 'users'. You can do this by creating a backend route and calling it, or however else you'd like.
- The search bar should just have a simple filter that only returns the names that have the search term in it.
- Display the returned names and attributes however you would like. Feel free to play arround with styled components if you'd like.
- Create a Pull Request on Github once you are done.

To be able to do this, you may have to write backend route(s) that will retrieve data from the database and perform filter operations based on the search. You may also take advantage of any componet libraries such as Ant Design or Bootstrap to get compenets such as search bars or layouts. Also keep in mind good coding practices like commenting, committing when needed, etc.

The database should already be connected in the backend folder of this repo. To access the DB, you can write routes in the backend that you use from your React App. The DB table you will need is called **'users'** which is inside the **'content_db'** database, so looking inside the 'content_db.users' table might be helpful. This table has a column called **'name'** which will be used for filtering with the search word that a user might input. The other columns include **'email'** (string), **'age'** (integer), **'location'** (string), and **'is_registered'** (boolean). This information will need to be displayed on your page however you would like. Feel free to show us any interesting styling techniques you may have learned!

# Getting Started

1) To get started, please create a fork of this repository and clone the forked repository onto your local machine and navigate into the frontend folder and run the command:  
`yarn install` 

2) Once all the dependencies in the frontend folder are installed, navigate to the backend folder and once inside this directory, run the command:  
`npm install`  
You should now have all the dependencies to get this assessment started. Now there are two ways to get the barebones of this assessment up and running.  
  
3) To get the barebones of the assessment p and running: open up two terminal windows, one that is inside the frontend directory and the other that is inside the backend directory. 

4) Once you have them open, in the frontend directory, run the command:  
`yarn start`  

5) In the backend directory, run the command:  
`node server`  
(Running node server will not hot reload the server on changes to any of the backend files, please install nodemon if needed)  
6) To check the frontend app, open up your browser of choice and proceed to  
`http://localhost:3000`  
and in here, you should see the frontend app. To check if your backend server is up and running properly, there should be a logged response in the terminal window that the server is listening.  
  
*A second way to get the application up is to utilize the concurrently node module. This module lets you run the frontend and the backend in one command. If you are going to go this route, we recommend installing nodemon as well. This is not required at all, but if you are familiar with it, you can take this route.*
  
With the setup now complete, we can proceed to the assessment itself. You are free to go about these tasks in any order you wish. 
* The button on the main page needs functionality added.  
  * On click of this button, it is to go to the new page that holds the search bar that you are going to have to create  
* You will need to add functionality to this search bar to be able to perform searches  
  * The search functionality will most likely be in the form of an API call with the search data that triggers a route in the backend.  
* Backend route to handle the search, retrieve data from the database, and send it to the frontend  
  * How you handle the filtering of this data is up to you. Our database is MySQL so try creating a simple SQL query to filter with the search term. No need to make this filtering too complex.  
* Display the search results on your page with some fun styling of your choice!  

You are free to use any modules/libraries you wish to complete this assessment. In order to install your dependencies as needed, in the frontend directory, run the command:  

`yarn add <module/library>`  

In the backend directory, run the command:  

`npm install <module/library>`  

  
We realize that there are many ways to go about completing this assessment, please proceed with how you believe is the best way. Good commenting of code is welcomed and proper coding practices are a must. Even though you are not timed, this assessment should not take you more than 2-3 hours, but feel free to use utilize more time if needed.  

Some tools that might be helpful:
- Ant Design or Bootsrap for components and layouts
- Axios to make the backend call
  
Once you have finished the assessment, push your code to the repo and create a pull request, and then it should be awaiting review. We are only going to be checking the commit of the pull request and nothing before that, so feel free to push your code as many times as needed and please only create one pull request. Once created, do not close it and reopen it again. 

If you have any questions, please feel free to reach out to joaquin@techstep.com. 

:)

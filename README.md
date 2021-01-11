# techstep_takehome
Welcome to the Techstep takehome assessment. This assessment will test upon your fullstack development skills. The stack that we use is ReactJS (with a GatsbyJS framework), ExpressJS, NodeJS, and MySQL as the database. For this assessment we are going to have you add functionality to a button that leads to a new page, and on this page we would like you to implement a simple search bar. This can be done however you like. On search, the data to be filtered on must be retrieved from the database (which has already been setup). To be able to do this, you are going to have to write backend route(s) that will retrieve data from the database and perform filter operations based on the search. To get started, please create a fork of this repository and clone the forked repository onto your local machine and navigate into the frontend folder and run the command:  
`yarn install`  
Once all the dependencies in the frontend folder are installed, navigate to the backend folder and once inside this directory, run the command:  
`npm install`  
You should now have all the dependencies to get this assessment started. Now there are two ways to get the barebones of this assessment up and running.  
  
The first way is to open up two terminal windows, one that is inside the frontend directory and the other that is inside the backend directory. Once you have them open, in the frontend directory, run the command:  
`yarn start`  
In the backend directory, run the command:  
`node server`  
(Running node server will not hot reload the server on changes to any of the backend files, please install nodemon if needed)  
To check the frontend app, open up your browser of choice and proceed to  
`http://localhost:3000`  
and in here, you should see the frontend app. To check if your backend server is up and running properly, there should be a logged response in the terminal window that the server is listening.  
  
The second way(bonus points if you can do this), is to utilize the concurrently node module. This module lets you run the frontend and the backend in one command. If you are going to go this route, we recommend installing nodemon as well.  
  
With the setup now complete, we can proceed to the assessment itself. You are free to go about these tasks in any order you wish. 
* The button on the main page needs functionality added.  
  * On click of this button, it is to go to the new page that holds the search bar that you are going to have to create  
* You will need to add functionality to this search bar to be able to perform searches  
  * The search functionality must be in the form of an API call with the search data that triggers a route in the backend.  
* Backend route to handle the search, retrieve data from the database, and send it to the frontend  
  * How you handle the filtering of this data is up to you.  
* Display the search results on your page with some fun styling of your choice!  

You are free to use any modules/libraries you wish to complete this assessment. In order to install your dependencies as needed, in the frontend directory, run the command:  
`yarn add <module/library>`  
In the backend directory, run the command:  
`npm install <module/library>`  
  
We realize that there are many ways to go about completing this assessment, please proceed with how you believe is the best way. Good commenting of code is welcomed and proper coding practices are a must. Even though you are not timed, this assessment should not take you more than 2-3 hours, but feel free to use utilize more time if needed.  
  
Once you have finished the assessment, push your code to the repo and create a pull request. DO NOT MERGE THE PULL REQUEST. We are only going to be checking the commit of the pull request and nothing before that, so feel free to push your code as many times as needed and please only create one pull request. Once created, do not close it and reopen it again. 

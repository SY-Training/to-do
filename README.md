The scope of this project is to create a To-Do application.
The app will follow a 'project > tasks' format.
This means an overall project title will be create, where in tasks can be set. 

|--Project 1
   |--- task
   |--- task
   |--- task
 
|--Project 2
   |--- task
   |--- task

Tasks can be checked off, edited or deleted. 
I will also try to add an option to change a tasks colour. 

Each project will have a title, description, due date and a priority. 
As an extra, possibly notes.

Files will be split into seperate modules based on their functions. Such as DOM maniplulation, creating to-do or setting to-tos as complete. 

UI should be able to do the following:

Upon opening, display a projects page. 
Be able to open a project and see the tasks for it.
Expand a single to do to see and edit its details.
Delete a task.

Use of localStorage to save files. 
*Make sure app doesn't crash if the data the user is trying to retrieve isn't there!


Use of date-fns for formatting dates. 
https://github.com/date-fns/date-fns
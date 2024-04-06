**Loop-Based Interactive Task List**

This is a program to receive input from the user and adds it to an string array, the input can be anything.

**Features:**
1. Add a task
2. Update an exisiting task
3. Remove an entry from the todo list
4. View entire task list
5. Exit to end the program

Run using cmd with npx and enjoy..

v 1.2.1
There was an indexing issue in the update function, the updated task was placed in the last of the arrage.
This issue is now fixed, the update task will stay on the same index in the array.

v 1.3.2
Fixed a bug that causes updated item to added at the end of array index.
Confirmation for end the code is added, now it will ask yes/no confirmation before exiting the program, if entered "No" the program will not end and menu will reappear.
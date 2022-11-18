# foodSnitch
A user based fullstack web application that allows login and personal saved recipes.

Users can view recipes that are populated from a seeded database and pick and choose which recipes to add to thier own personal list. Users also have the ability to add and modify thier own recipes for a convient way to store great recipes that are available at anytime.
**Link to project:** https://foodsnitch.herokuapp.com/

![alt tag](https://foodsnitch.herokuapp.com/)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, MongoDB, Express

Full CRUD is ustilized in app. Each page is comprosed of react components and uses app context where it makes sense. Most states where set by context and a few function that were more globally used. The database was seeded using Mongo Atlas and node. Each page diplays object from database using arrays methods such as Map and Filter using react states. Auth was done by creating models of users and setting cookies and sessions. Personal recipes were done by references User and Recipe models.

## Optimizations
Search bar using Filter and a deep clone to be able to iterate through the list of recipes for easier access to favorites. Google Login with gapi auth to make everything feel a little more comfortable and ease of use.



## Lessons Learned:

Auth is really a straight forward process. Once everything is set up correctly, the app can be used and redirected accordingly. A good user flow is important to avoid confusion. The app should be simple, yet useful and efficient. 

## Other Repos
https://github.com/LeviMilli/Codewars
https://github.com/LeviMilli/Crypto-Wallet-project
https://github.com/LeviMilli/mewtwo-game



# finalProject

A 90's inspired journal application using the Spotify API, Mongo, Express, React/Hooks, and Firebase.

A brief summary: Login with Firebase Authentication, then you are taken to the home screen. 

**On the home screen:** 
    
   **Left Window**
1. Queries Spotify for songs matching the word you've submitted, the below populates with the Album artwork, Artist, Songtitle, link to the Spotify page pertaining to the song, and a preview url that you can click to generate a boombox modal for a breif preview of the song.

  **Right Window**
1. Navigation are the two Archive/Journal buttons at the bottom of the window.  
  
2. Loads with any saved journal entries as image file buttons, upon click, they generate a notepad modal with the title of your entry, the date created, the body of the notepad containing the actual body of the journal entry, and a delete button to remove the entry document from the collection. The notepad modal is a jsx/modal integrated version of this [codepen](https://codepen.io/sadcry/pen/WGqpKx)

3. Journal entry - A sticky note [codepen](https://codepen.io/edmondko/pen/udcHG) repurposed for the user to submit a journal entry with a body and a title, submitted to their collection.


**Disclaimer**
Over the course of this project we went through several scrapped ideas leaving us with very little time to meet the deadline. With about a week and a half left, we decided to have fun with it and created this "ironic ugly" old Window's Franken-App using scraps of previous projects and homeworks. The application was not built with mobile responsiveness in mind and may have drastic differences on different screen sizes.

This is a copy repo due to deployment issues but the original can be found [here](https://github.com/cptaylor38/finalProject).

Other collaborators were: 
  
[Paul Baron](https://github.com/pbaron90) - Css
[Manzell Hatten](https://github.com/manhatten331) - Firebase/Authentication
[Lauren Carroll](https://github.com/ashlaurencarroll) - Css/Theme



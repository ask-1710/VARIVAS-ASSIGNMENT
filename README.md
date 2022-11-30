# VarivasAssign

## Dependencies
- Backend: 
- - express, cors, nodemon, dotenv
- Frontend:
- - angular, @angular/material, @angular/router, HttpClient

## To run
In root folder, use  **ng serve** to run the frontend

Inside server, use **nodemon** to run backend

## Design choices & Thought-process
- Stored the url of video and image for each movie in mongodb. Storing the video in cloud to render is a tedious task compared to using a link

- Designed 3 different components in the frontend. One component for displaying movie thumbnails alone in grid fashion, the second is a bottom sheet component that displays the chosen movie details and third is specifically for rendring the trailer and a detailed description of the chosen movie.

- API design is as follows

- -  /api/v1/movies, root directory that returns all movies to display in the dashboard component
            
- - /api/v1/movie/:movieid that returns details about the movie by id

- Database design - Collection **movie** storing each document with parameters, title, description, trailer and thumbnail along with mongodbID

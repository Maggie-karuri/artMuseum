 Art Museum Project

Welcome to the Art Museum project! This project aims to create a digital platform for art enthusiasts to explore various artworks and artists.

## Description

The Art Museum project is developed as part of the phase-1 completion assignments with CodeGrade. It allows users to browse through a collection of artworks, view details about each artwork, and learn about the artists behind them.

The project is built using JavaScript, HTML, and CSS. It utilizes a JSON file to store information about artworks, including their titles, artists, mediums, descriptions, and other relevant details.

## Features

- Browse artworks by category or artist.
- View detailed information about each artwork, including its title, artist, medium, and description.
- Search for artworks by title or artist.
- Add artworks to favorites for quick access.
- ...

## JSON File

The `db.json` file contains a collection of artworks and their details in JSON format. It contains a collection of artworks under the key "art", structured as an array of objects. Each object within this array represents a distinct artwork and includes essential attributes for identification and description. These attributes consist of an "id" for unique identification, a "name" denoting the artwork's title, an "artist" field indicating the creator's name, a "description" providing a concise summary of the artwork, a "year" denoting the creation year, and a "url" specifying the location of an image depicting the artwork. The diverse values assigned to these attributes within each artwork object collectively furnish comprehensive information pertaining to each piece, facilitating seamless retrieval and display of artwork details within various applications or platforms.

## Technologies Used

- HTML
- CSS
- Javascript

## Installation

To run the Art Museum project locally, follow these steps:

1. Clone the repository to your local machine:
   ```git clone <repository_url>```
2. Install JSON server globally on terminal:
    ```npm install -g json-server```
3. Start the json-server to access db.json data:
    ``` json-server --watch db.json```

###Improvements Needed
Access to more data when: 'home', 'events', 'about, and 'search' are clicked.


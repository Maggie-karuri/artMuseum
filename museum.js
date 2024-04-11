const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("input#searchByID");
  
      // Fetch data from the JSON file
      fetch("artworks.json") // Assuming artworks.json is in the same directory
        .then((response) => response.json())
        .then((data) => {
          // Find the artwork with the given ID
          const artwork = data.find((artwork) => artwork.id === parseInt(input.value));
  
          if (artwork) {
            // Display the artwork details
            const title = document.querySelector("section#artworkDetails h4");
            const artist = document.querySelector("section#artworkDetails p.artist");
            const description = document.querySelector("section#artworkDetails p.description");
  
            title.innerText = artwork.name;
            artist.innerText = `Artist: ${artwork.artist}`;
            description.innerText = `Description: ${artwork.description}`;
          } else {
            // Handle the case where artwork is not found
            alert("Artwork not found!");
          }
        })
        .catch((error) => {
          // Handle errors if any
          console.error("Error fetching artwork data:", error);
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  
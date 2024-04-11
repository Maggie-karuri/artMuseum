// Waiting for the document content to load before executing the code
document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch data from the server
    function fetchData() {
        return fetch("http://localhost:3000/art")
            .then(response => {
                // Handling network errors
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .catch(error => {
                // Logging and handling fetch errors
                console.error("Error fetching data:", error);
                return [];
            });
    }

    // Function to search for artwork based on a keyword
    function searchArt(keyword) {
        fetchData().then(data => {
            // Checking if data is in valid format
            if (!Array.isArray(data)) {
                console.error("Invalid data format:", data);
                return;
            }

            // Filtering data based on keyword
            const results = data.filter(item =>
                item.name && item.name.toLowerCase().includes(keyword.toLowerCase()) ||
                item.description && item.description.toLowerCase().includes(keyword.toLowerCase()) ||
                item.artist && item.artist.toLowerCase().includes(keyword.toLowerCase())
            );
            // Displaying search results
            displayResults(results);
        });
    }

    // Function to display search results
    function displayResults(results) {
        const outputDiv = document.getElementById("searchResults");
        outputDiv.innerHTML = "";

        // Looping through results and creating HTML elements to display them
        results.forEach(result => {
            const resultDiv = document.createElement("div");
            resultDiv.classList.add("artwork");

            const image = document.createElement("img");
            image.src = result.url; // Update property name to 'url'
            image.alt = result.name; // Assuming 'name' is the title of the artwork
            resultDiv.appendChild(image);

            const title = document.createElement("h3");
            title.textContent = result.name;
            resultDiv.appendChild(title);

            const description = document.createElement("p");
            description.textContent = result.description;
            resultDiv.appendChild(description);

            const artist = document.createElement("p");
            artist.textContent = "Artist: " + result.artist;
            resultDiv.appendChild(artist);

            const year = document.createElement("p");
            year.textContent = "Year: " + result.year;
            resultDiv.appendChild(year);

            outputDiv.appendChild(resultDiv);
        });
    }

    // Listening for form submission to initiate search
    const searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById("searchInput").value;
        searchArt(searchTerm);
    });

    // Listening for toggle button click event
    const toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", function() {
        const searchResults = document.getElementById("searchResults");
        searchResults.classList.toggle("show");
        toggleAnimation();

        // Displaying all artwork details when toggle button is clicked
        if (searchResults.classList.contains("show")) {
            displayAllArt();
        } else {
            const outputDiv = document.getElementById("searchResults");
            outputDiv.innerHTML = ""; // Clear previous results when toggling off
        }
    });

    // Function to display all artwork details
    function displayAllArt() {
        fetchData().then(data => {
            // Checking if data is in valid format
            if (!Array.isArray(data)) {
                console.error("Invalid data format:", data);
                return;
            }

            // Displaying all artwork details
            displayResults(data);
        });
    }

    // Function to toggle animation
    function toggleAnimation() {
        const scrollContainer = document.getElementById("scroll-container");
        scrollContainer.classList.toggle("animate");
    }
    });
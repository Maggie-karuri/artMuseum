document.addEventListener("DOMContentLoaded", function() {
    function fetchData() {
        return fetch("http://localhost:3000/art")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                return [];
            });
    }

    function searchArt(keyword) {
        fetchData().then(data => {
            if (!Array.isArray(data)) {
                console.error("Invalid data format:", data);
                return;
            }

            const results = data.filter(item =>
                item.name && item.name.toLowerCase().includes(keyword.toLowerCase()) ||
                item.description && item.description.toLowerCase().includes(keyword.toLowerCase()) ||
                item.artist && item.artist.toLowerCase().includes(keyword.toLowerCase())
            );
            displayResults(results);
        });
    }

    function displayResults(results) {
        const outputDiv = document.getElementById("searchResults");
        outputDiv.innerHTML = "";

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

    const searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById("searchInput").value;
        searchArt(searchTerm);
    });

    const toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", function() {
        const searchResults = document.getElementById("searchResults");
        searchResults.classList.toggle("show");
        toggleAnimation();

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
            if (!Array.isArray(data)) {
                console.error("Invalid data format:", data);
                return;
            }

            displayResults(data);
        });
    }

    function toggleAnimation() {
        const scrollContainer = document.getElementById("scroll-container");
        scrollContainer.classList.toggle("animate");
    }
});

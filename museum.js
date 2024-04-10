// Function to toggle animation
function toggleAnimation() {
    var scrollText = document.getElementById("scroll-text");
    scrollText.classList.toggle("stopped");
}

// Import Axios library
const axios = require("axios");

// Function to print open access results
async function printOpenAccessResults(keyword, skip, limit) {
    const url = "https://openaccess-api.clevelandart.org/api/artworks";
    const params = {
        q: keyword,
        skip: skip,
        limit: limit,
        has_image: 1
    };

    try {
        const resp = await axios.get(url, { params });
        for (const artwork of resp.data.data) {
            const tombstone = artwork.tombstone;
            const image = artwork.images.web.url;
            console.log(`${tombstone}\n${image}\n---`);
        }
    } catch (error) {
        console.log("ERROR getting artwork data");
        console.log(error);
    }
}

// Call the function to print open access results
printOpenAccessResults("monet", 0, 10);

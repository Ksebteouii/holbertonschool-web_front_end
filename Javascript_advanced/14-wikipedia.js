function createElement(data) {
    const paragraph = document.createElement('p'); // Create a paragraph element
    paragraph.textContent = data; // Set the content of the paragraph
    document.body.appendChild(paragraph); // Append the paragraph to the document body
}

// Function to query Wikipedia
function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhr.open('GET', url, true); // Initialize the request
    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText); // Parse the JSON response
            const page = response.query.pages; // Get the pages from the response
            const pageId = Object.keys(page)[0]; // Get the first page ID
            const extract = page[pageId].extract; // Get the extract of the article
            callback(extract); // Call the callback function with the extract
        } else {
            console.error('Error fetching data from Wikipedia:', xhr.statusText); // Log error if any
        }
    };
    xhr.onerror = function() {
        console.error('Request error'); // Log request error
    };
    xhr.send(); // Send the request
}

// Call queryWikipedia with createElement as the callback
queryWikipedia(createElement);

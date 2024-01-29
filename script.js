function searchStation() {
    // Get the user input
    const userInput = document.getElementById('stationInput').value;

    // Perform a search (you might fetch data from an API or use a predefined dataset)
    const stationInfo = getStationInfo(userInput);

    // Display the result
    displayResult(stationInfo);
}

function getStationInfo(stationInput) {
    // Perform a search or fetch data from an API based on the stationInput
    // Return the relevant station information
    // Example: You might have a predefined dataset or use an API like https://www.railwayapi.com/
    // Make an AJAX request or fetch the data here
}

function displayResult(stationInfo) {
    // Display the result in the result section
    const resultSection = document.getElementById('result');

    // Format and display the station information
    resultSection.innerHTML = `<h2>${stationInfo.name}</h2>
                               <p>Route: ${stationInfo.route}</p>
                               <p>Information between stations: ${stationInfo.betweenStations}</p>`;
}
function searchStation() {
    // Get the user input
    const userInput = document.getElementById('stationInput').value;

    // Perform a search (you might fetch data from an API or use a predefined dataset)
    const stationInfo = getStationInfo(userInput);

    // Display the result
    displayResult(stationInfo);
}

function getStationInfo(stationInput) {
    // Perform a search or fetch data from an API based on the stationInput
    // Return the relevant station information
    // Example: You might have a predefined dataset or use an API like https://www.railwayapi.com/
    // Make an AJAX request or fetch the data here
}

function displayResult(stationInfo) {
    // Display the result in the result section
    const resultSection = document.getElementById('result');

    // Format and display the station information
    resultSection.innerHTML = `<h2>${stationInfo.name}</h2>
                               <p>Route: ${stationInfo.route}</p>
                               <p>Information between stations: ${stationInfo.betweenStations}</p>`;
}
// Sample data for train stations
const stationData = [
    {
        code: 'ABC',
        name: 'Station ABC',
        route: 'Route 1',
        betweenStations: 'Station ABC to Station XYZ'
    },
    {
        code: 'XYZ',
        name: 'Station XYZ',
        route: 'Route 1',
        betweenStations: 'Station XYZ to Station ABC'
    },
    // Add more stations as needed
];

function getStationInfo(stationInput) {
    // Perform a search in the stationData array
    const result = stationData.find(station => station.code === stationInput || station.name.toLowerCase() === stationInput.toLowerCase());

    // Return the result or handle the case where no station is found
    return result || { name: 'Not Found', route: 'N/A', betweenStations: 'N/A' };
}

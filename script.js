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

function searchStation() {
    // Get the user input
    const userInput = document.getElementById('stationInput').value;

    // Perform a case-insensitive search
    const stationInfo = getStationInfo(userInput);

    // Display the result
    displayResult(stationInfo);
}

function getStationInfo(stationInput) {
    // Convert the input to lowercase for case-insensitive comparison
    const lowerCaseInput = stationInput.toLowerCase();

    // Perform a case-insensitive search in the stationData array
    const result = stationData.find(station => 
        station.code.toLowerCase() === lowerCaseInput || 
        station.name.toLowerCase() === lowerCaseInput
    );

    // Return the result or handle the case where no station is found
    return result || { name: 'Not Found', route: 'N/A', betweenStations: 'N/A' };
}

function displayResult(stationInfo) {
    // Display the result in the result section
    const resultSection = document.getElementById('result');

    // Format and display the station information
    resultSection.innerHTML = `<h2>${stationInfo.name}</h2>
                               <p>Route: ${stationInfo.route}</p>
                               <p>Information between stations: ${stationInfo.betweenStations}</p>`;
}

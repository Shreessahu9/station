// Sample data for train stations
const stationData = [
    {
        code: 'ABC',
        name: 'Station ABC',
        route: 'Route 1',
        betweenStations: 'West Central Railway',
        den: 'DEN(S)'
    },
    {
        code: 'XYZ',
        name: 'Station XYZ',
        route: 'Route 1',
        betweenStations: 'West Central Railway',
        den: 'DEN(S)'
    },
        {
        code: 'BRGT',
        name: 'BHERA GHAT',
        route: 'JBP-ET',
        betweenStations: 'West Central Railway',
        den: 'DEN(S)'
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
    return result || { name: 'Not Found', route: 'N/A', betweenStations: 'N/A', den: 'N/A' };
}

function displayResult(stationInfo) {
    // Display the result in the result section
    const resultSection = document.getElementById('result');

    // Format and display the station information
    resultSection.innerHTML = `<h2>${stationInfo.name}</h2>
                               <p>Route: ${stationInfo.route}</p>
                               <p>Comes Under: ${stationInfo.betweenStations}</p>
                               <p>DEN: ${stationInfo.den}</p>`;
}

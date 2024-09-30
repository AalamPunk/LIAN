// Initialize the map
const map = L.map('map').setView([19.0760, 72.8777], 12); // Coordinates for Mumbai

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

function updateMap() {
    const city = document.getElementById('cities').value;
    let coordinates = [19.0760, 72.8777]; // Default to Mumbai

    if (city === 'Beed') {
        coordinates = [18.9913, 75.7600];
    } else if (city === 'Pune') {
        coordinates = [18.5204, 73.8567];
    } else if (city === 'Malegaon') {
        coordinates = [20.5537, 74.5288];
    } else if (city === 'Ratnagri') {
        coordinates = [16.9944, 73.3003];
    }

    map.setView(coordinates, 12);
}

function visualize() {
    const city = document.getElementById('citySelect').value;
    const algorithm = document.getElementById('algorithmSelect').value;
    alert(`Visualizing ${algorithm} on ${city}`);
    // Add your visualization logic here
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.classList.toggle('active');
    content.classList.toggle('shrink');
}
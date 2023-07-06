// Check if the browser supports Geolocation
if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
        // Update map or perform other actions with the coordinates
  
        // Example: Update map with a marker
        updateMap(latitude, longitude);
      },
      (error) => {
        console.error("Error retrieving location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
  
  function updateMap(latitude, longitude) {
    // Use your preferred mapping library (e.g., Google Maps, Leaflet, etc.) to update the map with a marker
    // Here's an example using the Google Maps JavaScript API
  
    // Replace 'YOUR_API_KEY' with your actual Google Maps API key
    const apiKey = 'YOUR_API_KEY';
  
    // Create a new map instance
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude },
      zoom: 12
    });
  
    // Create a marker and set its position
    const marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: "Current Location"
    });
  }
  
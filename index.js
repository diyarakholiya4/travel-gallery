 function searchLocation() {
      const location = document.getElementById('locationInput').value;

      if (location) {
        // Open Google Maps with the searched location
        const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;
        window.open(googleMapsUrl, '_blank');
      } else {
        alert('Please enter a location to search.');
      }
    }
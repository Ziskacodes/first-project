function enterCity(event) {
    event.preventDefault();
    let newCity = document.querySelector("#enterCity");
    let currentCity = document.querySelector(".current-city");
    currentCity.innerHTML = newCity.value;
  }
  
  let clickButton = document.querySelector("form");
  clickButton.addEventListener("submit", enterCity);
  
  function currentTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
  
    // Pad with zero if needed
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[now.getDay()];
    let timeElement = document.querySelector("#time");
  
    if (timeElement) {
      timeElement.innerHTML = `${day} ${hour}:${minute}`;
    }
  }
  
  // Run once when the page loads
  currentTime();
  
  // Then update every 60 seconds
  setInterval(currentTime, 60000);
  
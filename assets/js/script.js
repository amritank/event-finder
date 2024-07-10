function validateForm() {
    var eventType = document.getElementById('eventType').value;
    var eventCity = document.getElementById('eventCity').value;
    var eventState = document.getElementById('eventState').value;
    var errorMsg = document.getElementById('errorMsg');

    if (eventType === "" || eventCity === "" || eventState === "") {
      errorMsg.style.display = 'block';
    } else {
      errorMsg.style.display = 'none';
      // Performed the search action here
      // document.getElementById('search-form').submit(); // Uncomment this line to submit the form
    }
  }
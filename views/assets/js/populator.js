(function() {
  'use strict';
  console.log("Populator called");

  // Application elements definition
  var app = {
    isLoading: true,
    spinner: document.querySelector('.spinner-container'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.mdl-grid')
  };

  // Get data from API
  app.fetchData = function(){
    var url = "/api/v1/user";
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          console.log("AJAX request successful");
          var response = JSON.parse(request.response);
          console.log(response);
          app.addCards(response);
        } else {
          console.log("AJAX request error");
          app.offline();
        }
      }
    };
    request.open('GET', url);
    request.send();
  }

  // Online callback for AJAX response
  app.addCards = function(data) {
    console.log("Running addCards script");
    console.log(`The database contains ${data.length} users: '${data[0].name}', '${data[1].name}'`);
    console.log("Creating user cards...");
    data.forEach(function(object, index) {
      var card = app.cardTemplate.cloneNode(true);
      card.classList.remove('cardTemplate');
      console.log(`Object ${index} name: ${object.name}`);
      card.querySelector('.userName').textContent = object.name;
      card.querySelector('.userEmail').textContent = object.email;
      card.removeAttribute('hidden');
      app.spinner.setAttribute('hidden', true);
      app.container.appendChild(card);
    });
  }

  // Offline callback for AJAX request
  app.offline = function() {
    console.log("User is running offline");
    var card = app.cardTemplate.cloneNode(true);
    card.classList.remove('cardTemplate');
    card.querySelector('.userName').textContent = "Estas Offline";
    card.querySelector('.userEmail').textContent = "Conectate para acceder a la vista de usuarios";
    card.removeAttribute('hidden');
    app.spinner.setAttribute('hidden', true);
    app.container.appendChild(card);
  }

  // Execution
  app.fetchData();

})();

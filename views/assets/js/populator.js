(function() {
  'use strict';
  console.log("Populator called");

  // Application elements definition
  var app = {
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.mdl-grid')
  };

  // Get data from API
  app.fetchData = function(){
    $.getJSON('http://localhost:3000/api/v1/user', function(data) {
      console.log(`Data received: ${data}`);
      var jsonData = JSON.parse('{ "name":"Jorge", "email":"jorge.cuevas.92@gmail.com"}');
      console.log(jsonData.name);
      console.log(`${data[0].email} ${data[0].name}`);
      app.addCards(data);
    });
  }

  // Process data
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
      app.container.appendChild(card);
    });
  }

  // Execute

  app.fetchData();

})();

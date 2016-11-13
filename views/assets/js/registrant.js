if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
    // Registration successful
    console.log('ServiceWorker is alive! ', registration.scope);
    // Web Push Notifications
    // registration.pushManager.subscribe({ userVisibleOnly: true })
    //   .then(function(subscription) {
    //     console.log('endpoint', subscription.endpoint);
    //   });
  }).catch(function(err) {
    // registration failed
    console.log('ServiceWorker registration failed: ', err);
  });
}

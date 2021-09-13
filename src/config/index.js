const environmentUrls = new Map();
environmentUrls.set('localhost', 'http://localhost:8092/api/v1');
environmentUrls.set('mazurek-songs-vote-app.herokuapp.com', 'https://mazurek-songs-app.herokuapp.com/api/v1');

export default environmentUrls.get(window.location.hostname);
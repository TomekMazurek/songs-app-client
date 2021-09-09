const environmentUrls = new Map();
environmentUrls.set('localhost', 'http://localhost:8092');
environmentUrls.set('mazurek-songs-vote-app.herokuapp.com', 'https://mazurek-songs-app.herokuapp.com/');

export default environmentUrls.get(window.location.hostname);
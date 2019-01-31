console.log('ww start loading');

onmessage = function(event) {
	console.log('WW catch a message', event);
	setTimeout(() => {
		postMessage('WW =D');
	}, 10000);
}

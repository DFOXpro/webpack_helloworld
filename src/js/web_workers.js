console.console.log('ww start loading');

onmessage = function(event) {
	setTimeout(() => {
		postMessage('WW =D');
	}, 10000);
}

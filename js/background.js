// Background service worker

chrome.webNavigation.onDOMContentLoaded.addListener((details) => {
    const { url } = details;

    if (url.includes('sparebeat.com')) {
        console.log('sparebeat detected!');
    }
});
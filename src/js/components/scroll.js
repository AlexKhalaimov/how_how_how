import fullpage from 'fullpage.js';


const mediaQuery = window.matchMedia('(max-width: 1024px)');

function handleMediaQueryChange(event) {
    if (!event.matches) {
        const fullPageInstance = new fullpage('#fullpage', {
            licenseKey: 'gplv3-license',
            verticalCentered: false,
        });
    }
}

handleMediaQueryChange(mediaQuery);


mediaQuery.addEventListener('change', handleMediaQueryChange); 
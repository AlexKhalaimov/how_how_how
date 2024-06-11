
var timesRun = 0;
const containers = document.querySelectorAll('.section');
containers.forEach(container => {
    for (let i = 0; i < 50; i++) {
        var starCounts = document.createElement('i');
        starCounts.className = 'star';
        var wh = Math.floor(Math.random(1, 10) * 15);
        var $x = Math.floor(Math.random(0, 4) * 100);
        var $y = Math.floor(Math.random(0, 4) * 100);

        starCounts.style.position = 'absolute';
        starCounts.style.width = wh + 'px';
        starCounts.style.height = wh + 'px';
        starCounts.style.left = $x + 'vw';
        starCounts.style.top = $y + 'vh';
        container.appendChild(starCounts);
    }
})

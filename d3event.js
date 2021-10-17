// create icon span with d3
let iconSpan = d3.select('body').append('span')
    .attr('id', 'iconSpan');

// add all five images
let twitter = d3.select('#iconSpan').append('img')
    .attr('src', 'images/twitter.png')
    .attr('width', 100)
    .attr('height', 100)
    .attr('style', 'margin: 6px;');

let facebook = d3.select('#iconSpan').append('img')
    .attr('src', 'images/facebook.png')
    .attr('width', 100)
    .attr('height', 100)
    .attr('style', 'margin: 6px;');

let reddit = d3.select('#iconSpan').append('img')
    .attr('src', 'images/reddit.png')
    .attr('width', 100)
    .attr('height', 100)
    .attr('style', 'margin: 6px;');

let linkedin = d3.select('#iconSpan').append('img')
    .attr('src', 'images/linkedin.png')
    .attr('width', 100)
    .attr('height', 100)
    .attr('style', 'margin: 6px;');

let instagram = d3.select('#iconSpan').append('img')
    .attr('src', 'images/instagram.jpg')
    .attr('width', 100)
    .attr('height', 100)
    .attr('style', 'margin: 6px;');

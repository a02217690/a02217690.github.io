// create icon span with d3
// update X, Y: https://stackoverflow.com/a/65171512
let iconSpan = d3.select('body').append('span')
    .attr('id', 'iconSpan')
    .on('mousemove', event => mouseDiv.text("Mouse X: " + d3.pointer(event)[0] + ", Y: " + d3.pointer(event)[1]));

// add all five images
let twitter = iconSpan.append('img')
    .attr('src', 'images/twitter.png')
    .attr('width', 100)
    .attr('height', 100)
    .attr('id', 'twitter')
    .on('mouseenter', () => mouseEnter(twitter, 'Twitter'))
    .on('mouseleave', () => mouseLeave(twitter, 'Twitter'))

let facebook = iconSpan.append('img')
    .attr('src', 'images/facebook.png')
    .attr('width', 100)
    .attr('height', 100)
    .on('mouseenter', () => mouseEnter(facebook, 'Facebook'))
    .on('mouseleave', () => mouseLeave(facebook, 'Facebook'))

let reddit = iconSpan.append('img')
    .attr('src', 'images/reddit.png')
    .attr('width', 100)
    .attr('height', 100)
    .on('mouseenter', () => mouseEnter(reddit, 'Reddit'))
    .on('mouseleave', () => mouseLeave(reddit, 'Reddit'))

let linkedin = iconSpan.append('img')
    .attr('src', 'images/linkedin.png')
    .attr('width', 100)
    .attr('height', 100)
    .on('mouseenter', () => mouseEnter(linkedin, 'LinkedIn'))
    .on('mouseleave', () => mouseLeave(linkedin, 'LinkedIn'))

let instagram = iconSpan.append('img')
    .attr('src', 'images/instagram.jpg')
    .attr('width', 100)
    .attr('height', 100)
    .on('mouseenter', () => mouseEnter(instagram, 'Instagram'))
    .on('mouseleave', () => mouseLeave(instagram, 'Instagram'))

// add three divs
let inDiv = d3.select('body').append('div')
    .attr('id', 'inDiv')
    .text('In: ');
let outDiv = d3.select('body').append('div')
    .attr('id', 'outDiv')
    .text('Out: ');
let mouseDiv = d3.select('body').append('div')
    .attr('id', 'mouseDiv')
    .text("Mouse: ");

// iconSpan.on('mousemove', () => mouseDiv.text("Mouse X: "));

/**
 * Handles a mouse enter on an object.
 *
 * @param iconObject The object that we entered
 * @param iconName The name of the object
 */
function mouseEnter(iconObject, iconName) {
    inDiv.text('In: ' + iconName);
    iconObject.style('opacity', 0.5);
}

/**
 * Handles a mouse leave from an object.
 *
 * @param iconObject The object that we entered
 * @param iconName The name of the object
 */
function mouseLeave(iconObject, iconName) {
    outDiv.text('Out: ' + iconName);
    iconObject.style('opacity', 1.0);
}


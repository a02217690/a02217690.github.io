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
    .on('mousedown', () => addPadding(twitter, true))
    .on('mouseup', () => addPadding(twitter, false))
    .on('dblclick', () => window.open('https://www.twitter.com', '_blank'));

let facebook = iconSpan.append('img')
    .attr('src', 'images/facebook.png')
    .attr('width', 100)
    .attr('height', 100)
    .on('mouseenter', () => mouseEnter(facebook, 'Facebook'))
    .on('mouseleave', () => mouseLeave(facebook, 'Facebook'))
    .on('mousedown', () => addPadding(facebook, true))
    .on('mouseup', () => addPadding(facebook, false))
    .on('dblclick', () => window.open('https://www.facebook.com', '_blank'));

let reddit = iconSpan.append('img')
    .attr('src', 'images/reddit.png')
    .attr('width', 100)
    .attr('height', 100)
    .on('mouseenter', () => mouseEnter(reddit, 'Reddit'))
    .on('mouseleave', () => mouseLeave(reddit, 'Reddit'))
    .on('mousedown', () => addPadding(reddit, true))
    .on('mouseup', () => addPadding(reddit, false))
    .on('dblclick', () => window.open('https://www.reddit.com', '_blank'));

let linkedin = iconSpan.append('img')
    .attr('src', 'images/linkedin.png')
    .attr('width', 100)
    .attr('height', 100)
    .on('mouseenter', () => mouseEnter(linkedin, 'LinkedIn'))
    .on('mouseleave', () => mouseLeave(linkedin, 'LinkedIn'))
    .on('mousedown', () => addPadding(linkedin, true))
    .on('mouseup', () => addPadding(linkedin, false))
    .on('dblclick', () => window.open('https://www.linkedin.com', '_blank'));

let instagram = iconSpan.append('img')
    .attr('src', 'images/instagram.jpg')
    .attr('width', 100)
    .attr('height', 100)
    .on('mouseenter', () => mouseEnter(instagram, 'Instagram'))
    .on('mouseleave', () => mouseLeave(instagram, 'Instagram'))
    .on('mousedown', () => addPadding(instagram, true))
    .on('mouseup', () => addPadding(instagram, false))
    .on('dblclick', () => window.open('https://www.instagram.com', '_blank'));

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

function addPadding(iconObject, pad) {
    if (pad) {
        iconObject.style('padding-left', "20px");
        iconObject.style('padding-right', "20px");
    } else {
        iconObject.style('padding-left', "0px");
        iconObject.style('padding-right', "0px");
    }
}

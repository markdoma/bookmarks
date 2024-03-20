const siteUrl = '//127.0.0.1:8000/';
const styleUrl = siteUrl + 'static/css/bookmarklet.css';
const minWidth = 250;
const minHeight = 250;

// load CSS
var head = document.getElementsByTagName('head')[0];  // Get HTML head element
var link = document.createElement('link'); // Create new link Element
link.rel = 'stylesheet'; // set the attributes for link element
link.type = 'text/css';
link.href = styleUrl + '?r=' + Math.floor(Math.random()*9999999999999999);
head.appendChild(link);  // Append link element to HTML head

// load HTML
var body = document.getElementsByTagName('body')[0];
boxHtml = `
  <div id="bookmarklet">
    <a href="#" id="close">&times;</a>
    <h1>Select an link to bookmark:</h1>
    <div class="links"></div>
  </div>`;
body.innerHTML += boxHtml;

function fetchAllLinks() {
    // Get all anchor elements on the page
    const links = document.querySelectorAll('a');
  
    // Create an array to store the links
    const allLinks = [];
  
    // Iterate through each anchor element
    links.forEach(link => {
      // Get the value of the 'href' attribute
      const href = link.getAttribute('href');
  
      // Add the link to the array
      allLinks.push(href);
    });
  
    // Now 'allLinks' contains all the URLs from anchor elements
    console.log(allLinks);
  }
  

  // select image event
  allLinks.querySelectorAll('img').forEach(image => {
    image.addEventListener('click', function(event){
      imageSelected = event.target;
      bookmarklet.style.display = 'none';
      window.open(siteUrl + 'images/create/?url='
                  + encodeURIComponent(imageSelected.src)
                  + '&title='
                  + encodeURIComponent(document.title),
                  '_blank');
    })
  })


// launch the bookmkarklet
bookmarkletLaunch();
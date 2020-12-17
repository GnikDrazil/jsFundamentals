const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json';
// Base URL that we are fetching data from ^
const key = 'apidata'; // the key used to access API
let url; // Declaring variable of 'URL', used to make dynamic search
const searchTerm = document.querySelector('.search'); //returns first element that matches ".search"
const startDate = document.querySelector('.start-date'); //returns first element that matches ".start-date"
const endDate = document.querySelector('.end-date'); //returns first element that matches ".end-date", grabbing class end-date
const searchForm = document.querySelector('form');//returns first element that matches "form"
const submitBtn = document.querySelector('.submit');//returns first element that matches ".submit"
const nextBtn = document.querySelector('.next');//returns first element that matches ".next"
const previousBtn = document.querySelector('.prev');//returns first element that matches ".prev"
const nav = document.querySelector('nav'); //returns first element that matches "nav"
const section = document.querySelector('section'); //returns first element that matches "section"
nav.style.display = 'none'; // hides "previous/next" navigation when the page loads
let pageNumber = 0; // Set the page number to '0' by default
// console.log('PageNumber:', pageNumber);
searchForm.addEventListener('submit', fetchResults); // creates the submit button
nextBtn.addEventListener('click', nextPage); // creates the next button
previousBtn.addEventListener('click', previousPage);// creates the previous button
function fetchResults(e) { //declares function that will fetch results from the URL  SIMON ^
    // console.log(e);
    e.preventDefault();  // doesn't reload entire page created, only a section
    url = ${baseURL}?api-key=${key}&page=${pageNumber}&q=$ {searchTerm.value};//This is the url from which we will fetch our information
    // console.log('URL:', url);
    if (startDate.value !== '') { //In this line of code we are adding beginning date to the search parameters
        console.log(startDate.value) // we are going into the object startdate and getting a value
        url += '&begin_date=' + startDate.value;// adds parameters to the start date in line 24
        console.log('URL:', url);
    }
    if (endDate.value !== '') {// In this line we are adding end date to the search parameters
        console.log(endDate.value) // we are going into end date and getting a value
        url += '&end_date=' + endDate.value;// adds parameters to the end date
        console.log('URL:', url);
    }
    fetch(url)// The url requests (or gets) information. The url is a parameter that sends the request to the NYU API  (reaches out to the API for data)
        .then(function (result) {
            console.log(result)
            return result.json();//This is when we call for the response and it will convert that response into a JSON object so that we can read it.
        })
        .then(function (json) { //the JSON objec that was created in the last response is used in this line of code. The information it recived to another function.
            console.log(json);//The console log is used to see the JSON DATA
            displayResults(json);// In ths line of code we are saying that we want our display results to diplay the result in JSON
        })                                                                            // VANESSA ^
}
function displayResults(json) {             // begin by opening a function to display JSON Data; JavaScript Object Notation
    console.log('Display Results', json);   // next console log the 'display results' of JSON data
    // console.log(json.response.docs);
    while (section.firstChild) {                    // open a while statement which loops if condition evaluates true
        section.removeChild(section.firstChild);    // removes the child node from DOM and returns node of 'firstChild'
    }
    let articles = json.response.docs;              // declares variable 'articles' as 'json.response.docs'
    // console.log(articles);
    if (articles.length === 0) {                    // opens an if/else; currently IF article length is 0, display no results.
        console.log('No results');                  // console logs 'No results' IF article length is void
    } else {                                                // declares else condition IF article legnth is /=== 0 (will be positive value)
        for (let i = 0; i < articles.length; i++) {    //setting a length requirement for each article, above we see if the article is === 0 we get no result, here we account for articles with greater than 0 length
            // console.log(i);
            let article = document.createElement('article');         //creates an article variable that will be grabbed from our HTML line 95
            let heading = document.createElement('h2');              //creates a heading variable to be shown in our <h2>
            let link = document.createElement('a');                  //creates link variable to be stored with a tag of 'a'
            let img = document.createElement('img');                 //creates an img variable that we cam pull from our img src on our HTML doc
            let para = document.createElement('p');                  //creates a para or paragraph variable that will go in our <p>
            let clearfix = document.createElement('div');            //creates a clearfix variable that will go in our div
            let current = articles[i];                      //SAM^   //sets current found article to i to test the above for loop = 0 = no results if more than 0 we get current article
            console.log('Current:', current);                        //console.logs our current article as well as the varible name current just to ensure the code went through
            link.href = current.web_url;                             //Tyler    --here we are linking our local URL link to the HTML document on line 143HTML
            link.textContent = current.headline.main;                //grabs the main headline of our current article
            para.textContent = 'Keywords: ';                         //grabs the keywords in each headline to find best article for your search
            for (let j = 0; j < current.keywords.length; j++) {                     //
                let span = document.createElement('span');                          //allows the span to run through our html doc with a class name of span
                span.textContent += current.keywords[j].value + ' ';                //finds specific keywords of our current article
                para.appendChild(span);                                             //appends our paragraph wrapped
            }                                                                       //closes our for loop
            if (current.multimedia.length > 0) {                                    //checks to make sure our article has more than one img>0
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;    //grabs the image  from our NYT source
                img.alt = current.headline.main;
            }                                           //closes the if statement
            clearfix.setAttribute('class', 'clearfix'); //helps the clearfix modifier know what 'classes' to have an effect on
            heading.appendChild(link);          //appends the link to take us to the NYT site
            article.appendChild(heading);      //appends the heading of our article
            article.appendChild(img);        //appends the image that comes with our current article
            article.appendChild(para);      //appends the paragraph of our article
            article.appendChild(clearfix)  //ensures the article and content spans around the buttons and inputboxes & formats the div to fit on the screen with the rest of the media/content
            section.appendChild(article);                       //appends the article to our page
        }                                                       //closing off our for loop
    }                                                           //closing off our if else statement starting from line 52   //this is all under a function, so this is all asuming that the data has been "jsoned"                                                                      // TYLER ^
    if (articles.length === 10) {      //  If the length of the variable article is strictly equal to 10 (if there are 10 articles coming from the displayResults function), the HTML nav element style will be set to 'block'          
    nav.style.display = 'block';
} else {                           // If length of the variable article is not strictly equal to 10, the HTML nav element style will be set to 'none', making the previous and next buttons disappear
    nav.style.display = 'none';
}
}
// Pagination
function nextPage(e) {                //call the nextPage function. pass in the e (event object)
pageNumber++;                     // adds 1 to pageNumber variable
fetchResults(e);                  // call the fetchResults function
console.log('Page Number:', pageNumber);  // print the page number in console to see it change
}
function previousPage(e) {           //call the previousPage function. passi n the e (event object)
if (pageNumber > 0) {            // if pageNumber variable is more than 0
    pageNumber--;                // subtract 1 from pageNumber
} else {                         // if pageNumber is not more than 0
    return;                      // return; will stop the function
}
fetchResults(e);                 // call the fetchResults function
console.log('Page:', pageNumber);  //print the page number in console to see it change
}
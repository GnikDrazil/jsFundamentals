/*
    WHAT IS AN API?

        - API stands for application program interface

        - in basic terms, API's allow applications to communicate with one another
        - the API is not the database or the server - it is the code that allows us access point(s) (endpoints) to the server and database
            - those access points come in the form of an endpoint, which directs us to different sets of data that we can access.
    
    ASYNCHRONOUS PROGRAMMING
        - generally, code is read and implemented line by line - this is known as synchronous programming
            - in the case of fetching data from an outside source like we3 do with an API, if JavaScript did not have the ability to run code asynchronously, it would have to run each line of code > wait for the response or data to come back > and then finish running through each subsquent line of code
            - in basic terms, asynchronous programming allows a program to do more than one thing at a time
        - asynchronous programming allows our code to continue to run while we're waiting on a response or the data from on API.Once the fetch has finished retreiving the data, it then presents us with that data, without having to wait on other code to finish running

        - the fetch() method is an asynchronous method and is part of the browser window, not JavaScript
        - the fetch() methods starts the process of fetching a resource from the network, and will return a promise which is fulfilled once the response is availible. 
            - a promise rempresents a value that is unknown when the promise is created, but can only equate to one of two values - either fullfilled (successful fetch and we retreive the data), or rejected (something went wrong along the way and we don't retreive the data)
                - pendingt: initial state, neither fulfilled nor rejected
                - fulfilled: meaning the operation completed successfully
                - rejected: meaning the operation failed
            - in the case of a fetch reqauest, a promise will resolve into a response object that represents the response we receive from the request we made to the API
*/

const baseURL ='https://api.spacexdata.com/v3';

const serachForm = document.querySelector('form');
//console.log(serachForm);
const spaceShips = document.querySelector('ul');
//console.log(spaceShips);

const imageUl = document.getElementById("images")

serachForm.addEventListener('submit', fetchSpace); // function reference - funciton is not being invoked on this line, we only want the function to run when the submi

function fetchSpace(event, ne){
    console.log(event);
    event.preventDefault(); // stops automatic reload of page on form submission

    fetch(`${baseURL}/rockets`)// fetch starts the process of fetching from a netwerok, and that fetch will return a promise which is fulfilled (or rejected)
        .then(responseObj => responseObj.json()) // .then(function(responseObj) {})
        .then(jsonData => {

            displayRockets(jsonData)

        })
}
//                      json = jsonData = potato
function displayRockets(json) { //json is a parameter name
    console.log('Results:', json);

    json.forEach(rocket => {
        let item = document.createElement('li');
        item.innerText = rocket.rocket_name;
        spaceShips.appendChild(item);
        console.log(item)

        let imageLi = document.createElement('li');
        let image = document.createElement('img');
        image.setAttribute('src', rocket.flickr_images[0]);
        image.style.height = '200px';
        image.style.width = 'auto';
        console.log(image);

        imageLi.appendChild(image);
        imageUl.appendChild(imageLi);
    })
}


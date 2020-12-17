let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
.then(function(response) { 
return response.json();
})
.then(function(json){
    console.log(json)
    let people = json.results;

    for(p of people){
        let listItem = document.createElement('li');
        console.log(p);
        listItem.innerHTML = '<p>' + p.name + ' ' + p.height + '</p>';
        starWarsPeopleList.appendChild(listItem)
    }
});

// write your code here
console.log('it works!');

let links = [
    {
        title:"World news",
        url: "https://world.news",
        author: "Natasha"
    },
    {
        title:"My blog",
        url: "https://my.first.blog",
        author: "Vallerie"
    },
    {
        title:"How to stay healthy",
        url: "https://how.to.stay.healthy",
        author: "Ally"
    },
    {
        title:"Learning languages",
        url: "https://learning.languages",
        author: "Ken"
    }
];

const startMenu = `Welcome to the new social news program!
    Choose (1) to show the list of links.
    Choose (2) to add a new link.
    Choose (3) to remove an existing link.
    Choose (4) to quit the program.
    Choose (5) to show the list of links displays the index (rank).
`;

let linkChoice = Number(prompt(startMenu));

// This function will show the list of links
const listOfLinks = () => {
    for(i = 0; i < links.length; i++) {
    let listChoice = `Title: ${links[i].title}

URL: ${links[i].url} 

Author: ${links[i].author}`;
    alert(listChoice);
    }
};

const addNewLinks = () => {
    const addNewTitle = prompt("Enter a new title: ");
    const addNewUrl = prompt("Enter a new url:");
    const addNewAuthor = prompt("Enter a new autor: ");
    let newLink = {
        title: addNewTitle,
        url: addNewUrl,
        author: addNewAuthor
    };
    links.push(newLink);
    return;
}

// Run the program till the user quite
switch (linkChoice) {
    case 1:
        listOfLinks();
        break;
    case 2:
        addNewLinks();
        break;
};
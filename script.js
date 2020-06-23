// write your code here
console.log('it works!');

let links = [
    {
        title:"World news",
        url: "https://world/news",
        author: "Natasha"
    },
    {
        title:"My blog",
        url: "https://my/first/blog",
        author: "Vallerie"
    },
    {
        title:"How to stay healthy",
        url: "https://how/to/stay/healthy",
        author: "Ally"
    },
    {
        title:"Learning languages",
        url: "https://learning/languages",
        author: "Ken"
    },
    {
        title:"Travelling",
        url: "https://travel/travelling",
        author: "Ken"
    }
];

let startMenu = `Welcome to the new social news program!
    Choose (1) to show the list of links.
    Choose (2) to add a new link.
    Choose (3) to remove the last link which you have just entered.
    Choose (4) to remove an existing link.
    Choose (5) to quit the program.
    Choose (6) to show the list of links displays the index (rank).
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

// This function will add a new social news in the list of links
const addNewLinks = () => {
    let addNewTitle = prompt("Enter a new title: ");
    let addNewUrl = prompt("Enter a new url:");
    let addNewAuthor = prompt("Enter a new author: ");
    if (!addNewUrl.startsWith("http://")) {
        addNewUrl = `http://${addNewUrl}`;
    }
    let newLink = {
        title: addNewTitle,
        url: addNewUrl,
        author: addNewAuthor
    };
    links.push(newLink);
    return;
}

// This function will show the index 
const index = () => {
    let showIndex = Number(prompt("Enter a number from 0 to 4 of to show a links you want to show"));
    switch (showIndex) {
        case 0:
            alert(`${links[0].title} (${links[0].url}) Author: ${links[0].author}`);
            break;
        case 1:
            alert(`${links[1].title} (${links[1].url}) Author: ${links[1].author}`);
            break;
        case 2:
            alert(`${links[2].title} (${links[2].url}) Author: ${links[2].author}`);
            break;
        case 3:
            alert(`${links[3].title} (${links[3].url}) Author: ${links[3].author}`);
            break;
        case 4:
            alert(`${links[4].title} (${links[4].url}) Author: ${links[4].author}`);
            break;
        default:
            alert("Don't be funny guys! That's not valid! hahaha!")
    }
}

// Run the program till the user quite
while (linkChoice !== 4) {
    switch (linkChoice) {
        case 1:
            listOfLinks();
            break;
        case 2:
            addNewLinks();
            break;
        case 3:
            const linkDeleted = links.pop();
            alert(`We deleted the last link: ${linkDeleted.title}`);
            break;
        case 4:
            let removeIndex = Number(prompt("Enter the index of the link to be removed (0 to 4)"));
            let deletedIndex = links.splice(removeIndex--, 1);
			console.log(deletedIndex);
            alert(`You just deleted: ${deletedIndex[0].title}`);
            break;
        case 6: 
            index(); 
            break;
        default:     
        alert('Please enter a correct choice. (1,2,3,4,5,6)');
    }
  linkChoice = Number(prompt(startMenu));
}
// Here is the ends of the program
alert(`Thank you for using this program`);
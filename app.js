const allListItem = document.getElementsByTagName('li');
for (const item of allListItem) {
    console.log(item.innerText);
}

const elementByID = document.getElementById('best-fruit');
console.log(elementByID);
const elementByClassName = document.getElementsByClassName('heading');
console.log(elementByClassName);
for (const tag of elementByClassName) {
    console.log(tag);
}
// query selector 
// documents by id query selector
const elementQueryId = document.querySelectorAll('.heading');
console.log('elementQueryId', elementQueryId);
for (const singeItem of elementQueryId) {
    
}


const allLiIs = [];
const movieContainer = document.querySelectorAll('.movie-container li');
const elements= movieContainer

console.log(movieContainer);
for (const element of elements) {
    allLiIs.push(element)
}
console.log('from line 30',allLiIs);
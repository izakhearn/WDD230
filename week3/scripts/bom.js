const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let arrChapters = getChapters() || [];

arrChapters.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    let chapter = input.value;
    if (chapter !== '') {
    arrChapters.push(chapter);
    displayList(chapter);
    setChaptersList();
    input.value = '';
    input.focus();
    }
    else {
        alert('Please enter a chapter');
    }
});

function displayList(chapter) {
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');
        
        listText.textContent = chapter;
        listBtn.textContent = '❌';
        
        listItem.appendChild(listText);
        listItem.appendChild(listBtn);
        list.appendChild(listItem);
        
        listBtn.onclick = function(e) {
            deleteChapter(e);
        }
}

function setChaptersList() {
    localStorage.setItem('chapters', JSON.stringify(arrChapters));
}

function getChapters() {
    let chapters = localStorage.getItem('chapters');
    return JSON.parse(chapters);
}

deleteChapter = (e) => {
    let chapter = e.target.parentElement.firstChild.textContent;
    let index = arrChapters.indexOf(chapter);
    arrChapters.splice(index, 1);
    setChaptersList();
    e.target.parentElement.remove();
}




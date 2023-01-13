const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.onclick = function() {
    let myChapter = input.value;
    input.value = '';
    if (myChapter !== '') {
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    
    listText.textContent = myChapter;
    listBtn.textContent = '❌';
    
    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    list.appendChild(listItem);
    
    listBtn.onclick = function(e) {
        list.removeChild(listItem);
    }
}
else {
    alert('Please enter a chapter');
}
    input.focus();
    }

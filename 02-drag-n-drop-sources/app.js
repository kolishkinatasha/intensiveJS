const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover); //над
    placeholder.addEventListener('dragenter',dragenter); //на территории
    placeholder.addEventListener('dragleave', dragleave); //вышли
    placeholder.addEventListener('drop', dragdrop); //отпустили
}

function dragstart(event) {
    // console.log('drag start', event.target);
    event.target.classList.add('hold');
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0)
}

function dragend(event) {
    // console.log('drag end');
    event.target.classList.remove('hold', 'hide');
}  

function dragover(event) { 
    event.preventDefault();
    // console.log('dragover');
}

function dragenter(event) { //на территории прейсхолдера
    classColor(event.target);
    // console.log('dragenter');
}

function dragleave(event) {
    event.target.classList.remove('hovered1', 'hovered2', 'hovered3');
    // console.log('dragleave');
}

function dragdrop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered1', 'hovered2', 'hovered3');
    // console.log('dragdrop');
}

function classColor(elem) {
    if (elem.classList.contains('hoveredStart')) {
        elem.classList.add('hovered1'); 
    }
    if (elem.classList.contains('hoveredProgress')) {
        elem.classList.add('hovered2'); 
    }
    if (elem.classList.contains('hoveredDone')) {
        elem.classList.add('hovered3'); 
    }
}
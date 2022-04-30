console.log("Drag & Drop utility Project")

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName("whiteBox");

//Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    // console.log("Dragging Starts");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = ' hide';
    }, 0);
});

imgBox.addEventListener('dragend', (e) => {
    // console.log("Dragging ends");
    e.target.className = 'imgBox';
});

for (const whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();     //If not prevented then you can't drop
        // console.log("Drag Over");
    });
    whiteBox.addEventListener('dragenter', (e) => {
        // console.log("Drag Enter");
        e.target.className += ' dashed'
    });
    whiteBox.addEventListener('dragleave', (e) => {
        console.log("Drag Leave");
        e.target.className = " whiteBox";        //Dashed class dettached here
    });
    whiteBox.addEventListener('drop', (e) => {
        // console.log("Drop");
        e.target.append(imgBox);
    });
}
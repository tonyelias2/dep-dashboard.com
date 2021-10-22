function removeVideo(id) {
    const myDiv = document.getElementById(id);
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);
}

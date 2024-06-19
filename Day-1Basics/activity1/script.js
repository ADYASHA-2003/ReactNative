// function changeBg(){
//     document.body.style.backgroundColor="lightblue"
// }

function changeBg() {
    var currentBg = document.body.style.backgroundColor;
    if (currentBg === 'lightblue') {
        document.body.style.backgroundColor = ''; 
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }
}

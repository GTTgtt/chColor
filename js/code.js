console.log('JS start');

function changeColor(){
    for(var i = 1; i < 6; i++){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        
        document.documentElement.style.setProperty('--clr' + i, r + ', ' + g + ', ' + b );
        
        console.log('color ' + i + ': ' + r + ', ' + g + ', ' + b );
    }
}
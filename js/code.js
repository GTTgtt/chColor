var colorInputs;
var chkBoxes;

function init(){
    console.log('Initializing...');
    
    colorInputs = document.querySelectorAll('input[type="color"]');
    chkBoxes = document.querySelectorAll('input[type="checkbox"]');
    
    for(var i = 0; i < 5; i++){
        colorInputs[i].addEventListener('change', function(e){ changeColor(e.path[1].innerText.substr(9, 1), this.value); });
        
        setColor(colorInputs[i], getComputedStyle(document.body).getPropertyValue('--clr' + (i + 1)).trim());
    }
}

function setColor(ele, col){
    ele.value = toHex(col);
}

function toHex(rgb){
    var r = (parseInt(rgb.split(', ')[0].trim(), 10).toString(16).length == 1)?'0'+parseInt(rgb.split(', ')[0].trim(), 10).toString(16):parseInt(rgb.split(', ')[0].trim(), 10).toString(16);
    
    var g = (parseInt(rgb.split(', ')[1].trim(), 10).toString(16).length == 1)?'0'+parseInt(rgb.split(', ')[1].trim(), 10).toString(16):parseInt(rgb.split(', ')[1].trim(), 10).toString(16);
    
    var b = (parseInt(rgb.split(', ')[2].trim(), 10).toString(16).length == 1)?'0'+parseInt(rgb.split(', ')[2].trim(), 10).toString(16):parseInt(rgb.split(', ')[2].trim(), 10).toString(16);
    
    return '#' + r + g + b;
}

function changeColors(){
    console.log('Changing colors to:');
    
    for(var i = 1; i < 6; i++){
        
        if(chkBoxes[i - 1].checked == true) continue;
        
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        
        document.documentElement.style.setProperty('--clr' + i, r + ', ' + g + ', ' + b );
        setColor(colorInputs[i - 1], r + ', ' + g + ', ' + b)
        
        console.log('color ' + i + ': ' + r + ', ' + g + ', ' + b );
    }
    
    console.log('...');
}

function changeColor(num, col){
    document.documentElement.style.setProperty('--clr' + num, parseInt(col.substr(1, 2), 16) + ', ' + parseInt(col.substr(3, 2), 16) + ', ' + parseInt(col.substr(5, 2), 16));
}
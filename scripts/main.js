
var pictureArray;
var folderNumber;
var arrayLength;

function generator () {
    console.log(arrayLength + " " + folderNumber);
    var x=Math.floor((Math.random()*arrayLength)+1);
    console.log(x); 
    document.getElementById('space').innerHTML=
        `<img src="img/bingos${folderNumber}/bingo${x}.png" style="width:300px;">`;
}

$("#bingos1").on('click', function(){
    removeSelectedClass();
    $(this).addClass('selected');
    pictureArray = new Array();
    for(let i=1; i<=16; i++) {
        pictureArray.push(`img/bingos1/bingo${i}.png`);
    }
    console.log(pictureArray);
    window.folderNumber = 1;
    window.arrayLength = 16;
})

$('#bingos2').on('click', function(){
    removeSelectedClass();
    $(this).addClass('selected');
    pictureArray = new Array();
    for(let i=1; i<=24; i++) {
        pictureArray.push(`img/bingos2/bingo${i}.png`);
    }
    console.log(pictureArray);
    window.folderNumber = 2;
    window.arrayLength = 24;
})

$('#bingos3').on('click', function(){
    removeSelectedClass();
    $(this).addClass('selected');
    pictureArray = new Array();
    for(let i=1; i<=24; i++) {
        pictureArray.push(`img/bingos3/bingo${i}.png`);
    }
    console.log(pictureArray);  
    window.folderNumber = 3;
    window.arrayLength = 24;
})

function removeSelectedClass() {
    $('#bingos1').removeClass('selected');
    $('#bingos2').removeClass('selected');
    $('#bingos3').removeClass('selected');
}

$("img").css({"style": "hover-zoom"});



//tworzenie canvas z ikoną Vadera
var c = document.getElementById("c");
var ctx = c.getContext("2d");
var image = new Image();
image.src = "vader.ico";
image.onload = function () {
   ctx.drawImage(image, 15, 15, c.width - '20', c.height - '30');
};

//tworzenie górnego tekstu
var top_text = function () {
   ctx.fillStyle = "black";
   ctx.font = "italic 18px Arial";
   ctx.fillText($('#text1').val(), 50, 15);
};
//tworzenie dolnego tekstu
var bottom_text = function () {
   ctx.fillStyle = "black";
   ctx.font = "italic 18px Arial";
   ctx.fillText($('#text2').val(), 50, 145);
};
//wczytanie tła
var URL;
var readURL = function(event){
   var getImagePath = URL.createObjectURL(event.target.files[0]);
   $('#c').css('background-image', 'url(' + getImagePath + ')');
};

//ściągnięcie canvas jako obraz
var downloadCanvas = function(link, canvasId, filename) {
   link.href = document.getElementById(canvasId).toDataURL('image/png', 1.0);
   link.download = filename;
};

/** 
 * The event handler for the link's onclick event. We give THIS as a
 * parameter (=the link element), ID of the canvas and a filename.
 */
document.getElementById('download').addEventListener('click', function () {
   downloadCanvas(this, 'c', 'test.png');
}, false);





   



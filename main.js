img = "";
status = "";

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status_label").innerHTML = "status : detecting objects";
}

function modelLoaded()
{
    console.log("model Is Loaded");
    status = true;
    object_detector.detect(img , gotResults);

}

function gotResults(error,results)
{
   if(error)
   {
       console.log(error);
   }
   else
   {
   console.log(results);
   }
}

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img,0,0,640,420);
    fill("#0000FF");
    text("Dog",46,60);
    noFill();
    stroke("#0000FF");
    rect(30,50,350,360);

    fill("#0000FF");
    text("Cat",315,68);
    noFill();
    stroke("#0000FF");
    rect(300,55,300,350);
}
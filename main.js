img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    if(status != "")
    {
    for(i = 0; i < objects.lenght; i++)
    {
        document.getElementById("status").innerHTML = "status : object detected";
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15,objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, object[i].y, objects[i].width, objects[i].height);
    }
    }

}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML =  "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log(modelLoaded);
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results; 
}
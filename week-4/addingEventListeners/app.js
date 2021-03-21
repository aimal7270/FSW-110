const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function draw() {
    //This line is actually not even needed...
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fill();

    // mouse hover event handler.
    canvas.addEventListener("mouseover", function() {
        ctx.fillStyle = "green";
        ctx.fill();
    });

    // mouse down event handler.
    canvas.addEventListener("mousedown", function() {
        ctx.fillStyle = "yellow";
        ctx.fill();
    });

    // mouse move up handler.
    canvas.addEventListener("mouseup", function() {
        ctx.fillStyle = "blue";
        ctx.fill();
    });

    // mouse double click handler.
    canvas.addEventListener("dblclick", function() {
        ctx.fillStyle = "red";
        ctx.fill();
    });

    // mouse wheel handler.
    document.addEventListener("wheel", function() {
        ctx.fillStyle = "purple";
        ctx.fill();
    });

    /*
    green = 71
    yellow = 89
    purple = 80
    red = 82
    blue = 66
    */
    document.addEventListener("keydown", function(event) {
        var input = event.which;

        switch(input) {
            case 71:
                ctx.fillStyle = "green";
                ctx.fill();
                break;
            case 89:
                ctx.fillStyle = "yellow";
                ctx.fill();
                break;
            case 80:
                ctx.fillStyle = "purple";
                ctx.fill();
                break;
            case 82:
                ctx.fillStyle = "red";
                ctx.fill();
                break;
            case 66:
                ctx.fillStyle = "blue";
                ctx.fill();
                break;
            default:
                break;
        }
    });
}

draw();
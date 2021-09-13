// creating a obj
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}


const another = new Circle(1);
/*// factory function
function createCircle (radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    }
}
const circle = createCircle(1);
circle.draw();

// contructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const another = new Circle(1);*/
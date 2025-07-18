function greet(name = 'JOHN') {
    console.log(`hello!, ${name}`);
}

// tell other files ..you can use this same function
module.exports = greet;
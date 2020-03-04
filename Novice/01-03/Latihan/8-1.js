function exampleScope() {
    console.log(foo); // => ReferenceError: foo is not defined [Stop script execution]
    let foo = "Hello, world!"; 
    console.log(foo); 
    console.log("This will never be logged");
}
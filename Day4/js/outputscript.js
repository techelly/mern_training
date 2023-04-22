function displayText(){
    window.alert("going to display content for id");
    console.log("I am inside displayTest function");
    document.getElementById('demo1').innerHTML="Hope you enjoing JS";
    window.alert("Successfully Displayed");
}

function displayUsingWrite(){
    //It will overwrite the whole document
    //Never call document.write after the document has finished loading
    //document.write() method or function should only be used for testing purpose
    alert("This action will overwrite the document");
    document.write("Addition of two number 5 and 10 is ---- ");
    document.write(10+5);
    console.log("I am inside displayUsingWrite function");
}
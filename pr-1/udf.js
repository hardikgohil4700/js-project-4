function greeting(message){
    if(message === undefined){
        message = "Good Morning";
    }
    console.log(message);
}
greeting();

greeting("Hello!");
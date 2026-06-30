let country = "India";

function outer() {

    let city = "Delhi";

    function inner() {

        let name = "Aman";

        console.log(name);          //current scope
        console.log(city);          //parent scope
        console.log(country);       //global scope
        

    }

    inner();

}

outer();
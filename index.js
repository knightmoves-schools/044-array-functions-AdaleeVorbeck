let automobiles = ["car","truck","motorcycle"];
let automobilesCopy = `The automobiles are: ${automobiles}`;
automobiles.push("airplane","skateboard");
automobiles.pop("skateboard");
automobiles.unshift("bike","helicopter");
automobiles.shift("bike");


document.getElementById("result").innerHTML = automobiles;

//should define a new variable called automobilesCopy and set it equal to a string template that contains the variable automobiles

let automobiles = ["car","truck","motorcycle"];
automobiles.push("airplane","skateboard");
automobiles.pop("skateboard");
automobiles.unshift("bike","helicopter");
automobiles.shift("bike");

let automobilesCopy = `${automobiles}`;

document.getElementById("result").innerHTML = automobiles;

//should define a new variable called automobilesCopy and set it equal to a string template that contains the variable automobiles

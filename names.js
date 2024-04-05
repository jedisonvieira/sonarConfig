var names = ["Rick", "Summer", "Morty", "Beth", "Jerry"];
var foreNames = ["Sanchez", "Smith", "Parker", "Birdperson", "Squanch"];
var ages = [67, 17, 14, 35, 37];

for (let index = 0; index < names.length; index++) {
  foreNames.forEach((foreName) => {
    for (const age of ages) {
      if (age == 14) {
        if (names[index] == "Morty") {
          if (foreName == "Smith") {
            console.log("Thats Morty! :)");
          }
        }
      }

      if (age == 67 && names[index] == "Rick" && foreName == "Sanchez") {
        console.log("Thats Rick! :)");
      }
    }
  });
}

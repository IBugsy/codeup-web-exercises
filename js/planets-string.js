// console.log('test')
(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    const planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    const planetsString2= planetsArray.join('<br>');
    // var planetsString2 = "Mercury, <br> Venus, <br> Earth, <br> Mars, <br> Jupiter, <br> Saturn, <br> Uranus, <br> Neptune";
    console.log(planetsString2);

    const formattedUlPlanetString = `<ul><li>${planetsArray.join("</li><li>")}</li></ul>`;
    console.log(formattedUlPlanetString)

})();
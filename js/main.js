//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let i = 0; i < dog_names.length; i++){
        if( dog_string.indexOf(dog_names[i]) > -1){
        return "Matched " + dog_names[i] 
        } else {
            return 'No Matches'
        }
    }
}

console.log(findWords())



//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < Given_arr.length; i++){
        if(i % 2 == 0){
            Given_arr.splice(i,1,'even index')
        }
    }
    return Given_arr
}

console.log(replaceEvens())

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]






//==================Code Wars Problem #1===============================//
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time){
    let value = time / 2
    return Math.floor(value) 
}

console.log(litres(11.8))


//==================Code Wars Problem #2===============================//
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(4, 4) --> 16

function area_of_perimeter(l, w){
    if ( l == w){
        return l * w
    } else {
        return (l*2) + (w*2)
    }
}

console.log(area_of_perimeter(4, 4))

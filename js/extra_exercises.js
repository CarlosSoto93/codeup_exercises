/**
 * Created by Carlos on 4/12/17.
 */
(function(){
    "use strict";

    var meals = ["pizza", "burgers", "tacos", "rice & veggies", "soup", "noodles", "falafels", "subs", "salad", "tofu", "burrito", "smoothie"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var mealOfDay = [];

    function randomGen(meals) {
        return Math.floor((Math.random() * meals.length ));
    }

    //need to figure out how to make meals of day not repeat in the week.

    for (var i = 0; i < days.length; ++i){
        var random = randomGen(meals);

        if ( mealOfDay.length == 0){
            mealOfDay.push(meals[random]);
        }else {
            if (mealOfDay.indexOf(meals[random]) == -1) {
                mealOfDay.push()
            }else {
                random = randomGen(meals);
            }
        }

        console.log(days[i] + " - " + meals[random]);
    }

    var hitMiss = ["Strike", "Score", "You can try again."]


// (4-14-17)
    // Object BONUS:
    //
    //     Create a pet object with the following...
    //
    //     Properties:
    //
    // 1) name - string
    // 2) species - string
    // 3) age - number
    // 4) gender - string
    // 5) clean - boolean
    // 6) hungry - boolean
    // 7) sleepy - boolean
    // 8 ) happy - boolean
    // 9) petFood - number 10
    // 10) soap - number 3
    //
    // Methods:
    //
    //     1) callPet() - call’s out pet name
    // 2) playWithPet() - makes pet happy and hungry and dirty
    // 3) feedPet(petFood) - makes pet not hungry and sleepy and reduces petFood by 1
    // 4) makePetSleep() - makes pet not sleepy, not happy, and hungry, and 1 older
    // 5) cleanPet(soap) - makes pet not happy and clean and reduces soap by 1
    //
    // Have fun with the pet!
    //     call it, feed it, play with it, make it sleep, clean it

})();
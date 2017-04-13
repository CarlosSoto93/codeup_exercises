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
            mealsOfDay.push(meals[random]);
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


})();
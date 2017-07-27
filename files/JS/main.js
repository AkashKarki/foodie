var index = 0;
var show="image1";
carousel();
function carousel(){
        $('.slide').removeClass(show);//chaining
        $(".slide").addClass("hidden");
        index++;
        if (index > 2) {
        index = 1;
    }
    show="image"+index;
    console.log(show);
    $('.slide').removeClass("hidden");//chaining
    $(".slide").addClass(show);
    setTimeout(carousel, 10000);
}


var foodie = angular.module('foodie',[]);


foodie.controller('RestrauntController',function($scope) {
})





foodie.controller('loginController',function($scope) {
})

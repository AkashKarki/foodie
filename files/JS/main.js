

var foodie = angular.module('foodie',['ngRoute']); //setting up abgular app


foodie.config(function ($routeProvider) { //setting route path for site
	$routeProvider
	.when('/',{       //show login.html inside ng-view tag in index.html
		templateUrl: 'pages/login.html',
		controller: 'loginController' //give control to loginController
	})
	.when('/home',{    //show main.html inside ng-view tag in index.html
		templateUrl: 'pages/main.html',
		controller: 'RestrauntController'   //give control to RestrauntController
	})
  .when('/restraunt/:id',{    //:id is used to generate unique adderss for $routeParams
		templateUrl: 'pages/restaurant.html',
		controller: 'showRestraunt'
	})
})


foodie.controller('RestrauntController',function($scope) {  //defining RestrauntController
  var index = 0;
  var show="image1";
  carousel();
  function carousel(){                                 //slider stuff
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

  $scope.restaurants = [{
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
    id:'1',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
  	name: 'Brown Sugar',
  	address: 'M-73, M Block Market, Greater Kailash (GK) 1, New Delhi',
  	location: 'Greater Kailash (GK) 1',
  	category: 'Fast Food, Beverages',
  	vote: '3.8',
    id:'2',
  	cuisines: 'CAFÉ',
  	cost: '600',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/5/1395/b9904d3c19534d029ca3a3f0643b2849_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
  },
  {
  	name: 'Whipped',
  	address: 'E-556, Greater Kailash (GK) 2, New Delhi',
  	location: 'Greater Kailash (GK) 2',
  	category: 'BAKERY,DESSERT PARLOR',
  	vote: '4.0',
    id:'3',
  	cuisines: 'Bakery, Desserts',
  	cost: '500',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/9/2649/0661277daa17c54c8d2bdcf336c37117_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
  },
	{
  	name: 'Biryani Blues',
  	address: 'B-202 & 203, Supermart 1, DLF Phase 4, Gurgaon',
  	location: 'Supermart 1, DLF Phase 4',
  	category: 'CASUAL DINING',
  	vote: '4.7',
    id:'4',
  	cuisines: 'Biryani, Hyderabadi',
  	cost: '1000',
  	hours: '12 Noon to 12 Midnight(Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/8/301718/bb30e8235b351ce5fabdccaede64f583_featured_v2.jpg'
  },
	{
  	name: 'Tossin Pizza',
  	address: 'SF-114, 1st Floor, Galleria Market, DLF Phase 4, Gurgaon',
  	location: 'DLF Galleria, DLF Phase 4',
  	category: 'CASUAL DINING',
  	vote: '4.1',
    id:'5',
  	cuisines: 'Pizza, Italian',
  	cost: '900',
  	hours: '12 Noon to 1AM(Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/305782/613d6e9c4abd4de17dd6c237fa2fd057_featured_v2.jpg'
  },
]
})





foodie.controller('loginController',function($scope,$location) {      //defining loginController
	$scope.goTohome = function() {
		$location.url('home')
	}
})




foodie.controller('showRestraunt',function($scope,$routeParams,$http) {   //defining showRestraunt controller
  console.log($routeParams.id);
var restraunt=[{
  name: 'Farzi Cafe',
  address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  location: 'Connaught Place',
  category: 'Casual Dining, Bar',
  vote: '4.2',
  id:'1',
  cuisines: 'Modern Indian',
  cost: '2200',
  hours: '12 Noon to 1 AM (Mon-Sun)',
  image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
  backimage:'https://b.zmtcdn.com/data/res_imagery/18233593_RESTAURANT_00272acd0235af309a0bbe4843e53499.jpg?output-format=webp',
  bestDish: {
	name: 'cheese dip cookie',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
},
{
  name: 'Brown Sugar',
  address: 'M-73, M Block Market, Greater Kailash (GK) 1, New Delhi',
  location: 'Greater Kailash (GK) 1',
  category: 'Fast Food, Beverages',
  vote: '3.8',
  id:'2',
  cuisines: 'CAFÉ',
  cost: '600',
  hours: '12 Noon to 1 AM (Mon-Sun)',
  image: 'https://b.zmtcdn.com/data/pictures/chains/5/1395/b9904d3c19534d029ca3a3f0643b2849_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  backimage:"https://b.zmtcdn.com/data/res_imagery/1395_CHAIN_d65b48669fa4bfcda9bb2a8c49413be2.jpg?output-format=webp",
  bestDish: {
	name: 'Brown Rolls',
	image: 'https://b.zmtcdn.com/data/reviews_photos/5d4/6833bccf5e509ae1bd8b3f1e9c4145d4_1499413777.jpg'
},
},
{
  name: 'Whipped',
  address: 'E-556, Greater Kailash (GK) 2, New Delhi',
  location: 'Greater Kailash (GK) 2',
  category: 'BAKERY,DESSERT PARLOR',
  vote: '4.0',
  id:'3',
  cuisines: 'Bakery, Desserts',
  cost: '500',
  hours: '12 Noon to 1 AM (Mon-Sun)',
  image: 'https://b.zmtcdn.com/data/pictures/9/2649/0661277daa17c54c8d2bdcf336c37117_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  backimage:"https://b.zmtcdn.com/data/res_imagery/2649_RESTAURANT_7576f3e8622589e1dd3ef23896c305f3.jpg?output-format=webp",
  bestDish: {
	name: 'chocolate cake',
	image: 'https://b.zmtcdn.com/data/pictures/chains/9/2649/e202ef113e6cad530754f2f42737e86b.jpg'
},
},
{
	name: 'Biryani Blues',
	address: 'B-202 & 203, Supermart 1, DLF Phase 4, Gurgaon',
	location: 'Supermart 1, DLF Phase 4',
	category: 'CASUAL DINING',
	vote: '4.7',
	id:'4',
	cuisines: 'Biryani, Hyderabadi',
	cost: '1000',
	hours: '12 Noon to 12 Midnight(Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/8/301718/bb30e8235b351ce5fabdccaede64f583_featured_v2.jpg',
	backimage: 'https://b.zmtcdn.com/data/res_imagery/301718_CHAIN_dbe8d86f4def6c08427ef1c210444566.jpg',
  bestDish: {
	name: 'Chicken 65',
	image: 'https://b.zmtcdn.com/data/pictures/chains/8/301718/7ced5cf0e3dd161e752187a0c4c70b10.jpg'
},
},
{
	name: 'Tossin Pizza',
	address: 'SF-114, 1st Floor, Galleria Market, DLF Phase 4, Gurgaon',
	location: 'DLF Galleria, DLF Phase 4',
	category: 'CASUAL DINING',
	vote: '4.1',
	id:'5',
	cuisines: 'Pizza, Italian',
	cost: '900',
	hours: '12 Noon to 1AM(Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/305782/613d6e9c4abd4de17dd6c237fa2fd057_featured_v2.jpg',
	backimage: 'https://b.zmtcdn.com/data/res_imagery/305782_CHAIN_4b7168e93b071abfd983769d318829c5.jpg',
},
];
$scope.restraunt=restraunt[$routeParams.id-1];  //taking out value of :id from link will be used to show unique restraunt in restraunt.html page

$scope.getIngredients = function(url) {
	console.log(url)
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key b7f174c5e0e042979e576bd2ce176d59',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {
			var ingredients = response.data.outputs[0].data.concepts;
			$scope.ingredientss=[];
				for (var i =0;i < ingredients.length;i++) {
	$scope.ingredientss.push(ingredients[i].name);
	}


				console.log($scope.ingredientss);
				var Dia_dis = document.querySelector('#displays');
				Dia_dis.show();
				$('.mains').addClass('blur');

var harmful_ingredients=['Chocolate' ,'cake', 'cupcake', 'ice cream' ,'candy', 'sugar']; //an array of harmful_ingredients
var inform=0;
for(var j=0;j<$scope.ingredientss.length;j++){    //checking for harmful_ingredients in $scope.ingredientss
	for(var k=0;k<harmful_ingredients.length;k++){
	if(harmful_ingredients[k]==$scope.ingredientss[j]){
		inform=1;
		break;
	}
}
}
if(inform==1){
	$scope.values="Item is not safe for diabetic person.";
}
else{
	$scope.values="Item safe for diabetic person.";
}

$scope.closedig = function(url){
	Dia_dis.close();
	$('.mains').removeClass('blur');
}


        }, function (xhr) {
        	console.log(xhr);
        })
	}


})

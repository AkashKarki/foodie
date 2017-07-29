

var foodie = angular.module('foodie',['ngRoute']);


foodie.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'RestrauntController'
	})
  .when('/restraunt/:id',{
		templateUrl: 'pages/restaurant.html',
		controller: 'showRestraunt'
	})
})


foodie.controller('RestrauntController',function($scope) {
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
]
})





foodie.controller('loginController',function($scope,$location) {
	$scope.goTohome = function() {
		$location.url('home')
	}
})




foodie.controller('showRestraunt',function($scope,$routeParams,$http) {
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
];
$scope.restraunt=restraunt[$routeParams.id-1];

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
  			var list = '';
  			for (var i =0;i < ingredients.length;i++) {
  				list += '<div class="ingredient">' + ingredients[i].name + '</div>'
  			}
    		// $('.ingredients').html(list);
    		console.log(list);
        }, function (xhr) {
        	console.log(xhr);
        })
	}


})

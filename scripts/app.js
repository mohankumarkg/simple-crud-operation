var app = angular.module("myModule", [])
							   .controller("myController", function($scope){
			
								$scope.newProdcut = {};
								
								$scope.products = [];


								$scope.products = [
							      {
							        name : "Grain",
							        rate : "25",
							        quality: "1",
							        editable : false
							      },
							      {
							        name : "Bread",
							        rate : "20",
							        quality: "2",
							        editable : false
							      },
							      {
							        name : "Rolls, buns",
							        rate : "35",
							        quality: "1",
							        editable : false
							      },
							      {
							        name : "Cakes",
							        rate : "50",
							        quality: "1",
							        editable : false
							      },
							    ];
														
								$scope.saveProduct = function(){
									$scope.products.push($scope.newProdcut);
									$scope.newProdcut = {};
								};	

								$scope.deleteProduct = function(index){
	           					 $scope.products.splice(index,1);
	 							};					
						});
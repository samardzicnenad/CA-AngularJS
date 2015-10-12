'use strict';

angular.module('The Best Sellers', []).controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Amazon 10 Best Sellers in Books';
    $scope.comment = 'On October 5, 2015';
    $scope.products = [
    {
        name: 'Go Set a Watchman: A Novel',
        price: 16.07,
        pubdate: new Date('2015', '06', '14'),
        cover: 'images/go_set_a_watchman.jpg',
        likes: 0,
        dislikes: 0
    },
    {
        name: 'The Life-Changing Magic of Tidying Up',
        price: 10.54,
        pubdate: new Date('2014', '09', '14'),
        cover: 'images/the_life-changing_magic_of_tidying_up.jpg',
        likes: 0,
        dislikes: 0
    },
    {
        name: 'StrengthsFinder 2.0',
        price: 15.04,
        pubdate: new Date('2007', '01', '01'),
        cover: 'images/strengths_finder_2.0.jpg',
        likes: 0,
        dislikes: 0
    },
    {
        name: 'First 100 Words',
        price: 3.30,
        pubdate: new Date('2011', '04', '10'),
        cover: 'images/first_100_words.jpg',
        likes: 0,
        dislikes: 0
    },
    {
        name: 'Secret Garden',
        price: 9.76,
        pubdate: new Date('2013', '02', '26'),
        cover: 'images/secret_garden_an_inky_treasure_hunt_and_coloring_book.jpg',
        likes: 0,
        dislikes: 0
    },
    {
        name: 'The Girl on the Train',
        price: 13.47,
        pubdate: new Date('2015', '00', '13'),
        cover: 'images/the_girl_on_the_train.jpg',
        likes: 0,
        dislikes: 0
    },
    {
        name: 'All the Light We Cannot See',
        price: 15.29,
        pubdate: new Date('2014', '04', '06'),
        cover: 'images/all_the_light_we_cannot_see.jpg',
        likes: 0,
        dislikes: 0
    },
    {
        name: 'To Kill a Mockingbird',
        price: 5.15,
        pubdate: new Date('1988', '09', '11'),
        cover: 'images/to_kill_a_mockingbird.jpg',
        likes: 0,
        dislikes: 0
    },
    {
        name: 'Oh, The Places You\'ll Go!',
        price: 11.99,
        pubdate: new Date('1990', '00', '22'),
        cover: 'images/oh_the_places_you\'ll_go.jpg',
        likes: 0,
        dislikes: 0
    },
    {
        name: 'Enchanted Forest: An Inky Quest & Coloring Book',
        price: 9.95,
        pubdate: new Date('2015', '01', '17'),
        cover: 'images/enchanted_forest_an_inky_quest_and_coloring_book.jpg',
        likes: 0,
        dislikes: 0
    }
    ];
    $scope.plusOne = function(index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function(index) {
        $scope.products[index].dislikes += 1;
    };
}]);

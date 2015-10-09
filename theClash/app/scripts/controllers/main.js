'use strict';

angular.module('theClash').controller('bandController', ['$scope', function($scope) {
    $scope.logo_black = 'images/logo_b.jpg';
    $scope.logo_white = 'images/logo_w.jpg';
    $scope.members = [
        {
            general: {
                name: 'Joe Strummer',
                image: 'images/strummer.jpg',
                occupations: 'musician, songwriter, radio host, actor',
                instrument: 'vocals, guitar',
                associated: 'The 101ers, The Clash, The Latino Rockabilly War, The Pogues, The Mescaleros'
            },
            bio: 'John Graham Mellor (21 August 1952 – 22 December 2002), known by his stage name Joe Strummer, was a British musician, singer, actor and songwriter who was the co-founder, lyricist, rhythm guitarist and lead vocalist of the Clash, a punk rock band that formed in 1976 as part of the original wave of British punk. His musical experience included his membership of the 101ers, Latino Rockabilly War, the Mescaleros and the Pogues, in addition to his own solo music career. Strummer\'s work as a musician allowed him to explore other interests, which included acting, creating film scores for television and movies, songwriting, radio broadcasting, and a position as a radio host. Strummer is one of the iconic figures of the British punk movement. Strummer and the Clash were inducted into the Rock and Roll Hall of Fame in January 2003. In his remembrance, Strummer\'s friends and family have established the Strummerville Foundation for the promotion of new music, and each year there are many festivals and both organised and spontaneous ceremonies worldwide to celebrate his memory.'
        },
        {
            general: {
                name: 'Mick Jones',
                image: 'images/jones.jpg',
                occupations: 'musician, songwriter, producer',
                instrument: 'guitar, vocals',
                associated: 'The Clash, General Public, Big Audio Dynamite, Carbon/Silicon, Gorillaz, London SS, The Wallflowers The Libertines'
            },
            bio: 'Michael Geoffrey "Mick" Jones (born 26 June 1955) is a British musician, guitarist, vocalist and songwriter best known for his works with the Clash until his dismissal in 1983, then Big Audio Dynamite with Don Letts before line-up changes led to the formation of Big Audio Dynamite II and finally Big Audio. Jones plays with Carbon/Silicon along with Tony James and recently toured the world as part of the Gorillaz live band (which includes former Clash member Paul Simonon). In late 2011, Jones collaborated with Pete Wylie and members of the Farm to form The Justice Tonight Band. He is also known for producing The Libertines\' first two albums Up the Bracket and The Libertines.'
        },
        {
            general: {
                name: 'Paul Simonon',
                image: 'images/simonon.jpg',
                occupations: 'bass guitarist, visual artist, vocalist, songwriter',
                instrument: 'bass guitar',
                associated: 'The Clash, Havana 3am, The Good, the Bad and the Queen, Gorillaz'
            },
            bio: 'Paul Gustave Simonon (born 15 December 1955) is an English musician and artist best known as the bass guitarist for punk rock band the Clash. More recent work includes his involvement in the project The Good, the Bad & the Queen in 2007 with Damon Albarn, Simon Tong and Tony Allen and the Gorillaz album, Plastic Beach in 2010, which along with Albarn saw him reunite with Mick Jones.'
        },
        {
            general: {
                name: 'Topper Headon',
                image: 'images/headon.jpg',
                occupations: 'drummer, percussionist, songwriter',
                instrument: 'drums, percussions',
                associated: 'The Clash, Mirkwood, Bobby Tench, Jimmy Helms, Mick Gallagher'
            },
            bio: 'Nicholas Bowen "Topper" Headon (born 30 May 1955), known as "Topper" because of his resemblance to Mickey the Monkey from the Topper comic, is an English rock and roll drummer, best known for his membership of the punk rock band the Clash. Writing for Allmusic, critic Greg Prato stated that record producer Sandy Pearlman dubbed Headon as "The Human Drum Machine", due to his impeccable timing and drumming skills.'
        }
    ];
}]);

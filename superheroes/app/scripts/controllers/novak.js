'use strict';

angular.module('Superheroes').controller('NovakControler', ['$scope', function($scope) {
    $scope.ccs = [
    {
        id: 2357,
        name: 'Aquaman',
        site_detail_url: 'http://www.comicvine.com/aquaman/4005-2357/',
        real_name: 'Arthur Curry',
        concept_incarnations: {},
        birth: 'unknown',
        origin: 'Other',
        deck: 'The son of an Atlantean queen and a lighthouse keeper from the town of Amnesty Bay, Arthur Curry would grow up to become the superhero Aquaman, and later take on his birthright as the King of Atlantis. He is a founding member of the Justice League and is among DC Comics\' most recognized heroes.',
        aliases: 'Orin, Aquafresh, King Arthur, King of Atlantis, Aquatic Ace, Dweller in the Depths, King of the Seven Seas, Lord of the Deep, Marine Marvel, Atlan-Son...',
        publisher: 'DC Comics',
        issue: 'More Fun Comics No.73',
        issue_url: 'http://www.comicvine.com/more-fun-comics-73/4000-116392/',
        date: 'November 1, 1941',
        type: 'character',
        image: 'images/2357P.jpg'
    },
    {
        id: 1699,
        name: 'Batman',
        site_detail_url: 'http://www.comicvine.com/batman/4005-1699/',
        real_name: 'Bruce Wayne',
        concept_incarnations: {},
        birth: 'February 19, 1972',
        origin: 'Human',
        deck: 'Bruce Wayne, who witnessed the murder of his billionaire parents as a child, swore to avenge their deaths. He trained extensively to achieve mental and physical perfection, mastering martial arts, detective skills, and criminal psychology. Costumed as a bat to prey on criminals\' fears, and utilizing a high-tech arsenal, he became the legendary Batman.',
        aliases: 'The Caped Crusader, The Dark Knight, The Dark Knight Detective, Matches Malone, Gotham Knight Detective, Bats, The Bat, Knight of Vengeance, Jack Shaw, God of Knowledge...',
        publisher: 'DC Comics',
        issue: 'Detective Comics No.27 - The Case of the Chemical Syndicate',
        issue_url: 'http://www.comicvine.com/detective-comics-27-the-case-of-the-chemical-syndi/4000-105764/',
        date: 'May 1, 1939',
        type: 'character',
        image: 'images/1699P.jpg'
    },
    {
        id: 1442,
        name: 'Captain America',
        site_detail_url: 'http://www.comicvine.com/captain-america/4005-1442/',
        real_name: 'Steven Rogers',
        concept_incarnations: {},
        birth: 'July 4, 1920',
        origin: 'Human',
        deck: 'During World War II, U.S. Army soldier Steve Rogers volunteered to receive the experimental Super-Soldier Serum. Enhanced to the pinnacle of human physical potential, he became Captain America. After a failed mission left him encased in ice for decades, he was found and revived by the Avengers, later becoming the team\'s leader.',
        aliases: 'The Sentinel of Liberty, Super-Soldier, Star-Spangled Avenger, The Nomad, The Living Legend, The Captain, Brett Hendrick, Buck Jones, Yeoman America, Crossbones, Nathan Hale, Anthony Schwarz, Roger Grant, Steven Gran, First Avenger...',
        publisher: 'Marvel',
        issue: 'Captain America Comics No.1 - Meet Captain America',
        issue_url: 'http://www.comicvine.com/captain-america-comics-1-meet-captain-america/4000-107870/',
        date: 'March 1, 1941',
        type: 'character',
        image: 'images/1442P.jpg'
    },
    {
        id: 56321,
        name: 'Flash',
        site_detail_url: 'http://www.comicvine.com/flash/4015-56321/',
        real_name: '',
        concept_incarnations: [
            {
                real_name: 'Jason Peter Garrick',
                birth: 'unknown',
                deck: 'Jason Peter "Jay" Garrick is the original, Golden Age, super-speedster, and was the first to have the mantle of the Flash and a founder of the Justice Society of America. It was Jay Garrick\'s legendary heroics that inspired Barry Allen. Currently Jay Garrick resides on Earth-2 as that world\'s version of The Flash.',
                aliases: 'Golden Age Flash, Man of Speed...'
            },
            {
                real_name: 'Bartholomew Henry Allen',
                birth: 'unknown',
                deck: 'After being doused in chemicals and struck by lightning, forensic scientist Barry Allen was granted the gift of super-speed. He now protects his hometown of Central City as The Flash, founding member of the Justice League and the fastest man alive.',
                aliases: 'The Black Flash, The Human Bolt, Crimson Speedster, Der Rote Blitz, God of Death...'
            },
            {
                real_name: 'Wallace Rudolph West',
                birth: 'unknown',
                deck: 'Taking on the name Kid Flash in honor of his uncle Barry "Flash" Allen, Wallace Rudolph "Wally" West would eventually become The Flash after the death of his mentor. Wally was an original member of the Teen Titans, a member of the JLA and the fastest man alive even among his fellow speedsters.',
                aliases: 'Kid Flash, Scarlet Speedster, The Crimson Tornado, Facets, The Keystone Cop...'
            },
            {
                real_name: 'Jessica Belle Chambers',
                birth: 'unknown',
                deck: 'Jesse Chambers is the daughter of the original Liberty Belle and Johnny Quick. She previously operated under the name Liberty Belle as a member of the JSA. She also was a leader of The Titans as Jesse Quick, and is currently a member of the Justice League of America',
                aliases: 'Jesse Quick, Liberty Belle...'
            },
            {
                real_name: 'Bartholomew Henry Allen II',
                birth: 'unknown',
                deck: 'Hailing from the 30th century, Bart Allen is the grandson of the Flash, Barry Allen. Utilizing the same powers, of super-speed, possessed by his Grandfather, Bart fights crime alongside the Teen Titans as  Kid Flash.',
                aliases: 'Impulse, Monkey, Stupidest Boy Dead, Sunshine, The Goof...'
            }
        ],
        birth: 'unknown',
        origin: 'Human',
        deck: 'Known as the Scarlet Speedster or The Fastest Man Alive, the mantle of The Flash has been donned by different heroes over the years.',
        aliases: '',
        publisher: 'DC Comics',
        issue: 'Flash Comics No.1 - Origin of the Flash',
        issue_url: 'http://www.comicvine.com/flash-comics-1-origin-of-the-flash/4000-116418/',
        date: 'January 1, 1940',
        type: 'concept',
        image: 'images/56321L.jpg'
    },
    {
        id: 41148,
        name: 'Green Lantern',
        site_detail_url: 'http://www.comicvine.com/green-lantern/4015-41148/',
        real_name: '',
        concept_incarnations: [
            {
                real_name: 'Alan Scott',
                birth: 'unknown',
                deck: 'Alan Scott, the bearer of the mystical Starheart, is the original Golden Age Green Lantern and a founding member of the Justice Society of America. An all-time great, Alan continues to fight for truth, justice and freedom well into old age as a member of the Justice Society. He has now been introduced as an iconic gay character in DC\'s new reboot, The New 52.',
                aliases: 'Sentinel, Man of Green, White King, Keeper of the Starheart, Emerald Gladiator...'
            },
            {
                real_name: 'Harold Jordan',
                birth: 'unknown',
                deck: 'With the ability to overcome great fear and harness the power of will, test-pilot Hal Jordan was chosen to be the Green Lantern of Sector 2814 inheriting the ring of the dying alien Green Lantern, Abin Sur. Through sheer will power and determination, Hal has established an impressive record of heroism across the galaxy with the help of his fellow Green Lanterns as well as his peers in the JLA.',
                aliases: 'Spectre, Red Lantern, Green Lantern 2814.1, Brightest Light In The Universe, Grüner Gladiator...'
            },
            {
                real_name: 'John Stewart',
                birth: 'unknown',
                deck: 'Formerly an architect, social activist, and U.S. Marine sniper, John Stewart was selected by the Guardians of the Universe to be one of the Green Lanterns for Sector 2814. His distinguished service in the Corps has resulted in a place among the Oan Honor Guard and the position of chief trainer for new Lantern recruits.',
                aliases: 'Green Lantern 2814.2, Darkstar, Hunger Dog, Master Builder...'
            },
            {
                real_name: 'Guy Darrin Gardner',
                birth: 'unknown',
                deck: 'Guy Gardner started out as the backup Green Lantern for Hal Jordan. He has since become one of the most prominent Green Lanterns of the Corps, despite possessing an egocentric personality. He has recently deserted his Green Power Ring in favor of the Red Ring of rage. Guy\'s will and rage are some of the most impressive in the entire Emotional Spectrum.',
                aliases: 'Warrior, The Grinder, The Crazy One, Green Lantern of Sector 2814.3, The Gardner...'
            },
            {
                real_name: 'Kyle Rayner',
                birth: 'unknown',
                deck: 'Originally thought to be chosen by chance, Ganthet chose Kyle Rayner because he had the ability to harness the powers of the emotional spectrum. Once the Torchbearer of the Green Lantern Corps, Kyle has since graduated to the role Ganthet had intended for him: the White Lantern. Kyle is the most powerful Lantern.',
                aliases: 'Ion, Parallax, Torch Bearer, White Lantern, Green Man...'
            },
            {
                real_name: 'Simon Baz',
                birth: 'unknown',
                deck: 'Simon Baz is an officer of the Green Lantern Corp\'s Space Sector 2814 and was a member of Steve Trevor’s Justice League of America. He received the fused power ring of Hal Jordan and Thaal Sinestro after their power rings presumed them both dead during the events of Rise of the Third Army.',
                aliases: 'Baz...'
            },
            {
                real_name: 'Other Notable Lanterns:',
                birth: 'unnecessary',
                deck: 'Ganthet, Abin Sur, Soranik Natu, Kilowog, Tomar Re, Salaak, Sodam Yat, Mogo, Jade, Hannu, Ch\'p, Arisia Rrab, Iolande, Laira, Katma Tui...',
                aliases: ''
            }
        ],
        birth: 'unknown',
        origin: 'Human',
        deck: 'A Green Lantern is an officer of the intergalactic police force known as the Green Lantern Corps, who have the ability to overcome great fear with the might of willpower. They possess power rings capable of creating constructs characterized by their will and strength to use it. Each Green Lantern is given a Sector of the Universe to protect and it is their priority to suppress any threat against their sector.',
        aliases: '',
        publisher: 'DC Comics',
        issue: 'All American Comics No.16 - The Origin of the Green Lantern',
        issue_url: 'http://www.comicvine.com/all-american-comics-16-the-origin-of-the-green-lan/4000-123898/',
        date: 'July 1, 1940',
        type: 'concept',
        image: 'images/41148L.jpg'
    },
    {
        id: 1696,
        name: 'Harley Quinn',
        site_detail_url: 'http://www.comicvine.com/harley-quinn/4005-1696/',
        real_name: 'Harleen Frances Quinzel',
        concept_incarnations: {},
        birth: 'unknown',
        origin: 'Human',
        deck: 'Harleen Quinzel, the Arkham psychiatrist who fell in love with the Joker. A "mad love" would lead her to a life of crime as Harley Quinn, frequent accomplice, and would-be-girlfriend of the Clown Prince of Crime. In The New 52, she is a member of the Suicide Squad.',
        aliases: 'Dr.Holly Chance, Dr.Jessica Seaborn, Lee Harkwin, Holly Quinn',
        publisher: 'DC Comics',
        issue: 'The Batman Adventures No.12 - Batgirl: Day One',
        issue_url: 'http://www.comicvine.com/the-batman-adventures-12-batgirl-day-one/4000-37736/',
        date: 'September 1, 1993',
        type: 'character',
        image: 'images/1696P.jpg'
    },
    {
        id: 8337,
        name: 'Hawkman',
        site_detail_url: 'http://www.comicvine.com/hawkman/4005-8337/',
        real_name: 'Katar Hol',
        concept_incarnations: {},
        birth: 'unknown',
        origin: 'Alien',
        deck: 'Carter Hall, now infused with the mysterious Nth Metal, is granted flight, strength and a living armor. He battles dangerous threats, both alien and mystical, as the savage Hawkman.',
        aliases: 'Carter Hall, Khufu, Savage Hawkman,Fel Andar, Charley Parker...',
        publisher: 'DC Comics',
        issue: 'Flash Comics No.1 - Origin of the Flash',
        issue_url: 'http://www.comicvine.com/flash-comics-1-origin-of-the-flash/4000-116418/',
        date: 'January 1, 1940',
        type: 'character',
        image: 'images/8337P.jpg'
    },
    {
        id: 1702,
        name: 'Joker',
        site_detail_url: 'http://www.comicvine.com/joker/4005-1702/',
        real_name: 'Jack Napier',
        concept_incarnations: {},
        birth: 'April 1, 1940',
        origin: 'Human',
        deck: 'The Joker, Clown Prince of Crime, is Batman\'s arch-nemesis. An agent of chaos known for his purple three-piece suit and insidious smile, he has caused Batman more suffering than any other villain he has ever faced. His origin, name, and true motivations remain a mystery.',
        aliases: 'Clown Prince of Crime , Harlequin of Hate, Public Enemy #1, Mr.Rekoj, Nemesis of The Knight, Mr.Face Paint, Red Hood, Joe White, Jocund Jack of All Crimes, Eric Border, Oberon Sexton, The Clown at Midnight, Joseph Kerr, The Pale Man...',
        publisher: 'DC Comics',
        issue: 'Batman Comics No.1 - The Legend of the Batman: Who He Is and How He Came To Be; The Joker',
        issue_url: 'http://www.comicvine.com/batman-1-the-legend-of-the-batman-who-he-is-and-ho/4000-105811/',
        date: 'April 1, 1940',
        type: 'character',
        image: 'images/1702P.jpg'
    },
    {
        id: 8332,
        name: 'Krypto',
        site_detail_url: 'http://www.comicvine.com/krypto/4005-8332/',
        real_name: 'Krypto',
        concept_incarnations: {},
        birth: 'unknown',
        origin: 'Alien',
        deck: 'Krypto is Superman\'s Kryptonian dog. He possesses all of the sun-borne abilities of his master, as well as super-canine intelligence. He has also appeared in his own cartoon series.',
        aliases: 'Skip, Shellby, The Hound of Steel, K-Dog, Mutt, Wolf...',
        publisher: 'DC Comics',
        issue: 'Adventure Comics No.210',
        issue_url: 'http://www.comicvine.com/adventure-comics-210/4000-128752/',
        date: 'March 1, 1955',
        type: 'character',
        image: 'images/8332P.jpg'
    },
    {
        id: 41952,
        name: 'Lex Luthor',
        site_detail_url: 'http://www.comicvine.com/lex-luthor/4005-41952/',
        real_name: 'Alexander Joseph Luthor',
        concept_incarnations: {},
        birth: 'unknown',
        origin: 'Human',
        deck: 'Lex Luthor, Superman\'s arch-nemesis, is one of the most gifted beings alive, whose hatred of "interfering aliens" pushes him down the path of a sociopath. Known for his "ends justifies the means" approach to life, his single-minded and often brutal focus puts him at odds with The Man of Steel. Lex Luthor is arguably DC Comic\'s most iconic villain.',
        aliases: 'Chrome-Dome, Mockingbird, Mr. Clean, The Metropolis Mogul, President Luthor, Snapdragon, Icarus, God of Apokolips...',
        publisher: 'DC Comics',
        issue: 'Superman No.4 - Superman Versus Luthor',
        issue_url: 'http://www.comicvine.com/superman-4-superman-versus-luthor/4000-110651/',
        date: 'March 1, 1940',
        type: 'character',
        image: 'images/41952P.jpg'
    },
    {
        id: 4885,
        name: 'Penguin',
        site_detail_url: 'http://www.comicvine.com/penguin/4005-4885/',
        real_name: 'Oswald Chesterfield Cobblepot',
        concept_incarnations: {},
        birth: 'unknown',
        origin: 'Human',
        deck: 'Intelligent, rich and sophisticated; Oswald Cobblepot puts up a gentlemanly front, but behind closed doors he is the angered, power hungry criminal known as The Penguin. He shows flashes of compassion sometimes, but he is dominated by a desire to be respected and to control those around him.',
        aliases: 'Mr.Boniface, Sardine Breath, Oswald Cobblepot, Pengy, The Man of a Thousand Umbrellas, Gentleman of Crime, Bird of Prey, Gobble-Gobble, Foul-Feathered Fowl, The Grotesque Bird of Ill-Omen, The Blackbird of Banditry, The Pedantic Patriarch of Predators...',
        publisher: 'DC Comics',
        issue: 'Detective Comics No.58 - One Of The Most Perfect Frame-Ups',
        issue_url: 'http://www.comicvine.com/detective-comics-58-one-of-the-most-perfect-frame-/4000-112089/',
        date: 'December 1, 1941',
        type: 'character',
        image: 'images/4885P.jpg'
    },
    {
        id: 3718,
        name: 'Riddler',
        site_detail_url: 'http://www.comicvine.com/riddler/4005-3718/',
        real_name: 'Edward Nigma',
        concept_incarnations: {},
        birth: 'unknown',
        origin: 'Human',
        deck: 'Edward Nigma is a villain obsessed with riddles, puzzles, and brain teasers, who took the alias of the Riddler to commit crimes. Riddler frequently tries to outsmart Gotham\'s hero Batman, but is always defeated by the Dark Knight. After spending some time \'reformed\' working as a Private Investigator in Gotham, he has returned to his old villainous ways.',
        aliases: 'The Prince of Puzzles, Quizmaster, Edward Nashton, Arthur Wynne, Mr. E.Nigma, The Crown Prince of Conundrums, Wizard of Quiz, The Puzzle King, Conundrum Champion, Mockingbird...',
        publisher: 'DC Comics',
        issue: 'Detective Comics No.140 - The Riddler!',
        issue_url: 'http://www.comicvine.com/detective-comics-140-the-riddler/4000-112214/',
        date: 'October 1, 1948',
        type: 'character',
        image: 'images/3718P.jpg'
    },
    {
        id: 56363,
        name: 'Robin',
        site_detail_url: 'http://www.comicvine.com/robin/4015-56363/',
        real_name: '',
        concept_incarnations: [
            {
                real_name: 'Richard John Grayson-Wayne',
                birth: 'Mar 20, 1991',
                deck: 'As the first Robin, Dick Grayson was one of the most famous sidekicks in fiction before maturing into the independent hero Nightwing. Dick was also a founding member of the Teen Titans and an auxiliary member of the Justice League. After Ultraman revealed his identity to the world, Dick faked his death with Batman\'s help and went undercover to infiltrate the global spy organization Spyral.',
                aliases: 'Nightwing, The World\'s Greatest Acrobat, The Target, Renegade, The Boy Wonder...'
            },
            {
                real_name: 'Jason Peter Todd',
                birth: 'Aug 16, 1995',
                deck: 'Jason Todd was the second Robin, brutally murdered by the Joker. Resurrected, Jason initially turned against his mentor for not putting an end to the Joker after his death, taking on the Clown Prince\'s former codename: the Red Hood. Now on a path to redemption, but keeping the alias and the deadly force, Jason has found his way back into the Bat Family and uses the skills Batman taught him as an anti-hero.',
                aliases: 'Red Hood, Red Robin, Wingman, Jaybird, Arkham Knight...'
            },
            {
                real_name: 'Timothy Jackson Drake',
                birth: 'Jul 19, 1997',
                deck: 'At the age of nine, Timothy Drake cleverly deduced the identities of Batman and Robin. Four years later, after the death of Jason Todd, Tim convinced Batman that he should be the new Robin. Eventually resigning as Robin, he is now Red Robin, the leader of the Teen Titans.',
                aliases: 'Alvin Draper, Tim Wayne, Spectacular Sunbird, Cal Corcoran, Batman Beyond...'
            },
            {
                real_name: 'Stephanie Brown',
                birth: 'Aug 11, 1992',
                deck: 'Stephanie Brown is the Cluemaster\'s daughter, and Timothy Drakes\' Girlfriend. She becomes the Spoiler to "spoil" her father\'s criminal plots. When Tim Drake is forced to give up the mantle of Robin, Steph takes it on and fails. Later, Cassandra Cain decides to pass on the mantle of Batgirl to Stephanie. In the New 52, she\'s back to being The Spoiler.',
                aliases: 'Spoiler, Batgirl, Girl Wonder, Katavi...'
            },
            {
                real_name: 'Damian Wayne',
                birth: 'unknown',
                deck: 'Damian Wayne is the son of Bruce Wayne and Talia al Ghul. Trained by the League of Assassins all his life, Damian joined his father’s side in the war against crime by becoming the fifth Robin. Damian later met his demise at the hands of his adult clone, The Heretic. Now returned from the dead, Damian Wayne is now ready to fight crime on a different level with his new superhuman abilities.',
                aliases: 'Damian al Ghul, Redbird, Ibn al Xu\'ffasch...'
            }
        ],
        birth: 'unknown',
        origin: 'Human',
        deck: 'The patron saint of superhero sidekicks, several young people have taken on the role of Robin, Batman\'s partner in the battle against crime: Dick Grayson was the first, followed by Jason Todd, Tim Drake, and Stephanie Brown. Damian Wayne was the most recent Robin, using the title until his death.',
        aliases: '',
        publisher: 'DC Comics',
        issue: 'Detective Comics No.38 - Introducing Robin, the Boy Wonder',
        issue_url: 'http://www.comicvine.com/detective-comics-38-introducing-robin-the-boy-wond/4000-111907/',
        date: 'April 1, 1940',
        type: 'concept',
        image: 'images/56363L.jpg'
    },
    {
        id: 1443,
        name: 'Spider-Man',
        site_detail_url: 'http://www.comicvine.com/spider-man/4005-1443/',
        real_name: 'Peter Benjamin Parker',
        concept_incarnations: {},
        birth: 'Oct 14, 1962',
        origin: 'Radiation',
        deck: 'Peter Parker was bitten by a radioactive spider as a teenager, granting him spider-like powers. After the death of his Uncle Ben, which he could have prevented, Peter learned that "with great power, comes great responsibility." Swearing to always protect the innocent from harm, Peter Parker became the Amazing Spider-Man!',
        aliases: 'Captain Universe, Dusk, Hornet, Prodigy, Ricochet, Bombastic Bag-Man, Poison, Pestilence, Spidey, Wallcrawler, Webslinger, Web-Head...',
        publisher: 'Marvel',
        issue: 'Amazing Fantasy No.15 - Spider-Man!',
        issue_url: 'http://www.comicvine.com/amazing-fantasy-15-spider-man/4000-105342/',
        date: 'August 15, 1962',
        type: 'character',
        image: 'images/1443P.jpg'
    },
    {
        id: 1807,
        name: 'Superman',
        site_detail_url: 'http://www.comicvine.com/superman/4005-1807/',
        real_name: 'Kal-El / Clark Joseph Kent',
        concept_incarnations: {},
        birth: 'Jun 18, 1971',
        origin: 'Alien',
        deck: 'Rocketed to Earth as an infant from the doomed planet Krypton, Kal-El was adopted by the loving Kent family and raised in America\'s heartland as Clark Kent. Using his immense solar-fueled powers, he became Superman to defend mankind against all manner of threats while championing truth, justice and the American way!',
        aliases: 'Gangbuster, Nightwing, Jordan Elliot, The Action Ace, The Big Blue Boy Scout, The Last Son of Krypton, The Man of Might, The Man of Steel, The Man of Tomorrow, Marc Costa, Nembo Kid, Aksel, Archie Clayton, Clark White, God of Strength...',
        publisher: 'DC Comics',
        issue: 'Action Comics No.1 - Superman, Champion of the Oppressed...',
        issue_url: 'http://www.comicvine.com/action-comics-1-superman-champion-of-the-oppressed/4000-105403/',
        date: 'June 1, 1938',
        type: 'character',
        image: 'images/1807P.jpg'
    },
    {
        id: 2048,
        name: 'Wonder Woman',
        site_detail_url: 'http://www.comicvine.com/wonder-woman/4005-2048/',
        real_name: 'Diana of Themyscira',
        concept_incarnations: {},
        birth: 'unknown',
        origin: 'God/Eternal',
        deck: 'The princess of the Amazons, Wonder Woman is one of Earth\'s most powerful defenders of peace and equality and a member of the Justice League. She is often considered an archetype for the comic book superheroine. Her original origin depicted her as a clay figure brought to life by the gods, but in recent years she has been depicted as the daughter of Zeus and the Amazon queen Hippolyta.',
        aliases: 'Diana Prince, Princess Diana, Goddess of Truth, Wondy, Wonder Girl, The Amazon Princess...',
        publisher: 'DC Comics',
        issue: 'All-Star Comics No.8',
        issue_url: 'http://www.comicvine.com/all-star-comics-8/4000-116412/',
        date: 'December 1, 1941',
        type: 'character',
        image: 'images/2048P.jpg'
    }
    ];
}]);

///            original Creator: Akira Wong, adapted by Thom Page      /////

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////
////////////////////////////////           SPACE BATTLE  -  ( or Arnold vs the aliens )
////////////////////////////////
////////////////////////////////                A console.log javascript game by: Brian Loveless
////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

alert(
    "Welcome to Brian's Space Battle page ! - open the console log on the following page to play . Hurry the fate of the planet is at your fingertips Captian! If you chose to retreat at any time just leave the page. But know that choice has doomed Earth! ",
);

//// future thoughts ///
///// array of "lives" - have four start on 1 and 3 more tries before the aliens destroy earth
// let myLives = ["L","L","L"];
//// if you die access array an remove life
// myLives[myLives.length] = "X";
// myLives.splice(0,1);
//// game over if
// myLives = ["X","X","X"]

///////////////////////
///        game below
//////////////////////

/// after you move results

const battleWinCheck = badGuy => {
    if (badGuy.hull <= 0) {
        console.log("You blew up " + badGuy.name + " Nice job!");
        victory();
    } else {
        console.log("keep shooting nice attack keep playing");
    }
};

/// check if game is over -------******** if yes alert oh joy --- else ... if not over have next alien ship in [ bad guys ] attack you

const didIWin = () => {
    if (badGuys[0] === "dead") {
        // this is working now
        console.log(
            "%c Congrats there winner winner chicken dinner for you!",
            "font-size:18px; background:darkgreen; color:white; border: 4px dashed gold;",
        );
        alert(
            "Awesome job playing you won !!!! Close this and refresh to play again",
        );
    } else {
        console.log(
            "%c ... There are still aliens left to kill ...",
            "background:red; color:white;",
        );
        console.log(
            "%c .. Look out here comes another one now ..",
            "background: lightyellow; color:red; font-size:15px;",
        );
        if (badGuys[2] === "dead") {
            badGuys[0].attack(youHero);
        } else {
            badGuys[0].fight(youHero); /// #5 and #6 will use more powerful mizzles to attack you - better use reddit to fix your hull captian they have unlimited shots upgraded hull fix to 2 times so can win  .........
        }
    }
};

///// lets make it so a bad guy ship can be destroyed if ship hull <= 0 remove first with splice add "dead" to the end of badGuys array when first ship in  array = "dead" then game over you got em all!
const victory = () => {
    if (badGuys[0].hull <= 0) {
        console.log(
            "%c !! Awesome !!.. you destroyed the alien ship ..!!",
            "background:orange; font-size:18px; border:3px solid green; color:white;",
        );
        badGuys[badGuys.length] = "dead";
        badGuys.splice(0, 1);
        didIWin();
    } else {
        console.log(
            "%c .. Good shot but they are still alive ..",
            "background:lightyellow; font-size:15px; color:red;",
        );
        didIWin();
    }
};

//// we will make it a game you can die...

const defeat = youHero => {
    if (youHero.hull <= 0) {
        console.log(
            "%c Game over you are dead.... Sorry - refresh the page to play again",
            "font-size:18px; background:darkgreen; color:white; border: 4px dashed gold;",
        );
        alert(
            ` Oh No your ship blew up ! The ${youHero.name} is gone! Close this annoying pop-up and refresh the page to try again Captian! Good thing it was just a simulation..... don't forget your engineers can search Reddit for a way to restore your hull power`,
        );
    } else {
        console.log(
            "%c ..... Your turn now captian enter your move below ..... ",
            "background:lightskyblue; color black; font-size:20px;",
        );
    }
};

//// missle array to limit big shots outside construcor...
/////// limit shield repairs like missles and lives
let enigneers = ["E", "E"];
this.myMissles = ["M", "M", "M", "M"];
/// none left to shoot when myMissles = ["o","o","o","o","o","o","o",etc...];

// hero ship constructor below

class Hero {
    constructor(name, hull, accuracy) {
        this.name = name;
        this.hull = hull || 20;
        this.accuracy = accuracy || 0.7;
        this.weapons = {
            lasers: 5,
            missles: myMissles.length,
        };
        this.catchPhrases = [
            "Get to the chopper!",
            "It's not a tumor!",
            `Consider that a divorce!`,
            `This ship is the Governator we are going to bring the pain!`,
        ];
    }
    talkSas() {
        let rUp = this.catchPhrases[
            Math.floor(Math.random() * this.catchPhrases.length)
        ];
        console.log(`${this.name}  says \"  ${rUp} \"`);
    }
    announceHealth() {
        console.log("I am" + this.name + "my shields are now " + this.hull);
    }
    useReddit() {
        if (enigneers[0] === "E") {
            enigneers[enigneers.length] = "o";
            enigneers.splice(0, 1);
            console.log(
                this.name +
                "we found the answer on Reddit! We fixed our shield generator hull strength improved",
            );
            this.hull += 10;
            this.announceHealth();
            console.log("%c It is still your turn", "background: lightskyblue;");
        } else {
            console.log(
                "%c Your engineers are all on a coffe break - sorry Captian they can't do it.... they do not have the power!",
                "background:lightskyblue;",
            );
        }
    }
    attack(badGuy) {
        if (this.hull >= 1) {
            //////attack with missles if you are still alive
            if (badGuy.name === badGuys[0].name) {
                //// attack the right bad guy
                if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
                    //// above random to determine if hit or not roughly 80% sucess rate
                    if (myMissles[0] == "M") {
                        ////// can only use certian amount of missles
                        console.log(this.talkSas());
                        console.log(this.name + " used  missles 10 hitpoints dealt");
                        console.log(
                            badGuy.name + " got hit with a missle, their health is down to",
                        );
                        console.log((badGuy.hull += -10));
                        myMissles[myMissles.length] = "o";
                        myMissles.splice(0, 1);
                        victory(badGuy); ///// check if you destroted the ship or not and they or the next one returns fire
                    } else {
                        console.log(
                            "%c awwww .... raaaattttssssssssssss...... you are out of missles switch to lasers",
                            "background:lightskyblue;",
                        );
                        ///// does not count as turn - could be typo
                        console.log(
                            "%c ..... it is still your turn now captian enter your move below ..... ",
                            "background:lightskyblue;",
                        );
                    }
                } else {
                    console.log(
                        "%c Awww hamburgers... You missed",
                        "background:lightgray; color:red;",
                    );
                    victory(badGuy); //// you missed but that was your turn they get to shoot at you now
                }
            } else {
                console.log(
                    "%c What are you shooting at ? dead aliens or the wrong target - choose another target or refresh the page to play again",
                    "background:black; color:white; font-size:20px;",
                );
                console.log(
                    "%c ..... Your turn now captian enter your move below ..... ",
                    "background:lightskyblue;",
                ); //// if you target a dead alien or .... does not count as turn - could be typo
            }
        } else {
            console.log("you are dead refresh the game to play again"); ///// if your hull is less than 1 and you are trying to attack still
        }
    }
    laser(badGuy) {
        if (this.hull >= 1) {
            //////attack with lasers if you are still alive ... /// ... following logic similiar to missle but no array to access for shot count since lasers are unlimited currently....
            if (badGuy.name === badGuys[0].name) {
                if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
                    /// above random to determine if hit or not roughly 80% sucess rate
                    console.log(this.talkSas());
                    console.log(
                        this.name +
                        " used laser " +
                        this.weapons.lasers +
                        " hitpoints dealt",
                    );
                    console.log(
                        badGuy.name +
                        " got hit with your - S - lasers, their health is down to",
                    );
                    console.log((badGuy.hull += -this.weapons.lasers));
                    victory(badGuy);
                } else {
                    console.log(
                        "%c Oh dang it dang it dang it.... that shot was close but unfortunately you missed ",
                        "background:lightskyblue;",
                    );
                    victory(badGuy);
                }
            } else {
                console.log(
                    "%c You are shooting dead aliens - choose another target or refresh the page to play again",
                    "background:black; color:white; font-size:20px;",
                );
                console.log(
                    "%c ..... it is still your turn now captian enter your move below ..... ",
                    "background:lightskyblue;",
                );
            }
        } else {
            console.log("you are dead refresh the game to play again"); ///// if your hull is less than 1 and you are trying to attack still
        }
    }
}

/// ok we have our hero ship / us / our character
let youHero = new Hero(" USS Schwarzenegger ");

// enemy ship constructor - same as hero but evil alien - not Governator

class Alienship {
    constructor(name) {
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3; //// make random between 3 & 6
        this.firepower = Math.floor(Math.random() * 3) + 2; /// make random between 2 & 4 for their lazers with a z ... /////////
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; ///// make random between .6 and .8 /////
        this.weapons = {
            lazers: Math.floor(Math.random() * 3) + 2, /// felt i need it here even though lazaer power might return different number that firepower above - it did not like using firepower in earlier versions...
            mizzle: 7,
        };
        this.catchPhrases = [
            "Puny humans you are no match for us!",
            "- Feel our alien wrath! ",
            `- How deep do you want to get probed huumoonnn? `,
            `- You are no match for our superior alien technology and intellect! `,
            `- Garp grrizzrr fluffn halftry schmoop! - what you thought they only spoke English? `,
            `- KLAATU BARADA NIKTO - what you thught that was just a movie? `,
            `- Not bad, for a huumooon ... now taste our wrath!`,
            `- Hope you like the taste of lazzzzerszzzssss huumoonnn...`,
            `- Jerry charge the mizzles and tell those dum huumons we come in peace so they let us just kill them !`,
            `- Put some butter and jelly on yourself huumon. You are now Toast ! `,
        ];
    }
    talkSmack() {
        let rIp = this.catchPhrases[
            Math.floor(Math.random() * this.catchPhrases.length)
        ];
        console.log(this.name + " says " + rIp);
    }
    announceHealth() {
        console.log(
            "We are the " + this.name + " our shields are now " + this.hull,
        );
    }
    fight(youHero) {
            if (this.name === badGuys[0].name) {
                if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
                    console.log(this.talkSmack());
                    console.log(
                        this.name + " used lazer " + this.weapons.lazers + " hitpoints dealt",
                    );
                    console.log(
                        "%c ........ take that huumooonns! .......",
                        "backgroundcolor:darkgreen; color:white;",
                    );
                    console.log(
                        "%c We got hit by alien lazers with a z  our hull power is down to ... ",
                        "background:lightskyblue; color:black; font-size:18px;",
                    );
                    console.log((youHero.hull -= this.firepower));
                    defeat(youHero); /// but did you die? also returns it to your move
                } else {
                    console.log(this.name + " can not hit the side of a barn. Lucky us!"); /// so you know who shot at you / who next target is
                    console.log(
                        "good those alien scumbags missed us " +
                        youHero.name +
                        "took no damage. Hull power at " +
                        youHero.hull,
                    ); /// you know they missed
                    defeat(youHero); /// returns to your move no damage dealt - live to fight another day
                }
            } else {
                console.log("dead aliens can't shoot"); // not sure how they would but just in case if simulating in console log with pre typed functions...
                //return to your move
                defeat(youHero);
            }
        }
        ///////// mizzles for the "boss" or last 2 enemies
    attack(youHero) {
        if (this.name === badGuys[0].name) {
            if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
                console.log(this.talkSmack());
                console.log(
                    this.name +
                    " used  mizzlez with a z dealing 7 hit points to you ship..",
                );
                console.log(
                    youHero.name +
                    " got hit with an alien Z * mizzle, their health is down to",
                );
                console.log((youHero.hull += -7)); /// had it set to this . mizzle but somehting was not working with it or  the random number so I hard coded it... sorry
                defeat(youHero); /// like above -_- but did you die?
            } else {
                console.log(this.name + "can not hit the side of a barn"); /// so you know who next target is when they appear but miss
                console.log(
                    "Ha! those aliens shoot like stormtroopers " +
                    youHero.name +
                    "took no damage. Hull power at" +
                    youHero.hull,
                ); /// you know they missed
                defeat(youHero); /// no damage awesome but return to your move with this
            }
        } else {
            console.log("dead aliens can't shoot"); // not sure how they would but just in case if simulating in console log with pre typed functions...
            //return to your move
            defeat(youHero);
        }
    }
}

// would need enemy ships in an array so they can be removed when dead - empty array = win game

let badGuys = [];

// need constructor function to push to empty bad-Guys array.
//// will build l;ast bad guy first then each subsequent pushed before it into array -
// cconstruct in reverse order because I want ship 1 to be first target .... it's my game....

badGuys.unshift((al6 = new Alienship("AL #6")));
badGuys.unshift((al5 = new Alienship("AL #5")));
badGuys.unshift((al4 = new Alienship("AL #4")));
badGuys.unshift((al3 = new Alienship("AL #3")));
badGuys.unshift((al2 = new Alienship("AL #2")));
badGuys.unshift((al1 = new Alienship("AL #1")));

/// they are generated with random attributes - a loop could auto create them but not sure how to have it give them each different names unless I tie it to an array of  names..... lots of other stuff to fix before that...  will have to use name of bad guy to attack them and name of badguy to attack us back..

/// ships exist yes x 6 for now hardcoded but random attributes on refresh
//// ships can fight and talk smack
//// ships attacks change enemys hull via damage incrementally

///// ********************************************************************** //////
//////////// * - * - * -  LET THE BATTLE (game) BEGIN !!!! * - * - * - /////////////

//// to set the story of the game with a little zaaz!

console.log(
    " %c........ Welcome to the Space Battle! You are captian of the USS Schwarzenegger - and there are 6 evil alien ships headed to destroy Earth! ........ ",
    "font-size: 15px; background:black; border: 2px solid red; color:white;",
);
console.log("......You must blow them all up to win the game..... ");
console.log(
    "......You have unlimited lasers (weak) to fire but a limited number of missles (strong) you can fire..... ",
);
console.log(
    "......The future has problems though someone spilled orange juice on the targeting computer you will make around 80% of you shots..... ",
);
console.log(
    "......The future has some bright spots also your amazing pilot will dodge some attacks and the aliens targeting computer will only make around 50% of their shots..... ",
);
console.log(
    "......Remember if you are getting whooped you can have your engineers search Reddit for a way to fix your hull but only twice...... ",
);
console.log(
    "......your ship is below check it out before you get started cilck the arrow...... ",
);
console.log(youHero);
console.log(
    "......your ship" +
    youHero.name +
    "has just left the moons orbit on its way to Kiber 7 for a ping pong tournament when...... ",
);
console.log(
    "%c......Beep Beep Beep Boop 'warning aliens detected ' Beep Beep Beep Boop......",
    "background: lightyellow; color:red; font-size:12px;",
);
console.log(
    "......There are 6 alien ships on our scanners Captian and I don't think they are friendly...... ",
);
console.log(
    "......You can see the scanner results below by clicking on the little arrow beside the (6) [Alienship, Alienship, ....] on the above line or a few lines up depending on your screen size it's right under the yellow beep warning...... ",
);
console.log(badGuys);
console.log(
    "......Brace yourselves they are charging weapons and they are opening fire...... ",
);
al1.fight(youHero); /// they shot first - how rude
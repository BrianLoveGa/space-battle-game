# Creator: Akira Wong, adapted by Thom Page

# space-battle-game

---

# SPACE BATTLE JS Console Log Basic GAME

A version by: **Brian Loveless**

I made this game as a Home work project for General Assemb.ly - software engineering immersive bootcamp in fall 2019.

---

<!-- Picture below of Space Battle Game - version by: Brian Loveless -->

![alt text](https://github.com/BrianLoveGa/space-battle-game/blob/master/public/images/space%20btl%201.png "Space Battle Game - version by: Brian Loveless, Creator: Akira Wong, adapted by Thom Page ")

---

**Console Log**

Sorry this isn't phone friendly - maybe will make a prompts style later so phonies can play.

Must be played in console log.

Just type commands into bottom line of the ole log - instructions on html Page.
And below

<!-- Picture below of Space Battle Game - version by: Brian Loveless -->

![alt text](https://github.com/BrianLoveGa/space-battle-game/blob/master/public/images/space%20btl%202.png "Space Battle Game - version by: Brian Loveless, Creator: Akira Wong, adapted by Thom Page ")

---

# GamePlay

youHero is how you access your ship - (The USS Schwarzenegger)

The bad guys will have random attributes each time

They all are named al something

al1 = new Alienship("AL #1") ... al2 = new Alienship("AL #2") ... al3 = new Alienship("AL #3") ... al4 = new Alienship("AL #4") ... & final "bosses" ... al5 = new Alienship("AL #5") ... al6 = new Alienship("AL #6") ... al7 = new Alienship("AL #7") ...

Kill all seven ships to save the planet !

You can shoot them with a laser ( youHero.laser() ) - (weak but unlimited) or
shoot missles ( youHero.attack() ) - (stronger but a finite resource)

If you are getting beat up you can have your engineers search Reddit for a way to fix your hull. This can only be used a limited number of times.
use/type youHero.useReddit()

To attack first ship with lasers use/type youHero.laser(al1)

To attack first ship with missles use/type youHero.attack(al1)

To attack second ship with lasers use/type youHero.laser(al2)
To attack second ship with missles use/type youHero.attack(al2)

It is the same with subsequent enemies

youHero.laser(al3) ... youHero.laser(al4 ) or youHero.attack(al4) ... youHero.attack(al5) and so on ...

Please ignore when undefined appears in the log _-_ HOWEVER _-_ if your moves only return undefined then either you are targeting a dead ship or you have died please reset to play again (refresh the page).

___Have fun ... It's just a game after all__

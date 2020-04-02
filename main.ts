color.setColor(3, color.rgb(233, 29, 99))
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . d d d d d d d . . . . . 
. . . d d d d d d d d d . . . . 
. . . d d d d d d d d d . . . . 
. . . d d f d d d f d d . . . . 
. . . d d d d d d d d d . . . . 
. . . d d d d d d d d d . . . . 
. . . d f f d d d f f d . . . . 
. . . d d f f f f f d d . . . . 
. . . . d d d d d d d . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e f e e e f e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e f f e e e f f e . . . 
. . . . e e f f f f f e e . . . 
. . . . . e e e e e e e . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite2.setPosition(100, 60)
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundColor(0)
mySprite.say("Hello", 2000)
pause(2000)
mySprite2.say("Hello", 2000)
pause(2000)
mySprite.startEffect(effects.fire)
mySprite.vx += 40
mySprite.vy += 60
mySprite.setFlag(SpriteFlag.BounceOnWall, true)
pause(2000)
mySprite2.say("Whoa", 2000)
pause(2000)
mySprite2.say("You're on fire", 2000)
pause(2000)
mySprite2.startEffect(effects.bubbles)
mySprite2.follow(mySprite, 50)
mySprite.say("NO...", 2000)
pause(2000)
mySprite.say("YOU'RE ON FIRE", 5000)
pause(5000)
mySprite2.say("WHEE!!!")

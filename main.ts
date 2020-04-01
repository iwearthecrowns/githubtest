let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . d d d d d d d . . . . 
. . . . d d d d d d d d d . . . 
. . . . d d d d d d d d d . . . 
. . . . d d f d d d f d d . . . 
. . . . d d d d d d d d d . . . 
. . . . d d d d d d d d d . . . 
. . . . d f f d d d f f d . . . 
. . . . d d f f f f f d d . . . 
. . . . . d d d d d d d . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundColor(0)
mySprite.say("Hello", 2000)
mySprite.startEffect(effects.fire)
let helloKitty = sprites.create(img`
. . . . . . . . . . . . . 2 2 . . . . . . . . . 
. . . . f f f . . . . . 2 3 3 2 . f f f . . . . 
. . . f 1 1 1 f f f f 2 3 3 3 3 2 1 1 1 f . . . 
. . . f 1 1 1 1 1 1 1 2 3 3 3 2 2 2 1 1 f . . . 
. . . f 1 1 1 1 1 1 1 2 3 3 2 3 3 3 2 2 2 . . . 
. . . . f 1 1 1 1 1 1 1 2 2 2 3 3 3 2 3 3 2 . . 
. . . f 1 1 1 1 1 1 1 1 1 1 1 2 2 2 3 3 3 2 . . 
. . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 2 3 3 2 . . . 
. . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 . . . . 
f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f 
. . f 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 1 f . . 
. f f f 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 f f f . 
. . . f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f . . . 
. . f f 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 f f . . 
. . . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . . . . 
. . . . . f f 1 1 1 1 1 1 1 1 1 1 f f . . . . . 
. . . . . . . f f f f f f f f f f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
helloKitty.setPosition(45, 25)
pause(2000)
helloKitty.say("Whoa", 2000)
pause(2000)
helloKitty.say("You're on fire")

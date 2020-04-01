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
mySprite.say("Hello")
mySprite.startEffect(effects.fire)

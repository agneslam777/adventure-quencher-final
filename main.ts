namespace SpriteKind {
    export const Sprite = SpriteKind.create()
    export const Treasure = SpriteKind.create()
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    if (my_sprite.y >= 70) {
        my_sprite.vy = -100
    }
    
})
//  make sprite jump 
sprites.onOverlap(SpriteKind.Player, SpriteKind.Treasure, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_on_overlap2(sprite2: Sprite, otherSprite2: Sprite) {
    game.gameOver(false)
})
//  win or lose game 
let projectile : Sprite = null
let project_speed = 0
let treasure : Sprite = null
let my_sprite : Sprite = null
music.play(music.createSong(hex`
        0078000408020100001c00010a006400f40164000004000000000000000000000000000500000436000000040001200400080001240c00100001241000140001291400180001201c00200001272400280001222c0030000127340038000125
    `), music.PlaybackMode.LoopingInBackground)
info.setScore(0)
game.setGameOverEffect(true, effects.confetti)
scene.setBackgroundImage(img`
    5555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        5555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999919999999919999999999999999999
        5555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991999999199999999999999999999
        5555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999199991999999999999999999999
        5555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991999919999911119999999999999999999999
        5555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999199199999999999999999999999999999999
        5555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999199991999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999919919999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999991199191999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999919999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999d999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999ddddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999ddddddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999dddddddddddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999ddddddddddddddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999ddddddddddddddddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999dddddddddddddddddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999ddddddddddddddddddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999ddddddddddddddddddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999ddddddddddddddddddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999dddddddddddddddddddddddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999dddddddddddddddddddddddddddd999999999999999999999999999999999999999999999999999999999999999999999dddd99999999999999999999999999
        9999999999999999999999999999999ddddddddddddddddddddddddddddddd999999999999999999999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999
        999999999999999999999999999999dddddddddddddddddddddddddddddddd9999999999999999999999999999999999999999999999999999999999999999dddddddddd999999999999999999999999
        99999999999999999999999999999ddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999999999999999999999999999dddddddddddddd99999999999999999999999
        9999999999999999999999999999ddddddddddddddddddddddddddddddddddd99999999999999999999999999999999999999999999999999999999999ddddddddddddddd99999999999999999999999
        999999999999999999999999999dddddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999999999999999999999999ddddddddddddddddd9999999999999999999999
        999999999999999999999999999dddddddddddddddddddddddddddddddddddd999999999999999999999999999999999999999999999999999999999ddddddddddddddddddd999999999999999999999
        99999999999999999999999999ddddddddddddddddddddddddddddddddddddd99999999999999999999999999999999999999999999999999999999ddddddddddddddddddddd99999999999999999999
        9999999999999999999999999dddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddd9999999999999999999
        999999999999999999999999ddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999999999999999999999999999dddddddddddddddddddddddddd999999999999999999
        9999999999999999999999ddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddd999999999999999999
        99999999999999999999ddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddd99999999999999999
        999999999999999999ddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddd9999999999999
        9999999999999999ddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddd999999999
        99999999999999dddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddd99999
        9999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd
        9999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd
        999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd
        99999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd
        9999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd
        999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd
        99999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd
        9999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd
        999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999999999994444999999999999999dddddddddddddddddddddddddddddddddddddddddddddddd
        9999dddddddddddddddddddddddddddddddddddaaaddddddddddddddddddddddddddd99999999999999999999999945449999999999999999ddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddda5addddddddddddddddddddddddddd99999999999999999999999944449999999999999999ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddaaaddddddddddddddddddddddddddd99999999999999999999999944449999999999999999ddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddd7dddddddddddddddddddddddddddd99999999999999999999999999799999999799999999dddddddddddddddddddddddddddddd7ddd7dddddddddddd
        dddddddddddddddddddddddddddddddddddddddd7ddddddddddddddddddddddddddddd9999997979999999999999997779999999799999999ddddddddddddddddddddddddddddddd7d7ddddddddddddd
        dddddddddddddddddddddddddddddddddddddddd7ddddddddddddddddddddddddddddd9999999799999999999999999799999999799999999dddddddddddddddddddddddddddddddd7dddddddddddddd
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
`)
//  background
my_sprite = sprites.create(img`
        ........................
            .....ffff...............
            ...fff88fff.............
            ..fff8888fff............
            .fff555555fff...........
            .ff588888855f...........
            .f58ffffff85f...........
            .ffff5555ffff...........
            ff5fbf44fbf5ff....cc....
            f5541fddf1455f...cdc....
            .ffffddddd55ff..cddc....
            fddddf44455ff..cddc.....
            fbbbbf8888fff.cddc......
            fbbbbf8888f4f.cdc.......
            .fccf47744f4eecc........
            ..ffffffff..ee..........
            ....ff..ff..............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
    `, SpriteKind.Player)
my_sprite.setPosition(20, 70)
//  sprite player 
game.splash("Adventure Quencher", "Dodge the monster and collect the treasure!")
game.onUpdate(function on_on_update() {
    if (my_sprite.y < 70) {
        my_sprite.ay = 160
    } else {
        my_sprite.ay = 10
        my_sprite.vy = 0
    }
    
})
game.onUpdate(function on_on_update2() {
    
    if (info.score() == 15) {
        treasure = sprites.create(assets.image`
            treasure
        `, SpriteKind.Treasure)
        treasure.setPosition(140, 70)
        controller.moveSprite(my_sprite, 100, 0)
    }
    
})
game.onUpdateInterval(2000, function on_update_interval() {
    
    if (info.score() < 15) {
        project_speed = -100 - game.runtime() / 250
        projectile = sprites.createProjectileFromSide(assets.image`
            projectile
        `, project_speed, 0)
        projectile.setPosition(159, 65)
        info.changeScoreBy(1)
    } else {
        projectile.setPosition(0, 0)
    }
    
})

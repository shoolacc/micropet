input.onButtonPressed(Button.A, function () {
    music.playMelody("B A C5 C - - - - ", 120)
    basic.showString("How are you?")
    if (input.isGesture(Gesture.ScreenUp)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # # # .
            . . . . .
            `)
    }
    if (input.isGesture(Gesture.ScreenDown)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Go first!")
    basic.pause(2000)
    computer_choice = randint(0, 2)
    if (computer_choice == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (computer_choice == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (computer_choice == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
let computer_choice = 0
basic.showLeds(`
    . . . . .
    . # . # .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.pause(100)
basic.showString(" Hi!")
basic.forever(function () {
    if (input.lightLevel() < 2) {
        basic.showString("Sleep mode")
    }
    if (input.lightLevel() > 2) {
        if (input.temperature() < 18) {
            music.playMelody("E D C - - - - - ", 120)
            basic.showString("Too cold!")
        }
        if (input.temperature() > 24) {
            music.playMelody("A G F - - - - - ", 120)
            basic.showString("Too hot!")
        }
    }
})

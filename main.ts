input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("C5 A F D C - C5 A ", 120)
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("B G A G B C D E ", 120)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Ghost)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        music.playMelody("C5 E G A F D C G ", 120)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    music.playMelody("C5 G C5 G C D E F ", 120)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.LogoDown, function () {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # # # # #
                # . # . #
                # # # # #
                . . # . .
                . # . # .
                `)
            basic.showIcon(IconNames.Ghost)
        }
        music.playMelody("C5 C F C C5 C F C ", 160)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("C5 B A G F E A B ", 120)
    }
})
basic.forever(function () {
	
})

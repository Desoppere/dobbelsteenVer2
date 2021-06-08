input.onGesture(Gesture.Shake, function () {
    waardeDobbelsteen = randint(1, 6)
    soundExpression.giggle.playUntilDone()
})
let waardeDobbelsteen = 0
basic.showIcon(IconNames.Heart)
waardeDobbelsteen = 1
basic.forever(function () {
    if (waardeDobbelsteen < 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (waardeDobbelsteen < 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (waardeDobbelsteen < 4) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
    } else if (waardeDobbelsteen < 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (waardeDobbelsteen < 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
})

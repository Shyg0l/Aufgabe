input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    men1()
})
function men1 () {
    while (!(input.buttonIsPressed(Button.A))) {
        summe = 0
        for (let index = 0; index < 10; index++) {
            summe += input.soundLevel()
        }
        basic.showNumber(summe / 10)
        basic.pause(500)
    }
}
let summe = 0
let menue = 1
basic.showNumber(menue)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        menue += 1
        if (menue > 5) {
            menue = 1
        }
        basic.showNumber(menue)
    }
})

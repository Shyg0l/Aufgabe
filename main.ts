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

let bewing = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    input.setAccelerometerRange(AcceleratorRange.OneG)
    bewing += 1
})
basic.forever(function () {
    let _3g = 0
    bewing = _3g
})

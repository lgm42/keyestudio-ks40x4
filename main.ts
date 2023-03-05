bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Scissors)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
	
})
let vitesse = 0
let data = ""
pins.setPull(DigitalPin.P2, PinPullMode.PullDown)
bluetooth.startUartService()
basic.forever(function () {
    if (data == "f") {
        robot.deplacer(RobotDirection.Avant, vitesse)
    } else if (data == "l") {
        robot.deplacer(RobotDirection.Gauche, vitesse)
    } else if (data == "r") {
        robot.deplacer(RobotDirection.Droite, vitesse)
    } else if (data == "b") {
        robot.deplacer(RobotDirection.Arriere, vitesse)
    } else if (data == "s") {
        robot.stop()
    } else if (data == "C") {
        vitesse = 80
    } else if (data == "H") {
        vitesse = 50
    } else if (data == "A") {
        music.playMelody("A E A F A G - - ", 400)
    } else {
    	
    }
    basic.showString(data)
    data = ""
})

function stop () {
    pins.servoWritePin(AnalogPin.P3, 90)
    pins.servoWritePin(AnalogPin.P4, 90)
}
function reculer () {
    pins.servoWritePin(AnalogPin.P3, 40)
    pins.servoWritePin(AnalogPin.P4, 140)
}
function tourner_gauche () {
    pins.servoWritePin(AnalogPin.P3, 90)
    pins.servoWritePin(AnalogPin.P4, 40)
}
function avancer () {
    pins.servoWritePin(AnalogPin.P3, 140)
    pins.servoWritePin(AnalogPin.P4, 40)
}
robot.configurer_roue(Roue.Gauche, AnalogPin.P0)
pins.servoSetPulse(AnalogPin.P3, 1500)

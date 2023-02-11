robot.configurer_roue(Roue.Gauche, AnalogPin.P3)
robot.tourner_roue(Roue.Gauche, Sens.Avant, 50)
basic.forever(function () {
    robot.deplacer(RobotDirection.Gauche, 50)
    basic.pause(2000)
    robot.stop()
})

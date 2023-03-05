/**
 * Robot blocks
 */

let wheel_pins: Array<AnalogPin>;
// default values
wheel_pins = [AnalogPin.P3, AnalogPin.P4];

enum Sens {
    //% block="avant"
    Avant = 0,
    //% block="arriere"
    Arriere
}

enum RobotDirection {
    //% block="avant"
    Avant = 0,
    //% block="arriere"
    Arriere,
    //% block="gauche"
    Gauche,
    //% block="droite"
    Droite,
}

enum Roue {
    //% block="gauche"
    Gauche = 0,
    //% block="droite"
    Droite
}

//% color=#0fbc11 icon="\u272a" block="Robot"
//% category="Robot"
namespace robot {
    
    /**
     * Configure les roues
     */
    //% block="Configurer la roue $roue sur la pin $pin"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false"
    //% group="Moteurs" weight=66
    export function configurer_roue(roue: Roue, pin: AnalogPin): void {
        wheel_pins[roue] = pin
    }

    /**
     * Demande à la roue de tourner
     * @param roue : roue à faire tourner
     * @param sens : Sens de la rotation
     * @param vitesse : vitesse de rotation de 0 à 100
     */
    //% block="Tourner la roue $roue vers l'$sens à la vitesse $vitesse"
    //% group="Moteurs" weight=66
    //% vitesse.defl=50
    export function tourner_roue(roue: Roue, sens: Sens, vitesse: number): void {
        //la position par defaut est à 1500 µs
        //on ajoute 500 pour booster artificielement la vitesse par rapport au poids du robot
        let pwmOffset = vitesse * 5
        // 100 % de vitesse se déroule sur 0.5 ms
        // en dessous de 0.5ms le robot ne bouge pas

        if (((roue == Roue.Gauche) && (sens == Sens.Arriere)) ||
            ((roue == Roue.Droite) && (sens == Sens.Avant))) {
                pwmOffset *= -1
        }

        pins.servoSetPulse(wheel_pins[roue], 1500 + pwmOffset)
    }

    /**
     * Demande à une roue de s'arrêter
     * @param roue : roue à stopper
     */
    //% block="Arrêter la roue $roue"
    //% group="Moteurs" weight=66
    export function stopper_roue(roue: Roue): void {
        pins.servoSetPulse(wheel_pins[roue], 1500)
    }

    /**
     * Demande au robot de se déplacer
     * @param direction : direction à prendre
     */
    //% block="Déplacer le robot vers $direction à la vitesse $vitesse"
    //% vitesse.defl=50
    //% group="Moteurs" weight=66
    export function deplacer(direction: RobotDirection, vitesse: number): void {
        switch (direction) {
            case RobotDirection.Droite :
                tourner_roue(Roue.Gauche, Sens.Avant, vitesse)
                tourner_roue(Roue.Droite, Sens.Arriere, vitesse)
                break
            case RobotDirection.Gauche:
                tourner_roue(Roue.Gauche, Sens.Arriere, vitesse)
                tourner_roue(Roue.Droite, Sens.Avant, vitesse)
                break
            case RobotDirection.Avant:
                tourner_roue(Roue.Gauche, Sens.Avant, vitesse)
                tourner_roue(Roue.Droite, Sens.Avant, vitesse)
                break
            case RobotDirection.Arriere:
                tourner_roue(Roue.Gauche, Sens.Arriere, vitesse)
                tourner_roue(Roue.Droite, Sens.Arriere, vitesse)
                break
        }
    }

    /**
     * Demande au robot de s'arrêter
     */
    //% block="Arrêter le robot"
    //% group="Moteurs" weight=66
    export function stop(): void {
        stopper_roue(Roue.Gauche)
        stopper_roue(Roue.Droite)
    }
}
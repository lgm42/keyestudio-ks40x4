/**
 * Robot blocks
 */

let wheel_pins: Array<AnalogPin>;
// default values
wheel_pins = [AnalogPin.P3, AnalogPin.P4];

enum Direction {
    //% block="avant"
    Avant = 0,
    //% block="arriere"
    Arriere
}

enum Roue {
    //% block="gauche"
    Gauche = 0,
    //% block="droite"
    Droite
}

//% weight=100 color=#0fbc11 icon=""
namespace robot {
    
    /**
     * Configure les roues
     */
    //% block
    export function configurer_roue(roue: Roue, pin: AnalogPin): void {
        wheel_pins[roue] = pin
    }

    /**
     * Demande à une roue de tourner
     * @param roue : roue à faire tourner
     * @param direction : direction de la rotation
     * @param vitesse : vitesse de rotation de 0 à 100
     */
    //% block
    export function tourner_roue(roue: Roue, direction: Direction, vitesse: number): void {
        let pwmOffset = vitesse * 10
        // 100 % de vitesse se déroule sur 1 ms
        if (((roue == Roue.Gauche) && (direction == Direction.Avant)) ||
            ((roue == Roue.Droite) && (direction == Direction.Arriere))) {
                pwmOffset *= -1
        }

        pins.servoSetPulse(wheel_pins[roue], 1500 + pwmOffset)
    }

    /**
     * Demande à une roue de s'arrêter
     * @param roue : roue à stopper
     */
    //% block
    export function stopper_roue(roue: Roue): void {
        pins.servoSetPulse(wheel_pins[roue], 1500)
    }

}
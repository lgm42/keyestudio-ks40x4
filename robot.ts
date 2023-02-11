/**
 * Robot blocks
 */

let wheel_pins: Array<AnalogPin>;
wheel_pins = [];

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
    //% block
    export function configurer_roue(roue: Roue, pin: AnalogPin): void {
        wheel_pins[roue] = pin
    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function tourner_roue(direction: Direction, vitesse: number): void {
        pins.servoSetPulse(AnalogPin.P0, 1500)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
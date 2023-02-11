def tourner_droite():
    pins.servo_write_pin(AnalogPin.P3, 140)
    pins.servo_write_pin(AnalogPin.P4, 90)

def on_sound_loud():
    global bouge
    bouge = 0
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_gesture_logo_up():
    global bouge
    bouge = 1
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def tourner_gauche():
    pins.servo_write_pin(AnalogPin.P3, 90)
    pins.servo_write_pin(AnalogPin.P4, 40)
def stop():
    pins.servo_write_pin(AnalogPin.P3, 90)
    pins.servo_write_pin(AnalogPin.P4, 90)
def reculer():
    pins.servo_write_pin(AnalogPin.P3, 40)
    pins.servo_write_pin(AnalogPin.P4, 140)

def on_logo_pressed():
    global bouge
    bouge = 1
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def avancer():
    pins.servo_write_pin(AnalogPin.P3, 140)
    pins.servo_write_pin(AnalogPin.P4, 40)

def on_gesture_screen_up():
    global bouge
    bouge = 0
input.on_gesture(Gesture.SCREEN_UP, on_gesture_screen_up)

bouge = 0
turtleBit.led(LR.LEFT_SIDE, COLOR.RED)
turtleBit.led(LR.RIGHT_SIDE, COLOR.BLUE)
bouge = 0

def on_forever():
    basic.show_leds("""
        . . . . .
                . . . . .
                # . . . #
                . # . # .
                . . # . .
    """)
    if bouge == 1:
        avancer()
        basic.pause(1000)
        tourner_droite()
        basic.pause(1000)
        tourner_gauche()
        basic.pause(1000)
        reculer()
        basic.pause(1000)
        stop()
        basic.pause(1000)
basic.forever(on_forever)

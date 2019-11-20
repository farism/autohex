declare module '@autohex/node-enigo' {
  type Key = string

  type MouseButton = string

  class Enigo {
    delay(): number

    set_delay(delay: number): void

    mouse_move_to(x: number, y: number): void

    mouse_move_relative(x: number, y: number): void

    mouse_down(button: MouseButton): void

    mouse_up(button: MouseButton): void

    mouse_click(button: MouseButton): void

    mouse_scroll_x(length: number): void

    mouse_scroll_y(length: number): void

    key_sequence(sequence: string): void

    key_down(key: Key): void

    key_up(key: Key): void

    key_click(key: Key): void
  }
}

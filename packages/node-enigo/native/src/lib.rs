extern crate enigo;
extern crate neon;

use enigo::*;
use neon::borrow::*;
use neon::prelude::*;

fn run<F>(
  f: F,
  mut cx: CallContext<'_, JsEnigo>,
) -> Result<Handle<'_, JsValue>, neon::result::Throw>
where
  F: Fn(RefMut<'_, &mut Enigo>) -> (),
{
  let mut this = cx.this();
  let guard = cx.lock();
  let enigo = this.borrow_mut(&guard);

  f(enigo);

  Ok(cx.undefined().upcast())
}

declare_types! {
  pub class JsEnigo for Enigo {
    init(_cx) {
      Ok(Enigo::new())
    }

    method mouse_move_to(mut cx) {
      let x = cx.argument::<JsNumber>(0)?.value() as i32;
      let y = cx.argument::<JsNumber>(1)?.value() as i32;

      run(|mut enigo|{
        enigo.mouse_move_to(x, y)
      }, cx)
    }

    method mouse_move_relative(mut cx) {
      let x = cx.argument::<JsNumber>(0)?.value() as i32;
      let y = cx.argument::<JsNumber>(1)?.value() as i32;

      run(|mut enigo|{
        enigo.mouse_move_relative(x, y)
      }, cx)
    }

    method mouse_down(mut cx) {
      let button = to_mousebutton(cx.argument::<JsString>(0)?.value());

      run(|mut enigo|{
        enigo.mouse_down(button)
      }, cx)
    }

    method mouse_up(mut cx) {
      let button = to_mousebutton(cx.argument::<JsString>(0)?.value());

      run(|mut enigo|{
        enigo.mouse_up(button)
      }, cx)
    }

    method mouse_click(mut cx) {
      let button = to_mousebutton(cx.argument::<JsString>(0)?.value());

      run(|mut enigo|{
        enigo.mouse_click(button)
      }, cx)
    }

    method mouse_scroll_x(mut cx) {
      let length = cx.argument::<JsNumber>(0)?.value();

      run(|mut enigo|{
        enigo.mouse_scroll_x(length as i32)
      }, cx)
    }

    method mouse_scroll_y(mut cx) {
      let length = cx.argument::<JsNumber>(0)?.value();

      run(|mut enigo|{
        enigo.mouse_scroll_y(length as i32)
      }, cx)
    }

    method key_sequence_parse(mut cx) {
      let sequence = cx.argument::<JsString>(0)?.value();

      run(|mut enigo|{
        enigo.key_sequence_parse(&sequence)
      }, cx)
    }

    method key_sequence(mut cx) {
      let sequence = cx.argument::<JsString>(0)?.value();

      run(|mut enigo|{
        enigo.key_sequence(&sequence)
      }, cx)
    }

    method key_down(mut cx) {
      let key = to_key(cx.argument::<JsString>(0)?.value());

      run(|mut enigo|{
        enigo.key_down(key)
      }, cx)
    }

    method key_up(mut cx) {
      let key = to_key(cx.argument::<JsString>(0)?.value());

      run(|mut enigo|{
        enigo.key_up(key)
      }, cx)
    }

    method key_click(mut cx) {
      let key = to_key(cx.argument::<JsString>(0)?.value());

      run(|mut enigo|{
        enigo.key_click(key)
      }, cx)
    }
  }
}

fn to_key(key: String) -> Key {
  match key.as_str() {
    "a" => Key::Layout('a'),
    _ => Key::Layout('b'),
  }
}
fn to_mousebutton(button: String) -> MouseButton {
  match button.as_str() {
    "left" => MouseButton::Left,
    "middle" => MouseButton::Middle,
    "right" => MouseButton::Right,
    "scrollUp" => MouseButton::ScrollUp,
    "scrollDown" => MouseButton::ScrollDown,
    "scrollLeft" => MouseButton::ScrollLeft,
    "scrollRight" => MouseButton::ScrollRight,
    _ => MouseButton::Left,
  }
}

register_module!(mut cx, {
  cx.export_class::<JsEnigo>("Enigo")?;

  Ok(())
});

#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use window_titles::{Connection, ConnectionTrait};

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![enumerate_windows])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn enumerate_windows() -> Vec<String> {
  let connection = Connection::new().unwrap();
  let titles: Vec<String> = connection.window_titles().unwrap();
  return titles;
}

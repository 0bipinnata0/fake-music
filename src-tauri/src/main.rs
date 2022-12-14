#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
mod command;

#[tauri::command]
fn greet(name: &str, window: tauri::Window) -> String {
    window.emit("c_event", "aaaaa");
    format!("Hello, {}!", name)
}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

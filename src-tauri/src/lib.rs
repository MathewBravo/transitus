use std::path::Path;

#[tauri::command]
async fn open_file(file_path: String){
    println!("Recieved {}", file_path);

    let path = Path::new(&file_path);
    
    match path.extension().and_then(|ext| ext.to_str()){
        Some("csv") => {
            println!("Got a csv")
        }   
        None => {
            println!("Failed to find a file extension")
        }    
        _ => {
            println!("Not a CSV")
        }
    }

}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![open_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

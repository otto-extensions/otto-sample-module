mod commands;

use commands::hello_handler;

pub fn dispatch(command_id: &str) -> serde_json::Value {
    match command_id {
        "otto.sample.hello" => hello_handler(),
        _ => serde_json::json!({
            "error": format!("Unknown command: {}", command_id)
        }),
    }
}

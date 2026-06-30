use serde_json::json;

pub fn hello_handler() -> serde_json::Value {
    json!({
        "message": "Hello from the Otto Sample Module!"
    })
}

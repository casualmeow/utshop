import app/db/database.{type Connection}
import gleam/option.{type Option}

pub type Context() {
  Context(database: Option(database.Connection), id: Int, static_path: String)
}

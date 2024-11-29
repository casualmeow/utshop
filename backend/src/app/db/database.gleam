import pog
import envoy
import gleam/result

pub type Connection =
  pog.Connection

pub fn connection() -> Result(pog.Connection, Nil) {
  use database_url <- result.try(envoy.get("DB_PATH"))
  use config <- result.try(pog.url_config(database_url))
  Ok(pog.connect(config))
}

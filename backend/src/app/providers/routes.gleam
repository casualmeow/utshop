import app/types/context.{type Context}
import gleam/string_builder
import wisp.{type Request, type Response}

pub fn handle_request(req: Request) {
  wisp.html_response(string_builder.from_string("Hello, World!"), 200)
}

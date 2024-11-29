import gleam/option.{type Option}

pub type Item() {
  Item(
    id: Int,
    name: String,
    description: Option(String),
    data: List(Int)
  )
}

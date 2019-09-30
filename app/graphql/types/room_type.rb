module Types
  class RoomType < Types::BaseObject
    field :id, Integer, null: true
    field :floor, Types::FloorType, null: true
    field :name, String, null: true
    field :talks, [Types::TalkType], null: true
  end
end

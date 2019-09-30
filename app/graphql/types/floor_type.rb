module Types
  class FloorType < Types::BaseObject
    field :number, Integer, null: true
    field :location, Types::LocationType, null: true
    field :rooms, [Types::RoomType], null: true
  end
end

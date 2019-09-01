module Types
  class RoomType < Types::BaseObject
    field :id, Integer, null: true
    field :location, Types::LocationType, null: true
    field :name, String, null: true
  end
end

module Types
  class LocationType < Types::BaseObject
    field :name, String, null: true
    field :addresses, [Types::AddressType], null: true
    field :id, Int, null: true
    field :floors, [Types::FloorType], null: true
  end
end

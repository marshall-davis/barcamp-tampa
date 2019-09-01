module Types
  class AddressType < Types::BaseObject
    field :street, String, null: true
    field :detail, String, null: true
    field :locality, String, null: true
    field :administrativeArea, String, null: true
    field :region, String, null: true
    field :postalCode, String, null: true
    field :locations, [Types::LocationType], null: true
    field :id, Int, null: true
  end
end

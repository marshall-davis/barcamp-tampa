module Mutations
  class CreateRoom < GraphQL::Schema::RelayClassicMutation
    field :location, Types::LocationType, null: false
    field :room, Types::RoomType, null: false
    field :errors, [String], null: false

    argument :location_id, Int, required: true
    argument :name, String, required: true

    def resolve(location_id:, name:)
      location = ::Location.find(location_id)
      room = location.rooms.build(name: name)

      if room.save
        {
            location: location,
            room: room,
            errors: []
        }
      else
        {
            location: location,
            room: nil,
            errors: room.errors.full_messages
        }
      end
    end
  end
end

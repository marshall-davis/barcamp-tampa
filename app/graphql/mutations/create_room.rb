module Mutations
  class CreateRoom < GraphQL::Schema::RelayClassicMutation
    field :floor, Types::FloorType, null: false
    field :room, Types::RoomType, null: false
    field :errors, [String], null: false

    argument :floor_id, Int, required: true
    argument :name, String, required: true

    def resolve(floor_id:, name:)
      floor = ::Floor.find(floor_id)
      room = floor.rooms.build(name: name)

      if room.save
        {
          floor: floor,
          room: room,
          errors: []
        }
      else
        {
          floor: floor,
          room: nil,
          errors: room.errors.full_messages
        }
      end
    end
  end
end

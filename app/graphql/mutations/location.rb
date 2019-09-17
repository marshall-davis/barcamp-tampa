module Mutations
  class Location < GraphQL::Schema::RelayClassicMutation
    field :location, Types::LocationType, null: true
    field :errors, [String], null: false

    argument :location_id, Int, required: true
    argument :name, String, required: false

    def resolve(location:, name: nil)
      location = ::Location.find(location)
      location.name = name

      if location.save
        {
            location: location,
            errors: []
        }
      else
        {
            location: nil,
            errors: location.errors.full_messages
        }
      end
    end
  end
end

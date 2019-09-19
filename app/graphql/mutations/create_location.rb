module Mutations
  class CreateLocation < GraphQL::Schema::RelayClassicMutation
    field :location, Types::LocationType, null: true
    field :errors, [String], null: false

    argument :name, String, required: true

    def resolve(name:)
      location = ::Location.create(name: name)

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

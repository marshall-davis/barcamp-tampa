module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :user, UserType, null: true do
      description 'Find a user by ID'
      argument :id, ID, required: true
    end
    def user(id:)
      User.find(id)
    end

    field :users, [UserType], null: true do
      description 'List users'
    end
    def users
      User.all
    end
  end
end

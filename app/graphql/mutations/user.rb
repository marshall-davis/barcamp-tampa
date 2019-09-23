module Mutations
  class User < GraphQL::Schema::RelayClassicMutation
    field :user, Types::UserType, null: true
    field :errors, [String], null: false

    argument :user_id, ID, required: true
    argument :first_name, String, required: false
    argument :last_name, String, required: false
    argument :twitter, String, required: false
    argument :facebook, String, required: false
    argument :email, String, required: false

    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end
    def resolve(user_id:, **arguments)
      user = ::User.find(user_id)
      user.update arguments

      if user.save
        {
            user: user,
            errors: [],
        }
      else
        {
            user: nil,
            errors: user.errors.full_messages
        }
      end
    end
  end
end

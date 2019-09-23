module Mutations
  class CreateUser < GraphQL::Schema::RelayClassicMutation
    field :user, Types::UserType, null: true
    field :errors, [String], null: false

    argument :first_name, String, required: true
    argument :last_name, String, required: false
    argument :twitter, String, required: false
    argument :facebook, String, required: false
    argument :email, String, required: true
    argument :password, String, required: true

    def resolve(first_name:, email:, **arguments)
      user = ::User.create(first_name: first_name, email: email)
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

module Types
  class MutationType < Types::BaseObject
    field :user, mutation: Mutations::User
  end
end

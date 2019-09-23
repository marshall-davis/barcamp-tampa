module Types
  class MutationType < Types::BaseObject
    field :createTalk, mutation: Mutations::CreateTalk
    field :createRoom, mutation: Mutations::CreateRoom
    field :location, mutation: Mutations::Location
    field :createLocation, mutation: Mutations::CreateLocation
    field :createUser, mutation: Mutations::CreateUser
    field :user, mutation: Mutations::User
  end
end

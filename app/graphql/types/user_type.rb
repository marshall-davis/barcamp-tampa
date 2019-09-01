module Types
  class UserType < Types::BaseObject
    field :id, Integer, null: true
    field :email, String, null: true
  end
end

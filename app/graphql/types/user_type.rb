module Types
  class UserType < Types::BaseObject
    field :id, Integer, null: true
    field :email, String, null: true
    field :talks, [TalkType], null: true
  end
end

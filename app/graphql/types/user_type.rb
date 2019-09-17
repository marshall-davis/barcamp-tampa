module Types
  class UserType < Types::BaseObject
    field :id, Integer, null: true
    field :email, String, null: false
    field :first_name, String, null: false
    field :last_name, String, null: true
    field :twitter, String, null: true
    field :facebook, String, null: true
    field :talks, [TalkType], null: true
  end
end

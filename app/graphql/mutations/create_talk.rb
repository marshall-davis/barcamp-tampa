module Mutations
  class CreateTalk < GraphQL::Schema::RelayClassicMutation
    field :talk, Types::TalkType, null: false
    field :errors, [String], null: false

    argument :user_id, Int, required: true
    argument :room_id, Int, required: true
    argument :title, String, required: true
    argument :description, String, required: false
    argument :name, String, required: false
    argument :twitter, String, required: false

    def resolve(user_id:, room_id:, title:, description: '')
      talk = ::Talk.create(user_id: user_id, room_id: room_id, title: title, description: description)

      if talk.save
        {
            talk: talk,
            errors: []
        }
      else
        {
            talk: nil,
            errors: talk.errors.full_messages
        }
      end
    end
  end
end

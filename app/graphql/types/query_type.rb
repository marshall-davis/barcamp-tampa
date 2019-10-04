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

    field :location, LocationType, null: true do
      description 'Find a location by ID'
      argument :id, ID, required: true
    end

    def location(id:)
      Location.find(id)
    end

    field :talk, TalkType, null: true do
      description 'Find a talk by ID'
      argument :id, ID, required: true
    end

    def talk(id:)
      Talk.find(id)
    end

    field :users, [UserType], null: true do
      description 'List users'
    end

    def users
      User.all
    end

    field :locations, [LocationType], null: true do
      description 'List locations'
    end

    def locations
      Location.all
    end

    field :talks, [TalkType], null: true do
      description 'List talks'
      argument :year, Int, required: false
    end

    def talks(**args)
      if args[:year]
        Talk.where('extract(year from time) = ?', args[:year]).all
      else
        Talk.all
      end
    end
  end
end

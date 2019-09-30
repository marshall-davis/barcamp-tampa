class Floor < ApplicationRecord
  belongs_to :location
  has_many :rooms
end

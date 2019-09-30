class Room < ApplicationRecord
  belongs_to :floor
  has_many :talks
end

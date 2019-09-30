class Location < ApplicationRecord
  has_and_belongs_to_many :addresses
  has_many :floors
end

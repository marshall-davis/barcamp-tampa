class CreateLocationsAddressesJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :addresses, :locations do |t|
      t.index :location_id
      t.index :address_id
    end
  end
end

class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.string :street, null: false
      t.string :detail, null: true
      t.string :locality, null: false
      t.string :administrative_area, null: false
      t.string :region, null: false
      t.string :postal_code, null: false

      t.timestamps
    end
  end
end

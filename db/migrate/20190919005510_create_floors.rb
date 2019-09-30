class CreateFloors < ActiveRecord::Migration[5.2]
  def change
    create_table :floors do |t|
      t.integer :location_id, null: false
      t.integer :number, null: false

      t.timestamps
    end
  end
end

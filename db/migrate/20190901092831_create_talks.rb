class CreateTalks < ActiveRecord::Migration[5.2]
  def change
    create_table :talks do |t|
      t.integer :user_id
      t.string :title
      t.integer :room_id
      t.string :description

      t.timestamps
    end
  end
end

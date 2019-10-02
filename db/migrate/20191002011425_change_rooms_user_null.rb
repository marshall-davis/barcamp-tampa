class ChangeRoomsUserNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :talks, :user_id, true
    add_column :talks, :name, :string
    add_column :talks, :twitter, :string
  end
end

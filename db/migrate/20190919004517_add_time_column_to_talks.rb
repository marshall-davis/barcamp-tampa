class AddTimeColumnToTalks < ActiveRecord::Migration[5.2]
  def change
    change_table :talks do |t|
      t.datetime :time
    end
  end
end

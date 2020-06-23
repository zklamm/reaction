class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :title
      t.text :description
      t.integer :list_id
      t.datetime :due_date
      t.string :labels, array: true, default: [], nil: false
      t.timestamps
    end
  end
end

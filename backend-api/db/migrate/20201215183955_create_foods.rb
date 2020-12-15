class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.string :name
      t.float :calories
      t.float :carbs
      t.float :protein
      t.float :fat

      t.timestamps
    end
  end
end

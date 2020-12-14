class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :city
      t.string :state_prov
      t.string :country
      t.string :team_played

      t.timestamps
    end
  end
end

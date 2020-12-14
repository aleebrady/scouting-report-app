class Game < ApplicationRecord
    has_many :scouts, foreign_key: :team_id, class_name: "User"
end

class Card < ApplicationRecord
  belongs_to :list
  validates_presence_of :title, allow_blank: false
  delegate :board_id, to: :list

  def attributes
    super.merge("board_id" => board_id)
  end
end
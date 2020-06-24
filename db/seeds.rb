# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Board.destroy_all

board1 = Board.create({title: "First board"})
# board2 = Board.create({title: "Second board"})

list1 = board1.lists.create(title: 'First list')
list2 = board1.lists.create(title: 'Second list')

list1_card1 = list1.cards.create(title: 'First card on first list', description: "Card 1", labels: ['blue'], due_date: '01-04-2021')
list1_card2 = list1.cards.create(title: 'Second card on first list', description: "Card 2", labels: ['green'], due_date: '10-10-2020')

list2_card1 = list2.cards.create(title: 'First card on second list', description: "Card 1", labels: ['red'], due_date: '01-12-2020')
list2_card2 = list2.cards.create(title: 'Second card on second list', description: "Card 2", labels: ['grey'], due_date: '10-11-2020')
list2_card3 = list2.cards.create(title: 'Third card on second list', description: "Card 3", labels: ['yellow'], due_date: '1-12-2020')

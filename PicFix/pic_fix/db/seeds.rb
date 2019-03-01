# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: "Ashley", email: "test@test.com", password: "charlie")

Album.create(user_id: 1, name: "Adventures")

Photo.create(album_id: 1, image: "https://images.unsplash.com/photo-1492528491602-a42e1caf03ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 1, image: "https://images.unsplash.com/photo-1492528491602-a42e1caf03ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 1, image: "https://images.unsplash.com/photo-1492528491602-a42e1caf03ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 1, image: "https://images.unsplash.com/photo-1492528491602-a42e1caf03ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")


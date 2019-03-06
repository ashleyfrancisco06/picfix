# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: "Ashley", email: "test@test.com", password: "charlie")

Album.create(user_id: 1, name: "Adventures")
Album.create(user_id: 1, name: "Scenery")
Album.create(user_id: 1, name: "Family")

Photo.create(album_id: 1, image: "https://images.unsplash.com/photo-1492528491602-a42e1caf03ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 1, image: "https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80")
Photo.create(album_id: 1, image: "https://images.unsplash.com/photo-1551687282-7f912feaf644?ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80")
Photo.create(album_id: 1, image: "https://images.unsplash.com/photo-1551676130-83c2db9ecbf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80")
Photo.create(album_id: 1, image: "https://images.unsplash.com/photo-1551668369-e79641cbb38f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")
Photo.create(album_id: 1, image: "https://images.unsplash.com/photo-1498661367879-c2085689eed4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")
Photo.create(album_id: 1, image: "https://images.unsplash.com/photo-1456553583670-f4242f36d0fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")
Photo.create(album_id: 1, image: "https://images.unsplash.com/photo-1456553583670-f4242f36d0fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")

Photo.create(album_id: 2, image: "https://images.unsplash.com/photo-1539987225288-7d998989461e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 2, image: "https://images.unsplash.com/photo-1500110417562-de4124b49dac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 2, image: "https://images.unsplash.com/photo-1541535267011-2fad2b4b9f74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 2, image: "https://images.unsplash.com/uploads/1412667993958c163da99/c1d3286f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 2, image: "https://images.unsplash.com/photo-1546617237-81f5aa62cb78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 2, image: "https://images.unsplash.com/photo-1544360645-d99ec508112e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 2, image: "https://images.unsplash.com/photo-1547578373-de7b5f64adc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 2, image: "https://images.unsplash.com/photo-1546267064-c5811cd61003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")

Photo.create(album_id: 3, image: "https://images.unsplash.com/photo-1449177009399-be6867ef0505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 3, image: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 3, image: "https://images.unsplash.com/photo-1437913135140-944c1ee62782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Photo.create(album_id: 3, image: "https://images.unsplash.com/photo-1445633883498-7f9922d37a3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")

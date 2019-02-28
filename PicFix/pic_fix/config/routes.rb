Rails.application.routes.draw do
  get "sessions/name"
  get "sessions/email"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create, :index, :show] do
    resources :albums do
      resources :photos
    end
  end
  resource :session, only: [:new, :create, :destroy]
end

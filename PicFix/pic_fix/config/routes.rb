Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create, :index, :show] do
    resources :albums do
      resources :photos
    end
  end
  resources :sessions, only: [:create]
  delete "/logout" => "sessions#destroy"
end

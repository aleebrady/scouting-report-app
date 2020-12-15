Rails.application.routes.draw do
  resources :goals
  resources :entries_foods
  resources :entries
  resources :jwt_blacklists
  resources :logs
  resources :users
  resources :foods
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

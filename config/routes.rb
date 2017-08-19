Rails.application.routes.draw do
  devise_for :users
  resources :home, only: :index

  get '/', to: 'home#index'
end

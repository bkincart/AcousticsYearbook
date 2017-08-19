Rails.application.routes.draw do
  resources :home, only: :index

  get '/', to: 'home#index'
end

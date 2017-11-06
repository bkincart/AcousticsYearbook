Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => 'users/omniauth_callbacks'}

  namespace :api do
    namespace :v1 do
      resources :current_user, only: :index
    end
  end

  root 'home#index'
  get '*path', to: 'home#index'
end

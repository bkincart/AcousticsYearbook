Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => 'users/omniauth_callbacks'}, skip: [:sessions]
  devise_scope :user do
    get 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
    get 'users/sign_in', :to => "devise/sessions#new", :as => :new_user_session
    post 'users/sign_in', :to => "devise/sessions#create", :as => :user_session
  end

  namespace :api do
    namespace :v1 do
      resources :current_user, only: :index
      resources :industries, only: :index
      resources :photos, only: [:create]
      resources :profiles, only: [:index, :create]
      resources :school_years, only: :index
    end
  end

  root 'home#index'
  get '*path', to: 'home#index'
end

Rails.application.routes.draw do
  namespace :admin do
      resources :users
      resources :addresses
      resources :floors
      resources :locations
      resources :rooms
      resources :talks

      root to: "users#index"
    end
  namespace :backdoor do
    resources :users
    resources :addresses
    resources :floors
    resources :locations
    resources :rooms
    resources :talks

    root to: 'users#index'
  end
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  end
  post '/graphql', to: 'graphql#execute'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'talks#index'
end

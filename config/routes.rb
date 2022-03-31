Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  root "quotes#index"
  
  resources :quotes
  resources :widgets
  get '/search_index', to: 'quotes#search_index', as: 'search_index'
  get '/slider_index', to: 'quotes#slider_index', as: 'slider_index'
end

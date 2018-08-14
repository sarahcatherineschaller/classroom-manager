Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  
  root 'users#index'
  
  resources :users do 
  	resources :classrooms 
  end


  resources :students 
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

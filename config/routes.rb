Rails.application.routes.draw do
  devise_for :users, :controllers => { omniauth_callbacks: "callbacks", registrations: "registrations" }
  
  root 'users#index'
  
  resources :users do 
  	resources :classrooms 
  end


  resources :students 

  get '/users/:user_id/classrooms/most_students', to: 'classrooms#most_students', as: 'most_students'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

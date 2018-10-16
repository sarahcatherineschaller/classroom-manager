Rails.application.routes.draw do
  devise_for :users, :controllers => { omniauth_callbacks: "callbacks", registrations: "registrations" }
  
  root 'users#index'
  
  resources :users do 
  	resources :classrooms
    
  end

  resource :classrooms, only:[:index] do 
    member do 
       get 'most_students'
     end 
   end


  resources :students 


  get '/users/:user_id/classrooms/:id/next', to: 'classrooms#next_classroom'

  get '/users/:user_id/classrooms/:id/previous', to: 'classrooms#previous_classroom'
 



  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

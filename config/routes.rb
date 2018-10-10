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

  get 'users/:user_id/classrooms/:id/classroom_data', to: 'classrooms#classroom_data', as: 'classroom_data'
 
  get 'students/:id/student_data', to: 'students#student_data', as: 'student_data'



  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

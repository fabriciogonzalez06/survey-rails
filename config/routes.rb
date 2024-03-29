Rails.application.routes.draw do
  resources :surveys do 
    get "add/sections", to: "survey_sections#add_sections"
    post "save/sections", to: "survey_sections#save_sections"
  end 

  resources :questions do 
     post "option/create", to: "options#create"
     get "option/edit", to: "options#edit"
     patch "option/update", to: "options#update"
     delete "option/destroy", to: "options#destroy"
  end 

  resources :sections do 
    post "question/create", to: "questions#create"
    get "question/edit", to: "questions#edit"
    patch "question/update", to: "questions#update"
    delete "question/destroy", to: "questions#destroy"
  end 

  resources :chapters do 
    get 'body/edit', to: "chapters#body"
  end 
  
  resources :evaluations
  devise_for :users

  authenticated(:user) do
      root "pages#index", as: :authenticated_root
  end 

  unauthenticated(:user) do
    root "pages#landing_page"
  end 

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

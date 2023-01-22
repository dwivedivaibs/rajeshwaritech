Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  # get 'home/index'

  root 'home#index'

  # get 'blogs', to: "home#blogs"
  get 'contact-us', to: "home#contact_us"
  get 'freelance', to: "home#freelance"
  get 'about-us', to: "home#about_us"
  get 'consulting-services', to: "home#consulting_services"
  get 'corporate-training', to: "home#corporate_training"
  post 'save_enquiry', to: "home#save_enquiry"

  resources :courses do
    collection do
      get 'sdet-professional'
      get 'sdet-professional-python'
    end
  end

  resources :blogs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

class HomeController < ApplicationController
  def index
    @blogs = Blog.last(4)
  end

  def courses
  end

  def blogs
    
  end

  def consulting_services
    
  end

  def sdet_professional
    
  end
end

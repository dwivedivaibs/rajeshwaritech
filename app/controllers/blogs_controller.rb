class BlogsController < ApplicationController
  def show
    @blog = Blog.friendly.find(params[:id])
  end

  def index
    @blogs = Blog.all
  end
end

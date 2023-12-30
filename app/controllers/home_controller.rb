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

  def save_enquiry
    @enquiry = Enquiry.new(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], phone: params[:phone], content: params[:content])
    if @enquiry.save
      EnquiryMailer.send_enquiry(@enquiry).deliver_now
    end
    redirect_to root_path, notice: "Thanks for your enquiry. We will contact you soon.!!"
  end
end

class EnquiryMailer < ApplicationMailer
	default from: 'rajeshwaritechservice@gmail.com'

	def send_enquiry(enquiry)
		@enquiry = enquiry
    mail(to: 'rajeshwaritechservice@gmail.com', subject: 'Enquiry from Rajeshwaritech')
  end
end

	end
end

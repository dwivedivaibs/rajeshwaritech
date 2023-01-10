class Blog < ApplicationRecord
	mount_uploader :blog_image,BlogImageUploader
	extend FriendlyId
  	friendly_id :title, use: :slugged

  	acts_as_taggable_on :tags
end

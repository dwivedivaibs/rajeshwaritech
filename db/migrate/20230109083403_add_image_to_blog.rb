class AddImageToBlog < ActiveRecord::Migration[5.2]
  def change
    add_column :blogs, :blog_image, :string
  end
end

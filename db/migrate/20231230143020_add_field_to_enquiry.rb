class AddFieldToEnquiry < ActiveRecord::Migration[5.2]
  def change
    add_column :enquiries, :content, :text
  end
end

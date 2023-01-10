ActiveAdmin.register Blog do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :title, :content
  #
  # or
  #
  # permit_params do
  #   permitted = [:title, :content]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  permit_params :title, :heading, :content, :blog_image, :tag_ids => []
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :file, :is_active]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  #index
  index do
    selectable_column
    id_column
    column "Title", :title
    column :heading
    column :content
    column "File" do |file|
      link_to file.blog_image.url, file.blog_image.url, target: "_blank"
    end
    column :created_at
    column :updated_at
    column :tags
    actions
  end

  #form
  form do |f|
    f.inputs do
      f.input :title
      f.input :heading
      f.input :content, as: :ckeditor, :input_html => { :class => "ckeditor" }
      f.input :blog_image, as: :file
      f.input :tags,  # Show all tags AND checked already selected one (by relations through :tags - input must named :tags)
        as: :select,
        multiple: :true,
        collection: ActsAsTaggableOn::Tag.select(:id, :name).all
    end
    f.actions
  end
  
end

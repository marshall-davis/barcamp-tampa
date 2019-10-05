module Backdoor
  class TalksController < Backdoor::ApplicationController
    # Overwrite any of the RESTful controller actions to implement custom behavior
    # For example, you may want to send an email after a foo is updated.
    #

    def update
      resource = resource_class.find(params[:id])
      resource.update(resource_params)

      now = Time.now
      hour = if resource_params[:time].to_i < 9
               resource_params[:time].to_i + 12
             else
               resource_params[:time].to_i
             end
      hour += 4
      resource.time = "#{now.year}-#{now.month}-#{now.day} #{hour}:00"

      if resource.save
        redirect_to(
            [namespace, resource],
            notice: translate_with_resource('update.success')
        )
      else
        render :new, locals: {
            page: Administrate::Page::Form.new(dashboard, resource),
        }
      end
    end

    def create
      now = Time.now
      hour = if resource_params[:time].to_i < 9
               resource_params[:time].to_i + 12
             else
               resource_params[:time].to_i
             end
      hour += 4
      resource = resource_class.new(resource_params)
      authorize_resource(resource)
      # This is a hack, a dirty hack for timezones
      resource.time = "#{now.year}-#{now.month}-#{now.day} #{hour}:00"
      resource.user_id = 1

      if resource.save
        redirect_to(
            [namespace, resource],
            notice: translate_with_resource('create.success')
        )
      else
        render :new, locals: {
            page: Administrate::Page::Form.new(dashboard, resource),
        }
      end
    end

    # Override this method to specify custom lookup behavior.
    # This will be used to set the resource for the `show`, `edit`, and `update`
    # actions.
    #
    # def find_resource(param)
    #   Foo.find_by!(slug: param)
    # end

    # Override this if you have certain roles that require a subset
    # this will be used to set the records shown on the `index` action.
    #
    # def scoped_resource
    #  if current_user.super_admin?
    #    resource_class
    #  else
    #    resource_class.with_less_stuff
    #  end
    # end

    # See https://administrate-prototype.herokuapp.com/customizing_controller_actions
    # for more information
  end
end

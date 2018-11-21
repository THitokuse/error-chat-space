class UsersController < ApplicationController

  def index
    @users = User.where('name LIKE(?)', "%#{user_params[:user]}%").where.not(id: current_user.id)
    respond_to do |format|
      format.html { redirect_to new_group_path}
      format.json
    end
  end

  def edit

  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private
  def user_params
    params.permit(:user)
  end
end

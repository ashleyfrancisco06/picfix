class UsersController < ApplicationController
  # before_action :ensure_signed_in, only: [:show, :index]
  # before_action :ensure_signed_out, only: [:new, :create]

  def index
    @users = User.all
    render json: @users
  end

  def show
    begin
      @user = User.find(params[:id])
      render json: {
               message: "ok",
               users_data: @user,
             }
    rescue ActiveRecord::RecordNotFound
      render json: { message: "no User matches that ID" }, status: 404
    rescue Exception
      render json: { message: "there was some other error" }, status: 500
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.password = params[:password]

    @user.save!

    render json: {
      user: @user,
    }, status: 201
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    user.update_attributes(user_params)

    redirect_to user
  end

  def destroy
    @user = User.destroy(params[:id])

    redirect_to users_path
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end

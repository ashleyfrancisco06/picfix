class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    user = params[:user][:email]
    user = params[:user][:password]

    # using the find_from_credentials method from the User model
    user = User.find_from_credentials(email, password)

    if user.save
      session[:user_id] = user.id
      flash[:notice] = "Hello, #{email}! You are now signed in."
      redirect_to "/"
    else
      flash[:error] = "email or password incorrect"
      @user = User.new(email: email)
      render :new
    end
  end

  def destroy
    # call the sign_out method defined in the ApplicationController
    sign_out
    flash[:notice] = "You signed out!"
    # redirects to the login form
    redirect_to new_session_path
  end

  def ensure_signed_out
    return unless current_user
    flash[:error] = "you are already signed in"
    redirect_to users_path
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end

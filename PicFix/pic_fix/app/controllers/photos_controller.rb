class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    render json: {
             message: "ok",
             photos_data: @photos,
           }
  end

  def show
    begin
      @photo = current_user.photos.find(params[:id])
      render json: {
               message: "ok",
               photos_data: @photo,
             }
    rescue ActiveRecord::RecordNotFound
      render json: { message: "no Photo matches that ID" }, status: 404
    rescue Exception
      render json: { message: "there was some other error" }, status: 500
    end
  end

  def new
    @photo = Photo.new
  end

  def create
    photo = Photo.new(photo_params)

    if photo.save
      redirect_to photo_path(photo)
    end
  end

  def edit
    @photo = Photo.find(params[:id])
  end

  def update
    photo = Photo.find(params[:id])
    photo.update_attributes(photo_params)

    redirect_to photo
  end

  def destroy
    @photo = Photo.destroy(params[:id])

    redirect_to photos_path
  end

  private

  def photos_params
    params.require(:photo).permit(:album_id, :image)
  end
end

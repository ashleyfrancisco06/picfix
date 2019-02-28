class AlbumsController < ApplicationController
  def index
    @albums = Album.all
    render json: {
      message: "ok",
      album_data: @albums,
    }
  end

  def show
    begin
      @album = current_user.albums.find(params[:id])
      render json: {
               message: "ok",
               album_data: @album,
             }
    rescue ActiveRecord::RecordNotFound
      render json: { message: "no Album matches that ID" }, status: 404
    rescue Exception
      render json: { message: "there was some other error" }, status: 500
    end
  end

  def new
    @album = Album.new
  end

  def create
    album = Album.new(album_params)

    if album.save
      redirect_to album_path(album)
    end
  end

  def edit
    @album = Album.find(params[:id])
  end

  def update
    album = Album.find(params[:id])
    album.update_attributes(album_params)
  end

  def destroy
    @album = Album.destroy(params[:id])

    redirect_to albums_path
  end
end

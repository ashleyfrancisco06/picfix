class User < ApplicationRecord
  has_many :albums
  has_many :photos, through: :albums

  validates :name, presence: true, length: { maximum: 50 }
  validates :email, presence: true, length: { maximum: 255 }, uniqueness: true

  has_secure_password
  validates :password, presence: true, length: { minimum: 6 }

  def self.find_from_credentials(email, password)
    user = find_by(email: email)
    return nil unless user
    user if BCrypt::Password.new(user.password_digest).is_password?(password)
  end
end

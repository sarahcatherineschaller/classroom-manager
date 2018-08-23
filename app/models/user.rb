class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, omniauth_providers: [:github]

  # validates :title, inclusion: { in: %w(Mr. Ms. Mrs.), message: "(Please use Mr., Ms., or Mrs.)"}
  validates :first_name, :last_name, :email, presence: true
  validates :email, uniqueness: true

  has_many :classrooms 
  has_many :students, through: :classrooms


  def self.from_omniauth(auth) 
  	where(provider: auth.provider, uid: auth.uid).first_or_create do |user| 
      user.provider = auth.provider 
      user.uid = auth.uid
  		user.email = auth.extra.raw_info.email
      user.first_name = auth.extra.raw_info.name.split(" ")[0]
      user.last_name = auth.extra.raw_info.name.split(" ")[1]
  		user.password = Devise.friendly_token[0,20]
      user.save
  	end 
  end
end

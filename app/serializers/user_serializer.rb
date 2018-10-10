class UserSerializer < ActiveModel::Serializer
  attributes :id, :title, :first_name, :last_name, :email
  has_many :classrooms
  has_many :students, through: :classrooms
end

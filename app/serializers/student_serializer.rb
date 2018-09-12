class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :grade
  has_many :classrooms
  has_many :users, serializer: ClassroomSerializer
end

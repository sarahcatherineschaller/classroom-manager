class ClassroomSerializer < ActiveModel::Serializer
  attributes :id, :subject, :user_id
  belongs_to :user
  has_many :students
end

#telling rails these are the attrs that we want to use

json.id  @message.id
json.user_name  @message.user.name
json.content  @message.content
json.image  @message.image.url
json.date  @message.created_at.to_s(:default)

json.messages @new_messages.each do |message|
  json.user_name message.user.name
  json.date message.created_at.to_s(:default)
  json.content message.content
  json.image message.image.url
  json.id message.id
end

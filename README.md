# DB

## users テーブル

|Column|Type|Options|
|------|----|-------|
|id|integer(11)|AI, PRIMARY_KEY|
|name|varchar(255)|index: true, null: false, unique: true|
|email|varchar(255)|null: false, unique: true|

### Association
- has_many group_users
- has_many groups through group_users
- has_many messages

## messages テーブル

|Column|Type|Options|
|------|----|-------|
|id|integer(11)|AI, PRIMARY_KEY|
|content|varchar(255)|-------|
|image|varchar(255)|-------|
|group_id|reference|null: false, foreign_key: true|
|user_id|reference|null: false, foreign_key: true|

### Association
- belongs_to user
- belongs_to group

## groups テーブル

|Column|Type|Options|
|------|----|-------|
|id|integer(11)|AI, PRIMARY_KEY|
|name|varchar(255)|null:false|

### Association
- has_many messages
- has_many group_users
- has_many users through group_users

## group_users テーブル

|Column|Type|Options|
|------|----|-------|
|id|integer(11)|AI, PRIMARY_KEY|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key:true|

### Association 中間テーブル
- belongs_to user
- belongs_to group

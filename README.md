# DB設計

## users テーブル

|column|type|option|
|------|----|------|
|id|integer(11)|AI, PRIMARY_KEY|
|name|varchar(255)||
|email|varchar(255)||

### アソシエーション

has_many group_users
has_many groups through group_users
has_many messages

## messages テーブル

|column|type|option|
|------|----|------|
|id|integer(11)||
|content|varchar(255)||
|image|varchar(255)||
|group_id|integer(11)||
|user_id|integer(11)||

### アソシエーション

belongs_to user
belongs_to group

## groups テーブル

|column|type|option|
|------|----|------|
|id|integer(11)|AI, PRIMARY_KEY|
|name|varchar(255)||

### アソシエーション

has_many messages
has_many group_users
has_many users through group_users

## group_user テーブル

|column|type|option|
|------|----|------|
|id|integer(11)|AI, PRIMARY_KEY|
|user_id|integer(11)||
|group_id|integer(11)||

### アソシエーション 中間テーブル
belongs_to user
belongs_to group


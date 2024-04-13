from fastapi import APIRouter

user2 = APIRouter()

@user2.get('/user/{user_id, username}')
async def get_user(user_id:int, username):
  return {
    "user": user_id,
    "name": username
  }
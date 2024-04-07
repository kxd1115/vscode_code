from fastapi import APIRouter

user = APIRouter()

@user.get('/user/{user_id, username}')
async def get_user(user_id:int, username):
  return {
    "user": user_id,
    "name": username
  }
# 使用APIRouter为该模块创建路径操作
from fastapi import APIRouter

# 创建子路由对象
user = APIRouter()

@user.get('/login')
async def user_login():
  return {"user": "login"}
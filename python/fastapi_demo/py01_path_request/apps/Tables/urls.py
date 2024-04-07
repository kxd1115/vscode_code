# 使用APIRouter为该模块创建路径操作
from fastapi import APIRouter

# 创建子路由对象
table = APIRouter()

@table.get('/list')
async def user_login():
  return {"table": "table数据"}
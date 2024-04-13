from fastapi import APIRouter, Form

form = APIRouter()

@form.post("/form")
async def post_form(username:str = Form(), password:str = Form()):
  # 注册，实现数据库的添加操作
  return {
    "username": username
  }
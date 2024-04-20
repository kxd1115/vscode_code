from fastapi import FastAPI, Request
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import asyncpg
from fastapi.staticfiles import StaticFiles
import ssl
from tortoise import Tortoise
from tortoise.contrib.fastapi import register_tortoise

# 导入ORM配置文件
from database.settings import TORTOISE_ORM

from routers.datas import datas
from routers.files import files
from routers.fresponse import response01
from routers.requests import request
from routers.select import select
from routers.tables import table
from routers.user01 import user1
from routers.user02 import user2
from routers.student import studentAPI


app = FastAPI()

origins = [
  "http://localhost",
]

app.add_middleware( 
  CORSMiddleware,
  allow_origins = origins, # * 代表所有IP
  allow_credentials = True,  # 是否正常认证
  allow_methods = ["GET", "POST"],  # 允许的请求类型
  allow_headers = ["*"] # 自定义限制带的请求头参数
)

# fastapi一旦运行，register_tortoise则同时开始执行，实现监控
# async def run():
#   await Tortoise.init(
#     TORTOISE_ORM # 放在单独的配置文件中
#   )
#   await Tortoise.generate_schemas()
#   pg_client = Tortoise.get_connection("pg_conn")

register_tortoise(
    app = app,
    config = TORTOISE_ORM
)
app.mount("/statics", StaticFiles(directory="statics"))

# app.include_router(user1, tags=["请求参数1"])
# app.include_router(user2, tags=["请求参数2"])
# app.include_router(select, tags=["查询参数01"])
# app.include_router(datas, tags=["查询参数02"])

# app.include_router(datas, tags=['form表单'])
# app.include_router(table, tags=['table数据'])
# app.include_router(files, tags=['文件'])
# app.include_router(request, tags=['请求头内容'])
# app.include_router(response01, tags=['响应模型'])

app.include_router(studentAPI, prefix='/student', tags=['选课系统学生接口'])

@app.middleware("http")
async def middleware(request: Request, call_next):
    # 请求代码块
    response = await call_next(request)
    # 在请求代码块中对所有请求做其他操作
    # if request.client.host in ["127.0.0.1"]: # 假设当前访问的IP在黑名单中
    #   return Response(content="visit forbidden")
    
    # 权限设置
    if request.url.path in ['/user']: 
        return Response(content="visit forbidden")
    
    # 响应代码块
    
    return response

# @app.middleware("http")
# async def MyCORSMiddleware(request: Request, call_next):
  
  
#     # 响应代码块
#     response = await call_next(request)
#     # 不限制请求客户端
#     response.headers["Access-Control-Allow-Origin"] = "localhost"
#     return response

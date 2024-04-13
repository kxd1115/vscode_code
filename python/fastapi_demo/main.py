from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles
import ssl
from tortoise import Tortoise

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


app = FastAPI()

  # fastapi一旦运行，register_tortoise则同时开始执行，实现监控
async def run():
  await Tortoise.init(
    config = TORTOISE_ORM # 放在单独的配置文件中
  )

app.mount("/statics", StaticFiles(directory="statics"))

app.include_router(user1, tags=["请求参数1"])
app.include_router(user2, tags=["请求参数2"])
app.include_router(select, tags=["查询参数01"])
app.include_router(datas, tags=["查询参数02"])

app.include_router(datas, tags=['form表单'])
app.include_router(table, tags=['table数据'])
app.include_router(files, tags=['文件'])
app.include_router(request, tags=['请求头内容'])
app.include_router(response01, tags=['响应模型'])
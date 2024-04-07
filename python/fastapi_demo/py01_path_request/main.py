from fastapi import FastAPI # type: ignore
import uvicorn # type: ignore

# 导入子路由接口对象
from apps.Users.urls import user
from apps.Tables.urls import table

app = FastAPI()

# 使用include_router分发子路由
# 通过prefix设置跳转到子路由的总路径
# 通过tags设置子路由接口的名称
app.include_router(user, prefix="/user", tags=['用户接口'])
app.include_router(table, prefix="/table", tags=['表单接口'])
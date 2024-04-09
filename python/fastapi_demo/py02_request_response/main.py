from fastapi import FastAPI # type: ignore
import uvicorn # type: ignore

from apps.request.users import user
from apps.select.select import select
from apps.data.datas import datas

app = FastAPI()

app.include_router(user, tags=["请求参数"])
app.include_router(select, tags=["查询参数01"])
app.include_router(datas, tags=["查询参数02"])

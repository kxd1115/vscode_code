from fastapi import FastAPI # type: ignore
import uvicorn # type: ignore

from apps.request.users import user
from apps.select.select import select

app = FastAPI()

app.include_router(user, tags=["请求参数"])
app.include_router(select, tags=["查询参数"])

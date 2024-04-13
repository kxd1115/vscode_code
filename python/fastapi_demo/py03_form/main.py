from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles
from apps.forms.urls import form 
from apps.files.urls import file
from apps.request.urls import request
from apps.response.urls import user

app = FastAPI()

app.mount("/statics", StaticFiles(directory="statics"))

app.include_router(form, tags=['form表单'])
app.include_router(file, tags=['文件'])
app.include_router(request, tags=['请求头内容'])
app.include_router(user, tags=['响应模型'])



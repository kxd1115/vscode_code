from fastapi import FastAPI
import uvicorn
from pydantic import BaseModel
from apps.forms.urls import form 
from apps.files.urls import file
from apps.request.urls import request

app = FastAPI()

app.include_router(form, tags=['form表单'])
app.include_router(file, tags=['文件'])
app.include_router(request, tags=['请求头内容'])



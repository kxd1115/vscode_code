from fastapi import FastAPI
import uvicorn
from pydantic import BaseModel
from apps.forms.urls import form 
from apps.files.urls import file

app = FastAPI()

app.include_router(form, prefix='/form', tags=['form表单'])
app.include_router(file, prefix='/file', tags=['文件'])



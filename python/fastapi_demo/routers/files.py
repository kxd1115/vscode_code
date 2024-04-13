from fastapi import APIRouter, File, UploadFile
from  typing import List
import os

files = APIRouter()

@files.post("/file")
async def post_file(file: bytes = File()):
    # 适合小文件上传
    return {
      "file": file
    }

@files.post("/files")
async def post_files(files: List[bytes] = File()):
    # 适合小文件上传
    return {
      "file": len(files)
    }

# 上传单个文件
@files.post("/uploadFile")
async def post_file(file: UploadFile):
    # 适合大文件上传，用的比较多
    
    path = os.path.join('imgs', file.filename)
    # 文件保存
    with open(path, 'wb') as f:
      for line in file.file:
        f.write(line)
    
    return {
      "file": file.filename
    }
  
# 上传多个文件
@files.post("/uploadFiles")
async def post_files(files: List[UploadFile]):
    # 适合大文件上传，用的比较多
    
    return {
      "names": [files.filename for files in files]
    }
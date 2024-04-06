from fastapi import FastAPI # type: ignore
import uvicorn # type: ignore

app = FastAPI()

# 使用装饰器进行路由映射
# 路径操作装饰器
@app.get("/")
# 路径操作函数
async def hello():
  return {"user_id":1001}

if __name__ == '__main__':
  uvicorn.run("main:app", port=8080, debug=True, reload=True)
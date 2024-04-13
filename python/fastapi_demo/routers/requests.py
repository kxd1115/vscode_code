from fastapi import APIRouter, Request

request = APIRouter()

@request.post("/request")
async def request_post(request: Request):
  return {
    "URL": request.url,
    "客户端IP地址": request.client.host,
    "请求方法": request.method,
    "请求头": dict(request.headers),
    "cookies": request.cookies,
  }
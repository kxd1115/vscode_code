### 关于提示Empty reply from server错误
可以尝试使用修改仓库地址来解决

1. 查看当前的仓库地址
```shell
git remote -v
```
2. 把`http://`或者`https://`替换为`git@`
```shell
git remote set-url
```
用法：git remote set-url [--push] <名称> <新的地址> [<旧的地址>]
或：git remote set-url --add <名称> <新的地址>
或：git remote set-url --delete <名称> <地址>

如果首页不展示你提交的记录，那时因为当前的登录邮箱和github不一致

### 解决远程仓库中文件夹有白色箭头，且不能打开的问题
* 这是因为其他工程下有.git文件夹，Github将视其为子系统模块
```shell
git rm --cached 目录名
git add .
git commit -m "commit msg"
git push
```

### npm安装过程中遇到的问题
```shell
#npm code ERESOLVE
#npm ERR! ERESOLVE could not resolve

# 尝试在npm install或npm update时附带 --force 参数来忽略冲突

```

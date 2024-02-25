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

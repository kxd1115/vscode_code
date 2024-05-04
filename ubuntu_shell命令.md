```shell
sudo apt remove npm
# 卸载npm

sudo rm -r [文件夹/文件]
# 删除文件或者文件夹
```


### 注意
如果前端在windows,后端在ubuntu上时,后端需要检查UFW状态
```shell
# 查看ufw状态
sudo ufw status

# 激活ufw
sudo ufw enable

# 关闭ufw
# sudo ufw disable

# 允许端口访问
# 这里假设后端服务运行在8000端口
sudo ufw allow 8000/tcp

# 验证
sudo ufw status

# 重启后端服务
```
#### ubuntu查看ip的命令
```shell
# 查看本机ip
# 前提是安装额 net-tools
# sudo apt install net-tools
ifconfig

# 查看本机ip
hostname -I

# 查看本机ip
curl ifconfig.me
```
  
`


### 此时前端电脑可以检查一下是否能够访问后端端口
```shell
curl http://后端电脑的IP地址:8000
```
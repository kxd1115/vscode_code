在ubuntu上使用postgresql

### 安装

```shell
sudo apt update
# postgresql-contrib 和 postgresql-client 包含一些工具
sudo apt install postgresql postgresql-contrib

# 如果需要安装特定版本
# 需要在 sources.list 中添加官方 PostgreSQL 存储库和证书，然后从那里安装它
# 创建文件存储配置
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

# 导入安装包密钥
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# 更新包列表，并安装指定版本
sudo apt-get update
sudo apt-get -y install postgresql-12
```

### 启动Posgtgresql数据库
```shell
# 启动数据库
sudo service postgresql start

# 停止数据库
sudo service postgresql stop

# 重启数据库
sudo service postgresql restart
```

### 修改postgres密码 
```shell
# 配置linux的postgres用户
# PostgreSQL默认安装，会创建一个默认的linux用户postgres，设置postgres用户密码

# 删除用户postgres的密码
sudo passwd -d postgres
# 设置用户postgres的密码
sudo -u postgres passwd

# 创建新的超级用户
sudo -u postgres createuser --superuser 【user name】

# 配置新的数据库账户
# 登录Postgresql客户端
sudo -u postgres psql

# 设置新的数据库用户postgres的密码
ALTER USER postgres WITH PASSWORD 'postgres'
# 或
\password

# 查看当前数据库账户
\c

# 查看全部数据库账户
\du

# 查看当前所有数据库
\l

```

### 参照PostgreSQL 允许远程访问设置方法
1. 配置文件路径
* Postgresql 14配置文件默认路径/etc/postgresql/14/main/
2. PostgreSQL 角色和身份认证方式
* PostgreSQL 数据库访问权限是通过角色来处理的。一个角色代表一个数据库用户或者一个数据库用户组。
* PostgreSQL 支持多种身份认证方式。最常用的方法如下：
  * Trust - 只要满足 pg_hba.conf 定义的条件，一个角色就可以不使用密码就能连接服务器。
  * Password - 通过密码，一个角色可以连接服务器。密码可以被存储为 scram-sha-256、md5 和 password(明文)。
  * Ident - 仅仅支持 TCP/IP 连接。它通常通过一个可选的用户名映射表，获取客户端操作系统用户名。
  * Peer - 和 Ident 一样，仅仅支持本地连接。

修改/etc/postgresql/12/main/中的pg_hba.conf文件
增加一行`host all all 172.28.192.0/24 scram-sha-256`其中IP地址为客户端的IP地址。
由于WSL2的特性，每次宿主系统或子系统重新启动，WSL的宿主端和客户端的IP会发生变化。
#### IPv4 local connections:
```shell
# 访问并增加内容
sudo vim /etc/postgresql/12/main/pg_hba.conf
host all all 127.0.0.1/32 scram-sha-256
# host all all 172.28.192.0/24 scram-sha-256
```
参考：PostgreSQL 角色和身份认证方式

3. 设置防火墙
参照ubuntu关于防火墙开放端口 - 博二爷 - 博客园 (cnblogs.com)
4. 卸载Postgresql
* 查看Postgresql进程
```shell
ps -C postgres
```
确认无运行Postgresql
* 卸载Postgresql 相关的包
```shell
sudo apt-get --purge remove postgresql\*
```
* 删除配置文件和User
```shell
rm -r /etc/postgresql/
rm -r /etc/postgresql-common/
rm -r /var/lib/postgresql/
userdel -r postgres
groupdel postgres
# 卸载完成
```
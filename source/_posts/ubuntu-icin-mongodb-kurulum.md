---
title: Ubuntu için Mongodb Kurulumu
date: 2021-12-19 17:19:15
tags: [mongodb, ubuntu]
categories: Kurulum
---
# Mongodb Kurulumu
## Kurulum Adımı

Mongodb'nin 5.0 versiyonu için kurulum yapılmaktadır.

```bash
$ wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
$ sudo apt update
$ sudo apt install mongodb-org
```

<!-- more -->

## Kullanıcı Yapılandırması (İsteğe Bağlı)
Mongodb kullanmak için kullanıcı yapılandırması şart **değildir**. Güvenliği arttırmak adına kullanıcı yapılandırması yapılmalıdır. İsterseniz bu kısmı yapmadan da kullanmaya başlayabilirsiniz.

Kullanıcı yapılandırması yapıldıktan sonra sadece kullanıcı ile veritabanına bağlanılabilir. Esnek çalışabilmek için öncelikle kapsamlı yetkiye sahip bir admin kullanıcısı oluşturulmalıdır.

Veritabanına bağlan.
```bash
$ mongo
```
``admin`` veritabanını seç ve kullanıcı oluştur.
```js
use admin
db.createUser(
  {
    user: "<kullanici_adi>",
    pwd: passwordPrompt(),
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" },
      { role: "readWriteAnyDatabase", db: "admin" },
      { role: "clusterAdmin", db: "admin" }
    ]
  }
)
```

Admin kullanıcı oluşturulduktan sonra ``/etc/mongod.conf`` dosyasında aşağıdaki düzenlemeleri yap.
```apacheconf
...
# network interfaces
net:
  port: 27017
  bindIp: 0.0.0.0
...
security:
    authorization: "enabled"
...
```
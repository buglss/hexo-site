---
title: Ubuntu için Ngixn Kurulumu
date: 2022-01-21 22:36:38
tags: [nginx, ubuntu]
categories: Kurulum
---

## Kurulum

```bash
$ sudo apt install nginx
```

## Loadbalancer

Konfigürasyon amaca göre değişir. Aşağıdaki örnek konfigürasyon 3000 portunu dinleyen ve 3001,3002,3003,3004 portlarına loadbalance yapan ayardır. ``/etc/nginx/sites-available/default`` dosyasına aşağıdakileri ekle.

```nginxconf
...
upstream prod {
	least_conn;
	server 127.0.0.1:3001;
	server 127.0.0.1:3002;
	server 127.0.0.1:3003;
	server 127.0.0.1:3004;
}
...
server {
	listen 3000 default_server;
	listen [::]:3000 default_server;

	server_name <fqdn>;

	location / {
		proxy_pass http://prod;
	}
}
...
```
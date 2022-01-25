---
title: Nginx Reverse Proxy
date: 2022-01-25 21:42:07
tags: [nginx, ubuntu]
categories: Faydalı Bilgiler
---

Konfigürasyonların farklı dosyalarda tanımlanmasını tavsiye ederim. Bu şekilde daha yönetilebilir olur. Mantık olarak ``sites-available`` altında konfigürasyonlar tanımlanır. Uygulanması istenen konfigürasyonlar ``sites-enabled`` altında sembolik link ile linklenir.

# /etc/nginx/sites-available/default

Varsayılan ayarları **default** dosyasına yaz.

```nginxconf
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}   

geo $whitelist {
	default 0;
	
	# CIDR in the list below are not limited
	<ip>/24 1;
	<ip>/32 1;
}

map $whitelist $limit_key {
	0 $binary_remote_addr;
	1 "";
}

limit_conn_zone $limit_key zone=addr:10m;

server {
    server_name _;
    listen 80 default_server;
    listen 443 ssl default_server;
    ssl_certificate /etc/nginx/ssl/xxx.domain.com.crt;
	ssl_certificate_key /etc/nginx/ssl/xxx.domain.com.key;
    return 404;
}
```
<!-- more -->

``map`` değişken yaratmak için kullanılır. **$connection_upgrade** isminde bir değişken tanımlanır. Bu değişken **Connection** http header bilgisini atamak için kullanılır.

	Syntax:	map string $variable { ... }
	Default:	—
	Context:	http
	
``limit_conn_zone`` tanımlanan key alan başına bağlantı limiti tanımlamak için kullanılır. Çoğunlukla tek bir ip adresinden yapılan bağlantı sayısını sınırlandırmak için kullanılır. İstemci/Client ip adresi key olarak kullanılmıştır. Belirli ip adresleri için bu kuralın uygulanması istenmemiştir. Bunu sağlamak için ``geo`` ve ``map`` kullanılarak dinamik bir yapı kurulmuştur. Key alanı boş değer olarak verirsen kural uygulanmaz, yok sayılır.

	Syntax:	limit_conn_zone key zone=name:size;
	Default:	—
	Context:	http

``geo`` istemci/client ip adresi bazlı değişken tanımlamak için kullanılır. **$whitelist** adında bir değişken tanımlanır. Bu değişken **$limit_key** değişkenini tanımlamak için kullanılır.

	Syntax:	geo [$address] $variable { ... }
	Default:	—
	Context:	http

Sunucu ismi olarak **_** verildiğinde hiçbir isme uymayanların tümünü kapsar. Bu noktada tanımlanmış sunucu isimleri arasında yer almayan isme sahip bir request geldiğinde 404 sayfasına yönlendirme işlemi yapılmıştır. 80 ve 443 portu dinlenmektedir.

# /etc/nginx/sites-available/XXX.conf

## Server HTTP

```nginxconf
...
server {
	listen 80;
	server_name xxx.domain.com;
	access_log /var/log/nginx/http.xxx.domain.com.access.log;
	error_log /var/log/nginx/http.xxx.domain.com.error.log;
	client_body_timeout 30s;
	client_header_timeout 30s;
	limit_conn addr 100;
	location @reverse {
		proxy_set_header Host $http_host;
		proxy_set_header X-Forwarded-Proto $scheme;
		proxy_set_header X-Forwarded-Port $server_port;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_pass http://<ip>:<port>;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection $connection_upgrade;
		proxy_read_timeout 120s;
		proxy_request_buffering on;
		proxy_buffering on;
	}
	location ~ ^/nonsecure/.* {
		allow <ip>;
		allow <ip>;
		deny all;
		try_files /dev/null @reverse;
	}
	location / {
		return 301 https://$host$request_uri;
	}
}
...
```

``location`` request url bilgisine göre yapılandırma yapmak için kullanılır. **@** ön eki ile yapılan tanımlandırmaya isim verilir. **@reverse** isminde yapılan tanımla kullanılmıştır.

	Syntax: location [ = | ~ | ~* | ^~ ] uri { ... }
			location @name { ... }
	Default: —
	Context: server, location

``try_files`` belirtilen sırada varlık kontrolü yapar ve ilk bulgu sonucu döndürür.

	Syntax: try_files file ... uri;
			try_files file ... =code;
	Default: —
	Context: server, location

## Server HTTPS

```nginxconf
...
server {
	listen 443 ssl;
	server_name xxx.domain.com;
	access_log /var/log/nginx/https.xxx.domain.com.access.log;
	error_log /var/log/nginx/https.xxx.domain.com.error.log;
	client_body_timeout 30s;
	client_header_timeout 30s;
	limit_conn addr 100;
	ssl_certificate /etc/nginx/ssl/xxx.domain.com.crt;
	ssl_certificate_key /etc/nginx/ssl/xxx.domain.com.key;
	location @reverse {
		proxy_set_header Host $http_host;
		proxy_set_header X-Forwarded-Proto $scheme;
		proxy_set_header X-Forwarded-Port $server_port;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_pass http://<ip>:<port>;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection $connection_upgrade;
		proxy_read_timeout 120s;
		proxy_request_buffering on;
		proxy_buffering on;
	}
	location ~ ^/(secure|hidden) {
		allow <ip>/23;
		allow <ip>/24;
		deny all;
		try_files /dev/null @reverse;
	}
	location ~ ^/u/.* {
		try_files /dev/null @reverse;
	}
	location ~ ^/cdn/.* {
		add_header 'Access-Control-Allow-Origin' '*';
		add_header 'Access-Control-Allow-Methods' 'GET';
		expires 90d;
		root /<root_path>/<sub_path>/<dir>;
	}
	location ~ ^/upload/ {
		client_max_body_size 2024M;
		client_body_timeout 360s;
		try_files /dev/null @reverse;
	}
	location ~ (^\/assets$)|(^\/assets\/$) {
		deny all;
	}
	location / {
		try_files /dev/null @reverse;
	}
}
```

# Test

Konfigürasyonları test etmek için kullanılır.

```bash
$ sudo nginx -T
```

# Restart

Restart <u>gerektiren</u> konfigürasyonların uygulanması için kullanılır.

```bash
$ sudo services nginx restart
```

# Reload

Restart <u>gerektirmeyen</u> konfigürasyonların uygulanması için kullanılır.

```bash
$ sudo services nginx reload
```
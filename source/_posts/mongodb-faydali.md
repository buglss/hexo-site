---
title: Mongodb Faydalı Bilgileri
date: 2021-12-19 17:42:19
tags: mongodb
categories: Faydalı Bilgiler
---
# Mongodb Servisini Enable/Startup Yapma
Enable/Startup olup olmadığını görmek için aşağıdaki komutu çalıştır.
## is-enabled
```bash
$ sudo systemctl is-enabled mongod
```
Enable/Startup olarak ayarla.
## enable
```bash
$ sudo systemctl enable mongod
```

<!-- more -->

# Temel Mongodb Servis Komutları
## status
Servisin çalışma durumunu öğren.
```bash
$ sudo service mongod status
```
## start
Servisi çalıştır.
```bash
$ sudo service mongod start
```
## stop
Servisi durdur.
```bash
$ sudo service mongod stop
```
## restart
Servisi yeniden başlat.
```bash
$ sudo service mongod restart
```
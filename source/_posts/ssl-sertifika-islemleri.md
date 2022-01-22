---
title: SSL Sertifika İşlemleri
date: 2022-01-22 21:55:29
tags: [ubuntu, ssl]
categories: Faydalı Bilgiler
---

# Private Key ve CSR
Sertifika satın alma işlemi öncesi key ve csr dosyaları üretilir. Üretilen csr kullanılarak satın alma işlemi yapılır. 
```bash
$ openssl genrsa -out /path/to/www_server_com.key 2048
$ openssl req -new -key /path/to/www_server_com.key -out /path/to/www_server_com.csr
```

# Satın Alma
Farklı web/http sunucusularına göre satın alınan sertifika dosyaları kullanılır. Temelde mantık sertifika dosyalarının paketlenmesidir(bundle). Satın alınan türe(DV, OV, EV) göre bundle(paket) dosya oluşturulur. Bu yazıda sık kullanılan crt ve pfx formatına değinilecektir. 

<!-- more -->

# CRT

CRT dosyaları genelde Linux tabanlı sistemlerde kullanılır. Paket(bundle) dosyasına ilgili sertifika dosyaları (crt) sertifika sağlayıcı tarafından belirtildiği sırayla eklenir. (sirket.crt > X.crt > Y.crt > Z.crt --> bundle.crt)

```bash
$ cat sirket.crt ev.bundle.crt > www_server_com.crt
```

# PFX

PFX dosyaları genelde Windows tabanlı sistemlerde kullanılır. Bu formatta private key, alt kök sertifika ve SSL sertifikası kombine olarak bulunur. Örneğin crt ile üretilecekse öncelikle yukarıdaki gibi crt dosyası üretilir. Sonrasında private key ile birlikte kullanılarak pfx dosyası üretilir.

```bash
$ openssl pkcs12 -export -out www_server_com.pfx -inkey www_server_com.key -in www_server_com.crt
```
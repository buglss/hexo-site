---
title: pm2 Faydalı Bilgileri
date: 2021-12-19 17:51:21
tags: pm2
categories: Faydalı Bilgiler
---
# node-red ile Proses Başlatma
```bash
$ pm2 start --name <proses_adi> node-red -- -u <proje_dizini>
```

# Temel pm2 Komutları
### ls
Proses listesi.
```bash
$ pm2 ls <all|pid|pname>
```

<!-- more -->

### start
Proses başlatma.
```bash
$ pm2 start <all|pid|pname>
```
### stop
Proses durdurma.
```bash
$ pm2 stop <all|pid|pname>
```
### restart
Proses yeniden başlatma.
```bash
$ pm2 restart <all|pid|pname>
```
### save
Proses listesini kaydetme.
```bash
$ pm2 save
```

# pm2 Enable/Startup Yapma
Enable/Startup olarak ayarla. Bu komut çalıştırıldıktan sonra root ile yapılacak işlem için çıktıda oluşan komutu sudo ile çalıştırın.
```bash
$ pm2 startup
```

# pm2 Log Yönetim Modülü
Proseslerin log yönetimi için kullanılabilecek bir modüldür.
```bash
$ pm2 install log-rotate
```
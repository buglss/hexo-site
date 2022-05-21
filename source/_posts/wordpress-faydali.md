---
title: Wordpress Faydalı Bilgileri
date: 2021-12-19 16:51:07
tags: wordpress
categories: Faydalı Bilgiler
---
# Wordpress Veritabanı Yedek Alma
Aşağıdaki komutu yedeğini almak istediğiniz veritabanı bilgilerine göre doldurarak çalıştırın.
```bash
$ mysqldump --add-drop-table -u <veritabani_kullanici_adi> -p <veritabani_adi> > <dosya_adi>.sql
```

# Wordpress Veritabanı Yedekten Yükleme
Aşağıdaki komutu yedekten yüklemek istediğiniz veritabanı bilgilerine göre doldurarak çalıştırın.
```bash
$ mysql -u <veritabani_kullanici_adi> -p <veritabani_adi> < <dosya_adi>.sql
```
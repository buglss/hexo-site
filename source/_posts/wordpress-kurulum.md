---
title: Ubuntu için Wordpress Kurulumu
date: 2021-12-19 15:16:21
tags: wordpress
categories: Kurulum
---

## Ön Hazırlık (İsteğe Bağlı)
<br />
<details>
<summary>Ön Hazırlık Adımları (Görüntülemek için Tıkla)</summary>

Ubuntu işletim sistemine kurulum yapmadan önce isteğe bağlı genel bir hazırlık da yapabilirsiniz. Ben kurulumlardan önce bu hazırlık adımını yapmayı tercih ediyorum.

İşletim sistemindeki paketler güncellenir ve gereksiz paketler otomatik temizlenir. İhtiyaç duyulan geliştirici paketleri kurulur.

### Paketleri Güncelle ve Gereksizleri Temizle
```bash
$ sudo apt update
$ sudo apt upgrade
$ sudo apt autoremove
$ sudo apt install build-essential
```

### Geliştirici(developer) Paketlerini Kur
Geliştirici paketlerini daha önce kurduysanız aşağıdaki komutu çalıştırmanıza gerek yoktur.
```bash
$ sudo apt install build-essential
```

</details>

## Wordpress Kurulumu
### Kurulum Adımı
HTTP sunucusu olarak apache kullanılmıştır. Apache, PHP, MySQL, Wordpress ve kullanışlı bazı paketlerin kurulumu yapılmaktadır.
```bash
$ sudo apt install apache2 wordpress ghostscript libapache2-mod-php mysql-server php php-mysql php-ldap php-curl php-xml php-mbstring php-imagick php-zip php-bcmath php-intl php-json
```

<!-- more -->

### Apache Yapılandırması
Apache mod_rewrite modülünü aktif hale getir. Ardından apache servisini yeniden başlat.
```bash
$ sudo a2enmod rewrite
$ sudo service apache2 reload
```

``/etc/apache2/conf-available/security.conf`` dosyasına git. ``ServerTokens`` ve ``ServerSignature`` bölümlerini aşağıdaki gibi düzenle.
```apacheconf 
ServerTokens Prod
ServerSignature Off
```

``/etc/apache2/sites-available/000-default.conf`` dosyasına git. Aşağıdaki gibi düzenle.
```apacheconf 
<VirtualHost *:80>
	ServerAdmin webmaster@localhost
	DocumentRoot /var/www/html
    	<Directory "/var/www/html">
        	Options FollowSymLinks MultiViews
        	AllowOverride All
        	Order Allow, Deny
        	Allow from All
    	</Directory>


	ErrorLog ${APACHE_LOG_DIR}/error.log
	CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

<VirtualHost *:80>
    ServerName <SERVER_NAME>
    ServerAlias <SERVER_ALIAS>
    DocumentRoot "/var/www/html/<FOLDER_NAME>"
    <Directory "/var/www/html/<FOLDER_NAME>">
        Options FollowSymLinks MultiViews
        AllowOverride All
        Order Allow, Deny
        Allow from All
    </Directory>
</VirtualHost>
```

Apache'nin wordpress dosyalarını kullanabilmesi için ``www-data`` kullanıcısına ve grubuna sahiplik ver.
```bash
$ sudo chown -R www-data:www-data /var/www/html/<FOLDER_NAME>
```

### MySQL Yapılandırması
root kullanıcısı ile veritabanına bağlan.
```bash
$ sudo mysql -u root
```

Web sitesinin bağlanacağı veritabanının oluştur.
```sql
mysql> CREATE DATABASE <veritabani_ismi>;
```

Oluşturulan veritabanı için kullanıcı oluştur.
```sql
mysql> CREATE USER '<kullanici_adi>'@'localhost' IDENTIFIED BY '<parola>';
```

Oluşturulan kullanıcıya oluşturulan veritabanı için yetkilendirme yap.
```sql
mysql> GRANT ALL ON <veritabani_ismi>.* TO '<kullanici_adi>'@'localhost' WITH GRANT OPTION;
```

Yapılan değişikliklerin uygulanması için aşağıdaki komutu çalıştır.
```sql
mysql> FLUSH PRIVILEGES;
```

Veritabanında root ile yapılacak işlemler bu kadardı. Çıkış yapabilirsin.
```sql
mysql> quit;
```
---
title: tmp Konfigürasyon Yenile
date: 2022-01-21 23:18:58
tags: [ubuntu]
categories: Faydalı Bilgiler
---

# Komut

Bu yöntem her zaman doğru sonuç vermeyebilir. Boot sırasında çalışan diğer servisler ile bağlantılı noktalar beklendiği gibi çalışmayabilir. O yüzden bu yöntemden ziyade tmp konfigürasyon dosyasında yapılan değişiklikten sonra en sağlıklısı restart atmaktır.

```bash
$ sudo /bin/systemd-tmpfiles --create --remove --boot --exclude-prefix=/dev
```

# tmp Dosya Yolları

```bash
/etc/tmpfiles.d/*.conf
/run/tmpfiles.d/*.conf
/usr/lib/tmpfiles.d/*.conf

~/.config/user-tmpfiles.d/*.conf
$XDG_RUNTIME_DIR/user-tmpfiles.d/*.conf
~/.local/share/user-tmpfiles.d/*.conf
...
/usr/share/user-tmpfiles.d/*.conf
```
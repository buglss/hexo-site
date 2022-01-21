---
title: Kurulum Ön Hazırlık
date: 2021-12-26 18:25:10
tags: ubuntu
categories: Kurulum
---
## Ön Hazırlık

Ubuntu işletim sistemine kurulum yapmadan önce isteğe bağlı genel bir hazırlık da yapabilirsiniz. Ben kurulumlardan önce bu hazırlık adımını yapmayı tercih ediyorum.

İşletim sistemindeki paketler güncellenir ve gereksiz paketler otomatik temizlenir. İhtiyaç duyulan geliştirici paketleri kurulur.

### Paketleri Güncelle ve Gereksizleri Temizle
```bash
$ sudo apt update
$ sudo apt upgrade
$ sudo apt autoremove
```

### Geliştirici(developer) Paketlerini Kur
Geliştirici paketlerini daha önce kurduysanız aşağıdaki komutu çalıştırmanıza gerek yoktur.
```bash
$ sudo apt install build-essential
```
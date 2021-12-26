---
title: Ubuntu için Nodejs Kurulumu
date: 2021-12-19 17:02:05
tags: nodejs
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

## Nodejs Kurulumu
Nodejs'i ``nvm`` kütüphanesini kullanarak kurucaz.
### nvm Kurulumu
Aşağıdaki komut nvm reposundaki master projeyi indirir. Ardından install.sh dosyasını çalıştırır.
```bash
$ curl https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

nvm kütüphanesi ile ilgili daha fazla bilgi için: [Detay](https://github.com/nvm-sh/nvm)

### Kurulum Adımı
Nodejs ve beraberinde npm kurulumu yapılır. Aşağıdaki komut lts versiyonunu kurar.
```bash
$ nvm install --lts
```
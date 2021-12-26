---
title: Nodejs ile node-red Kurulumu
date: 2021-12-19 17:11:23
tags: node-red
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

## node-red Kurulumu
Öncelikle nodejs kurulumunun yapılmış olması gerekmektedir. Eğer nodejs kurulumu yapmadıysanız [buradan](/2021/12/19/nodejs-kurulum/) kurulum yapabilirsiniz.

Eğer global kurulum yapmak istiyorsanız ``-g`` ile birlikte kullanmalısınız. Proje özelinde kurulum için ``-g`` olmadan çalıştırın.
```bash
$ npm i -g node-red
```

---
title: Ubuntu için Nodejs Kurulumu
date: 2021-12-19 17:02:05
tags: [nodejs, ubuntu]
categories: Kurulum
---
# Nodejs Kurulumu
Nodejs'i ``nvm`` kütüphanesini kullanarak kurucaz.
# nvm Kurulumu
Aşağıdaki komut nvm reposundaki master projeyi indirir. Ardından install.sh dosyasını çalıştırır.
```bash
$ curl https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

nvm kütüphanesi ile ilgili daha fazla bilgi için: [Detay](https://github.com/nvm-sh/nvm)

# Kurulum Adımı
Nodejs ve beraberinde npm kurulumu yapılır. Aşağıdaki komut lts versiyonunu kurar.
```bash
$ nvm install --lts
```
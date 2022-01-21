---
title: Ubuntu için Docker Kurulumu
date: 2022-01-21 21:40:50
tags: [docker, ubuntu]
categories: Kurulum
---

## Temizlik

Arkamızı toplayarak ilerlemek her zaman daha iyidir. Bu yüzden öncelikle işe mevcuttaki docker ile ilgili paketleri silmeyle 
başla.

```bash
$ sudo apt remove docker docker-engine docker.io containerd runc
```

## Ön Kurulum

İhtiyaç duyulan paketlerin kurulmasına geç.

```bash
$ sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
```

## Repository Ekle

Docker paket reposunu ekle. Repo erişimi için paket repo keyleri arasına docker reposunun keyin ekle. Sonrasında paket repoları arasına docker reposunu ekle.

```bash
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo apt-key fingerprint 0EBFCD88
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get install docker-ce docker-ce-cli containerd.io
```

<!-- more -->

## Docker Compose

Docker kurulumu peşine oldukça kullanışlı bulduğum Docker Compose aracını kur. Github reposundaki son versiyonunu işletim sistemine uygun şekilde ilgili dizin altına indir. docker-compose için çalıştırılabilme yetkisi ver. Kullanıcını docker grubuna ekle. 

```bash
$ sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
$ sudo usermod -aG docker $USER
$ newgrp docker
```
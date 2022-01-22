---
title: LVM Disk Genişlet
date: 2022-01-22 21:16:29
tags: [ubuntu, lvm]
categories: Faydalı Bilgiler
---

LVM disk genişletme (LVM Extend) işleminde 2 farklı yöntemden bahsedicem. Ubuntu işletim sisteminde partition tanımı sınırlıdır. Yöntemlerden birinde yeni partition yaratarak extend işlemi yapılır. Diğer yöntemde ise mevcut partition silinip yeniden oluşturularak extend işlemi yapılır.

#### ``sda4`` partition, ``/dev/sda4`` volume ve ``/dev/root-vg/root`` volume group için işlem yapılmaktadır.
 
# Yöntem 1
``sda4`` partition'u sil ve free space ile birleştirek yeni bir partition yarat.
```bash
$ cfdisk
```

İşletim sisteminin partition tablosunu yeniden okumasını sağla.
```bash
$ partprobe
```

<!-- more -->

``sda4`` partition'ın fiziksel volume'ünü yeniden buyutlandır. Bu partition ``/dev/sda4`` volume'e bağlanmıştır. Bu volume ise ``/dev/root-vg/root`` volume group'a bağlanmıştır.

Fiziksel volume bilgilerini gör.
```bash
$ pvscan
```
Yeniden boyutlandır.
```bash
$ pvresize /dev/sda4
```

LVM diski ``/dev/root-vg/root`` volume group'una bağlanmıştır.

Logic volume bilgilerini gör.
```bash
$ lvscan
```
Yeniden boyutlandır.
```bash
$ lvextend -l+100%FREE /dev/root-vg/root 
```

Dosya sistemini yeniden boyutlandır.

```bash
$ resize2fs /dev/root-vg/root
```

# Yöntem 2
Free space alanından yeni bir partition yarat.
```bash
$ cfdisk
```

İşletim sisteminin partition tablosunu yeniden okumasını sağla.
```bash
$ partprobe
```

Oluşturulan partition'ın fiziksel volume'ünü oluştur.

```bash
$ pvcreate /dev/sda4
```

Oluşturulan volume'ü ``root-vg`` volume group'una ekle.
Fiziksel volume bilgilerini gör.
```bash
$ pvscan
```
Volume group'u genişlet.
```bash
$ vgextend root-vg /dev/sda4
```

LVM diski ``/dev/root-vg/root`` volume group'una bağlanmıştır.

Logic volume bilgilerini gör.
```bash
$ lvscan
```
Yeniden boyutlandır.
```bash
$ lvextend -l+100%FREE /dev/root-vg/root 
```

Dosya sistemini yeniden boyutlandır.

```bash
$ resize2fs /dev/root-vg/root
```
---
title: LVM Diskler Arası Volume Group Transferi
date: 2022-01-22 21:06:05
tags: [ubuntu, lvm]
categories: Faydalı Bilgiler
---

``/data`` dizinine mount edilmiş logic volume için çalışma yapılıyor. Bu dizinin bağlandığı logic volume'ün volume group'u ``data_vg``. ``data_vg`` volume group ``/dev/sdb`` partition'a bağlı. Genişletmek istediğin volume group ``root_vg``.

## Disk Bağlantısını Kes
```bash
$ umount /data
```

## ``/etc/fstab`` İçinden İlgili Mount Point Satırını Sil
```bash
$ vim /etc/fstab
```

<!-- more -->

## ``/dev/sdb`` Fiziksel Diskinin Volume Group'nu Sil
```bash
$ vgremove data_vg
```

## Kontrol Et
```bash
$ pvs
```
Volume grubu silinen fiziksel disk boşa düştü. Bu diski genişletmek istediğin volume group'a ekle.

## Volume Group'u Genişlet
```bash
$ vgextend root_vg /dev/sdb
```

## Logic Volume Group'u Genişlet
```bash
$ lvextend -L +100G /dev/mapper/root_vg-root_lv
```

## Dosya Sistemi
Genişletme işlemi ardında dosya sistemine yansıt.
```bash
$ resize2fs /dev/mapper/root_vg-root_lv
```
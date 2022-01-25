---
title: Mongodb Faydalı Bilgiler
date: 2022-01-22 21:43:33
tags: [mongodb]
categories: Faydalı Bilgiler
---

# Export

Veritabanı yapılandırmasına bağlı olarak 2 farklı yöntem vardır.

## Kimlik Doğrulama<u>lı</u>
```bash
mongoexport --username=<DB_KULLANICI_ADI> --authenticationDatabase="<DB_ADI_1>" --db <DB_ADI> -c <KOLESIYON_ADI> --out <DOSYA_PATH>.json
```
## Kimlik Doğrulama<u>sız</u>
```bash
mongoexport --db <DB_ADI> -c <KOLESIYON_ADI> --out <DOSYA_PATH>.json
```

<!-- more -->

# Import

Veritabanı yapılandırmasına bağlı olarak 2 farklı yöntem vardır.

## Kimlik Doğrulama<u>lı</u>
```bash
mongoimport --username=<DB_KULLANICI_ADI> --authenticationDatabase="<DB_ADI_1>" --db <DB_ADI>--collection <KOLESIYON_ADI> --drop --file <DOSYA_PATH>.json
```
## Kimlik Doğrulama<u>sız</u>
```bash
mongoimport --db <DB_ADI>--collection <KOLESIYON_ADI> --drop --file <DOSYA_PATH>.json
```

# Dump

Veritabanı yapılandırmasına bağlı olarak 2 farklı yöntem vardır.

## Kimlik Doğrulama<u>lı</u>
```bash
mongodump --username=<DB_KULLANICI_ADI> --authenticationDatabase="<DB_ADI_1>" --uri='mongodb://127.0.0.1:27017/<DB_ADI>' --out <DIZIN_PATH> --excludeCollection='<KOLESIYON_ADI>'
```
## Kimlik Doğrulama<u>sız</u>
```bash
mongodump --uri='mongodb://127.0.0.1:27017/<DB_ADI>' --out <DIZIN_PATH> --excludeCollection='<KOLESIYON_ADI>'
```

# Restore

Veritabanı yapılandırmasına bağlı olarak 2 farklı yöntem vardır.

## Kimlik Doğrulama<u>lı</u>
```bash
mongorestore --username=<DB_KULLANICI_ADI> --authenticationDatabase="<DB_ADI_1>" --drop --host=127.0.0.1 --port=27017 <DIZIN_PATH> --nsFrom="<DB_ADI_2>.*" --nsTo="<DB_ADI_1>.*"
```
## Kimlik Doğrulama<u>sız</u>
```bash
mongorestore --drop --host=127.0.0.1 --port=27017 <DIZIN_PATH> --nsFrom="<DB_ADI_2>.*" --nsTo="<DB_ADI_1>.*"
```
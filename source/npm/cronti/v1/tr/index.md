---
title: cronti.v1
date: 2022-05-31 08:34:40
---

<nav id="main-nav" class="alignright">
    <ul>
        <li><a href="/npm/cronti/" class="tooltip" data-tip="cronti sayfasına dön"><i class="icon icon-back"></i></a></li>
        <li><a href="/npm/cronti/v1/">İngilizce</a></li>
        <li><a href="/npm/cronti/v1/tr/" class="active">* Türkçe</a></li>
    </ul>
</nav>
<div class="clearfix"></div>


![nodejs](https://img.shields.io/badge/nodejs-43853d?logo=nodedotjs&labelColor=fff) ![npm](https://img.shields.io/badge/npm-bc2c32?logo=npm&labelColor=fff) ![javascript](https://img.shields.io/badge/javascript-e9d961?logo=javascript&labelColor=000) ![mocha](https://img.shields.io/badge/mocha-8d6849?logo=mocha&labelColor=fff) [![License](https://img.shields.io/badge/License-GPL--3.0-red)](LICENSE) [![vulnerabilities](https://snyk.io/test/github/buglss/cronti/badge.svg)](https://snyk.io/test/github/buglss/cronti/)

# Giriş

Zamanlanmış işleri yapmak için crontime ifadelerini bilmeniz gerekir. Ancak bu paket sizi bu zahmetten kurtarıyor. Günlük hayatta kullanılan zamanlama ifadeleri ile crontime ifadeleri oluşturabilirsiniz. Ürettiğiniz bu crontime ifadesini zamanlanmış bir iş oluşturmak için kullanabilirsiniz. Geçerli bir crontime ifadesi döndürülür.

Herhangi bir cronjob paketi ile veya doğrudan işletim sistemlerinin sunduğu crontab komut setleritle birlikte kullanabilirsiniz. En ilkel komut setleriyle dahi çalışabilir. Çünkü bu paket doğrudan crontime ifadesi döner.

Projelerinizde çizelgeli, takvimsel işler oluştururken kolaylıkla bir arayüz sunabilirsiniz. İnsanların günlük hayatta kullandıkları dilde plan yapabilecekleri işlevler sunar.

![Crontime_Trouble](https://github.com/buglss/cronti/raw/master/assets/crontime_trouble.png)

# Kurulum

npm ile:

```bash
npm i cronti # Yerel Kurulum. Özel bir projede kullanmak için.
npm i -g cronti # Global Install. Genel projelerde kullanmak için.
```

Not: Eğer npm versiyonunuz 5.0.0'dan küçükse `--save` argumanı ekleyin.

# Hızlı Başlangıç

Demo'da:

[Demo projesini indir (rar)](http://localhost:4000/npm/cronti/demo/publish/demo.zip?raw=true). Proje dosyalarını rar'dan çıkar. Proje dizinine git. Nodejs ile ``index.js`` dosyasını çalıştır.

```bash
unrar e demo.rar
cd demo
npm i
npm run demo
```

NodeJs'de:

```js
// Paketi Dahil Et
const cronti = require("cronti")

/* İki tarih arasında düzenli aralıklarla çalışacak bir crontime ifadesi oluşturur. */
cronti.intervalTime("2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")
/* - VEYA - */
cronti.intervalTime(new Date("2022-04-25 12:30"), new Date("2022-05-15 12:30"))
/* çıktısı "30 12 25-15 4-5 *" */
/* ************************************************************************ */

/* Geçerli crontime ifadesi girin crontime ifadesi alın. */
cronti.onCrontime("0 2 * * *")
/* çıktısı "0 2 * * *" */
/* ************************************************************************ */

/* Belirli bir tarihin crontime ifadesini oluşturun. */
cronti.onDate("2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti.onDate(new Date("2022-05-26 12:30"))
/* çıktısı "30 12 26 * *" */
/* ************************************************************************ */

/* Belirli bir tarihteki güne ait crontime ifadesi oluşturun. */
cronti.onDay("2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti.onDay(new Date("2022-05-26 12:30"))
/* çıktısı "30 12 26 5 *" */
/* ************************************************************************ */

/* month, week, weekDays, time ve tick parametrelerinin çeşitli kombinasyonlarla crontime ifadesi oluşturun. 
 * Dikkat! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
*/
cronti.onTime({month: 4, week: 2})
/* çıktısı "30 12 15-21 5 *" */
/* ---------------------------------------------------- */
cronti.onTime({month: 4, week: 2, weekDays: 3})
/* çıktısı "30 12 18 5 *" */
/* ---------------------------------------------------- */
cronti.onTime({month: 3, weekDays: 1})
/* çıktısı "30 12 * 4 1" */
/* ************************************************************************ */

/* Tarihindeki hafta için crontime ifadesi oluşturur.
 * Dikkat! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
*/
cronti.onWeek("2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti.onWeek(new Date("2022-05-26 12:30"))
/* çıktısı "30 12 22-28 5-5 *" */
/* ************************************************************************ */
```

# Dokümantasyon

- [Dokümantasyon](#Dokumantasyon)
  - [onIntervalTime](#onIntervalTime)
      - [Girdi](#Girdi)
      - [Çıktı](#Cikti)
      - [Örnek](#Ornek)
  - [onCrontime](#onCrontime)
      - [Girdi](#Girdi-1)
      - [Çıktı](#Cikti-1)
      - [Örnek](#Ornek-1)
  - [onDate](#onDate)
      - [Girdi](#Girdi-2)
      - [Çıktı](#Cikti-2)
      - [Örnek](#Ornek-2)
  - [onDay](#onDay)
      - [Girdi](#Girdi-3)
      - [Çıktı](#Cikti-3)
      - [Örnek](#Ornek-3)
  - [onTime](#onTime)
      - [Girdi](#Girdi-4)
      - [Çıktı](#Cikti-4)
      - [Örnek](#Ornek-4)
  - [onWeek](#onWeek)
      - [Girdi](#Girdi-5)
      - [Çıktı](#Cikti-5)
      - [Örnek](#Ornek-5)
  
## intervalTime

Başlangıç ve bitiş tarihine göre crontime ifadesi oluşturur. Step parametresine göre iki tarih arasında hangi aralıklarda çalışacağı belirtilir. Step parametresi gün, saat veya dakika olarak kullanılır.

#### Girdi

| Parametre     | Tip                          | Zorunluluk  | Açıklama                                       |
|:-------------:|:----------------------------:|:-----------:|:----------------------------------------------:|
| startDate     | Date                         | evet        | Cron başlangıç tarihi                          |
| endDate       | Date                         | evet        | Cron bitiş tarihi                              |
| step          | String <.d \| .h \| .m>      | hayır       | Hangi adımlarda çalıştırılacağını belirtir.    |

#### Çıktı

| Tip              | Açıklama            |
|:----------------:|:-------------------:|
| String           | Crontime ifadesi    |

#### Örnek

```js
const cronti = require("cronti")

cronti.intervalTime("2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")
// => "30 12 25-15 4-5 *"

cronti.intervalTime("2022-06-10T09:30:00.000Z", "2022-07-20T09:30:00.000Z", "4d")
// => "30 12 10-20/4 6-7 *"

cronti.intervalTime("2022-04-01T09:30:00.000Z", "2022-07-05T09:30:00.000Z", "2h")
// => "30 */2 1-5 4-7 *"

cronti.intervalTime("2022-04-01T09:30:00.000Z", "2022-04-02T09:30:00.000Z", "30m")
// => "*/30 12 1-2 4-4 *"
```

## onCrontime

Geçerli crontime ifadesi girilirse crontime ifadesi döner. Geçersiz giriş olursa undefined döner.

#### Girdi

| Parametre     | Tip                  | Zorunluluk | Açıklama             |
|:-------------:|:--------------------:|:----------:|:--------------------:|
| crontime      | String               | evet       | Crontime ifadesi     |

#### Çıktı

| Tip              | Açıklama           |
|:----------------:|:------------------:|
| String           | Crontime ifadesi   |

#### Örnek

```js
const cronti = require("cronti")

cronti.onCrontime("0 2 * * *")
// => "0 2 * * *"
```

## onDate

Girilen tarihin crontime ifadesi oluşturulur. Bu ifadeye göre her ay ve her yıl tekrarlanır.

#### Girdi

| Parametre     | Tip                  | Zorunluluk | Açıklama                                  |
|:-------------:|:--------------------:|:----------:|:-----------------------------------------:|
| date          | Date                 | evet       | Crontime ifadesi için kullanılan tarih    |

#### Çıktı

| Tip              | Açıklama          |
|:----------------:|:-----------------:|
| String           | Crontime ifadesi  |

#### Örnek

```js
const cronti = require("cronti")

cronti.onDate("2022-05-26T09:30:00.000Z")
// => "30 12 26 * *"
```

## onDay

Girilen tarihin crontime ifadesini döndürür. Bu ifadeye göre herr yıl tekrarlanır.
Tik değerine göre girilen tarihten önce tetiklenecek olan crontime ifadesi döndürülür.

#### Girdi

| Parametre     | Tip                  | Zorunluluk | Açıklama                                |
|:-------------:|:--------------------:|:----------:|:---------------------------------------:|
| date          | Date                 | evet       | Crontime ifadesi için kullanılan tarih  |
| tick          | Number               | hayır      | Tarihten çıkarılacak gün sayısı         |

#### Çıktı

| Tip              | Açıklama          |
|:----------------:|:-----------------:|
| String           | Crontime ifadesi  |

#### Örnek

```js
const cronti = require("cronti")

cronti.onDay("2022-05-26T09:30:00.000Z")
// => "30 12 26 5 *"

cronti.onDay("2022-05-26T09:30:00.000Z", 2)
// => "30 12 24 5 *"
```

## onTime

month, week, weekDays, time ve tick parametrelerinin çeşitli kombinasyonlarla crontime ifadesi oluşturun. Yalnızca time zorunlu bir değerdir. Tüm crontime ifadeleri bu zaman parametresine göre ayarlanır.
tick değerine göre girilen tarihten önce tetiklenecek olan crontime ifadesi döndürülür.

- Sadece month(0..11) ve week(0,1,2,-1) parametresi doldurulursa, haftanın ilk gününden o haftanın son gününe kadar her gün tetiklenecek olan crontime ifadesi oluşturulur.
- Yalnızca month(0..11), week(0,1,2,-1) ve weekDays(0..6) parametreleri doldurulursa, haftanın o günü için crontime ifadesi döndürülür.
- Yalnızca week(0,1,2,-1) parametresi doldurulursa, o hafta boyunca her gün tetiklenecek crontime ifadesi döndürülür. Ayın son haftası için hariç(-1).
- Yalnızca month(0..11) parametresi doldurulursa, o aydaki her gün için crontime ifadesi döndürülür.
- Yalnızca weekDays(0..6) parametresi doldurulursa, her ay bu haftanın günü için (pzt,sl,çrş,prş,cm,cmt,pz) crontime ifadesi döndürülür.
- Yalnızca month(0..11) ve weekDays(0..6) parametreleri doldurulursa, bu ayın bu haftasının günü için crontime ifadesi döndürülür.
- Hiçbir parametre doldurulmazsa, her ayın her günü için crontime ifadesi döndürülür.

#### Girdi

| Parameter                     | Tip              | Zorunluluk | Açıklama                                                                          |
|:-----------------------------:|:-----------------:|:--------:|:----------------------------------------------------------------------------------:|
| options (destructuring param) | Object            | evet     | Seçenekler                                                                         |
| options.month                 | Number            | hayır    | Crontime ifadesi için ay (0..11)                                                   |
| options.week                  | Number            | hayır    | Crontime ifadesi için hafta (0,1,2,-1)                                             |
| options.weekDays              | Number            | hayır    | Crontime ifadesi için haftanın günleri (0..6)                                      |
| options.time                  | String <dd\:mm>   | hayır    | Crontime ifadesi için zaman(gg:dd)                                                 |
| options.tick                  | Number            | hayır    | Tarihten çıkarılacak gün sayısı. Ay ve hafta parametreleri olmak zorundadır        |

#### Çıktı

| Tip              | Açıklama           |
|:----------------:|:------------------:|
| String           | Crontime ifadesi   |

#### Örnek

```js
const cronti = require("cronti")

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti.onTime({month: 4, week: 2})
// => "30 12 15-21 5 *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti.onTime({month: 4, week: 2, weekDays: 3})
// => "30 12 18 5 *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti.onTime({week: 0})
// => "30 12 1-7 * *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti.onTime({month: 2})
// => "30 12 * 3 *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti.onTime({weekDays: 6})
// => "30 12 * * 6"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti.onTime({month: 3, weekDays: 1})
// => "30 12 * 4 1"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti.onTime({})
// => "30 12 * * *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti.onTime({month: 4, week: 2, tick: 1})
// => "30 12 14-21 5 *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti.onTime({month: 2, time: "09:45"})
// => "45 09 * 3 *"
```

## onWeek

Girilen tarihin haftasında, her gün tetiklenecek olan crontime ifadesi oluşturur.
tick değerine göre girilen tarihten önce tetiklenecek olan crontime ifadesi döndürülür.

#### Girdi

| Parametre     | Tip                  | Zorunluluk | Açıklama                              |
|:-------------:|:--------------------:|:--------:|:---------------------------------------:|
| date          | Date                 | evet     | Crontime ifadesi için haftanın tarihi   |
| tick          | Number               | hayır    | Tarihten çıkarılacak gün sayıs          |

#### Çıktı

| Tip              | Açıklama           |
|:----------------:|:------------------:|
| String           | Crontime ifadesi   |

#### Örnek

```js
const cronti = require("cronti")

cronti.onWeek("2022-05-26T09:30:00.000Z")
// => "30 12 22-28 5-5 *"

cronti.onWeek("2022-05-26T09:30:00.000Z", 2)
// => "30 12 20-28 5-5 *"
```

# Yazarlar

Bakımını Yapanlar:

- Levent Sencer Şahin : [LinkedIn:@buglss](https://www.linkedin.com/in/buglss/) | [Blog:@buglss](https://buglss.github.io/) | [Facebook:@buglss](https://www.facebook.com/buglss) | [Twitter:@buglss](https://twitter.com/buglss) | [Instagram:@buglss](https://www.instagram.com/buglss)

# Telif Hakkı ve Lisans

Telif hakkı Levent Sencer Şahin ve diğer katkıda bulunanlar, [GPL-3.0](https://github.com/buglss/cronti/blob/master/LICENSE) kapsamında.
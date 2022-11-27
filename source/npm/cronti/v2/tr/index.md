---
title: cronti.v2
date: 2022-05-31 08:34:40
---

<nav id="main-nav" class="alignright">
    <ul>
        <li><a href="/npm/cronti/" class="tooltip" data-tip="cronti sayfasına dön"><i class="icon icon-back"></i></a></li>
        <li><a href="/npm/cronti/v2/">İngilizce</a></li>
        <li><a href="/npm/cronti/v2/tr/" class="active">* Türkçe</a></li>
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

[Demo projesini indir (zip)](https://github.com/buglss/cronti/blob/master/demo/publish/demo.zip?raw=true). Proje dosyalarını zip'den çıkar. Proje dizinine git. Nodejs ile ``index.js`` dosyasını çalıştır.

```bash
unzip demo.zip
cd demo
npm i
npm run demo
```

NodeJs'de:

```js
// Paketi Dahil Et
const cronti = require("cronti")

/* İki tarih arasında düzenli aralıklarla çalışacak bir crontime ifadesi oluşturur. */
cronti("onIntervalTime", "2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")
/* - VEYA - */
cronti("onIntervalTime", new Date("2022-04-25 12:30"), new Date("2022-05-15 12:30"))
/* - VEYA - */
cronti(2, "2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")
/* - VEYA - */
cronti(2, new Date("2022-04-25 12:30"), new Date("2022-05-15 12:30"))
/* çıktısı "30 12 25-15 4-5 *" */
/* ************************************************************************ */

/* Geçerli crontime ifadesi girin crontime ifadesi alın. */
cronti("onCrontime", "0 2 * * *")
/* - VEYA - */
cronti(4, "0 2 * * *")
/* çıktısı "0 2 * * *" */
/* ************************************************************************ */

/* Belirli bir tarihin crontime ifadesini oluşturun. */
cronti("onDate", "2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti("onDate", new Date("2022-05-26 12:30"))
/* - VEYA - */
cronti(5, "2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti(5, new Date("2022-05-26 12:30"))
/* çıktısı "30 12 26 * *" */
/* ************************************************************************ */

/* Belirli bir tarihteki güne ait crontime ifadesi oluşturun. */
cronti("onDay", "2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti("onDay", new Date("2022-05-26 12:30"))
/* - VEYA - */
cronti(0, "2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti(0, new Date("2022-05-26 12:30"))
/* çıktısı "30 12 26 5 *" */
/* ************************************************************************ */

/* month, week, weekDays, time ve tick parametrelerinin çeşitli kombinasyonlarla crontime ifadesi oluşturun. 
 * Dikkat! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
*/
/* - Haftanın ilk Günü Pazartesi - */
cronti("onTime", "4M", "2W")
/* - VEYA - */
cronti(3, "4M", "2W")
/* çıktısı "30 12 15-21 5 *" */
/* ---------------------------------------------------- */
cronti("onTime", "4M", "2W", "3WD")
/* - VEYA - */
cronti(3, "4M", "2W", "3WD")
/* çıktısı "30 12 18 5 *" */
/* ---------------------------------------------------- */
cronti("onTime", "3M", "1WD")
/* - VEYA - */
cronti(3, "3M", "1WD")
/* çıktısı "30 12 * 4 1" */
/* ---------------------------------------------------- */
/* - Haftanın ilk Günü Pazar - */
cronti("onTime", "0FD", "4M", "2W")
/* - VEYA - */
cronti(3, "0FD", "4M", "2W")
/* çıktısı "30 12 14-20 5-5 *" */
/* ---------------------------------------------------- */
cronti("onTime", "0FD", "4M", "2W", "3WD")
/* - VEYA - */
cronti(3, "0FD", "4M", "2W", "3WD")
/* çıktısı "30 12 17 5 *" */
/* ---------------------------------------------------- */
cronti("onTime", "0FD", "3M", "1WD")
/* - VEYA - */
cronti(3, "0FD", "3M", "1WD")
/* çıktısı "30 12 * 4 1" */
/* ************************************************************************ */

/* Tarihindeki hafta için crontime ifadesi oluşturur.
 * Dikkat! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
*/
/* - Haftanın ilk Günü Pazartesi - */
cronti("onWeek", "2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti("onWeek", new Date("2022-05-26 12:30"))
/* - VEYA - */
cronti(1, "2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti(1, new Date("2022-05-26 12:30"))
/* çıktısı "30 12 22-28 5-5 *" */
/* ---------------------------------------------------- */
/* - Haftanın ilk Günü Pazar - */
cronti("onWeek", "2022-05-26T09:30:00.000Z", "0FD")
/* - VEYA - */
cronti("onWeek", new Date("2022-05-26 12:30"), "0FD")
/* - VEYA - */
cronti(1, "2022-05-26T09:30:00.000Z", "0FD")
/* - VEYA - */
cronti(1, new Date("2022-05-26 12:30"), "0FD")
/* çıktısı "30 12 21-27 5-5 *" */
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

``cronti`` fonksiyonu, ilk parametrede metod adını veya dizin değerini alır. Daha sonra sınırsız parametre eklenebilir. Çağrılan metodun fonksiyonuna göre gönderilen parametreler kullanılır.

cronti(<methodName(string)|methodIndex(number)>, <...args>)

|    Methods     | Index |      Name      |                                             Description                                             |
| :------------: | :---: | :------------: | :-------------------------------------------------------------------------------------------------: |
|     onDay      |   0   |     onDay      |                        Tarihin belirli gününün crontime ifadesini oluşturun                         |
|     onWeek     |   1   |     onWeek     |                        Tarihin bulunduğu hafta için crontime ifadesi üretir                         |
| onIntervalTime |   2   | onIntervalTime |           İki tarih arasında düzenli aralıklarla çalışacak bir crontime ifadesi oluşturur           |
|     onTime     |   3   |     onTime     | Ay, hafta, hafta içi, saat, dakika ve tick gibi çeşitli kombinasyonlarla crontime ifadesi oluşturur |
|   onCrontime   |   4   |   onCrontime   |                    Geçerli crontime ifadesi girildiğinde crontime ifadesi döner                     |
|     onDate     |   5   |     onDate     |                           Belirli bir tarihin crontime ifadesini oluştur                            |

## onIntervalTime

Başlangıç ve bitiş tarihine göre crontime ifadesi oluşturur. Step parametresine göre iki tarih arasında hangi aralıklarda çalışacağı belirtilir. Step parametresi gün, saat veya dakika olarak kullanılır.

Parametrelerde 2 tarih değeri olmalıdır. Bu tarihlerin sırası önemli değildir. Daha küçük olan startDate, daha büyük olan endDate olarak kullanılacaktır. Step parametresi için paterne uygun bir string değeri kullanabilirsiniz.

#### Girdi

|     Parametre      |           Tip           | Zorunluluk |                  Açıklama                   |
| :----------------: | :---------------------: | :--------: | :-----------------------------------------: |
| args.\<startDate\> |          Date           |    evet    |            Cron başlangıç tarihi            |
|  args.\<endDate\>  |          Date           |    evet    |              Cron bitiş tarihi              |
|   args.\<step\>    | String <.d \| .h \| .m> |   hayır    | Hangi adımlarda çalıştırılacağını belirtir. |

#### Çıktı

|  Tip   |     Açıklama     |
| :----: | :--------------: |
| String | Crontime ifadesi |

#### Örnek

```js
const cronti = require("cronti")

cronti("onIntervalTime", "2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")
/* - VEYA - */
cronti(2, "2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")
// => "30 12 25-15 4-5 *"

cronti("onIntervalTime", "2022-06-10T09:30:00.000Z", "2022-07-20T09:30:00.000Z", "4d")
/* - VEYA - */
cronti(2, "2022-06-10T09:30:00.000Z", "2022-07-20T09:30:00.000Z", "4d")
// => "30 12 10-20/4 6-7 *"

cronti("onIntervalTime", "2022-04-01T09:30:00.000Z", "2022-07-05T09:30:00.000Z", "2h")
/* - VEYA - */
cronti(2, "2022-04-01T09:30:00.000Z", "2022-07-05T09:30:00.000Z", "2h")
// => "30 */2 1-5 4-7 *"

cronti("onIntervalTime", "2022-04-01T09:30:00.000Z", "2022-04-02T09:30:00.000Z", "30m")
/* - VEYA - */
cronti(2, "2022-04-01T09:30:00.000Z", "2022-04-02T09:30:00.000Z", "30m")
// => "*/30 12 1-2 4-4 *"
```

## onCrontime

Geçerli crontime ifadesi girilirse crontime ifadesi döner. Geçersiz giriş olursa undefined döner.

Parametrelerde herhangi bir crontime ifadesi kullanılabilir.

#### Girdi

|     Parametre     |  Tip   | Zorunluluk |     Açıklama     |
| :---------------: | :----: | :--------: | :--------------: |
| args.\<crontime\> | String |    evet    | Crontime ifadesi |

#### Çıktı

|  Tip   |     Açıklama     |
| :----: | :--------------: |
| String | Crontime ifadesi |

#### Örnek

```js
const cronti = require("cronti")

cronti("onCrontime", "0 2 * * *")
/* - VEYA - */
cronti(4, "0 2 * * *")
// => "0 2 * * *"
```

## onDate

Girilen tarihin crontime ifadesi oluşturulur. Bu ifadeye göre her ay ve her yıl tekrarlanır.

Parametre olarak geçerli bir tarih değeri gönderilmelidir.

#### Girdi

|   Parametre   |  Tip  | Zorunluluk |                Açıklama                |
| :-----------: | :---: | :--------: | :------------------------------------: |
| args.\<date\> | Date  |    evet    | Crontime ifadesi için kullanılan tarih |

#### Çıktı

|  Tip   |     Açıklama     |
| :----: | :--------------: |
| String | Crontime ifadesi |

#### Örnek

```js
const cronti = require("cronti")

cronti("onDate", "2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti(5, "2022-05-26T09:30:00.000Z")
// => "30 12 26 * *"
```

## onDay

Girilen tarihin crontime ifadesini döndürür. Bu ifadeye göre herr yıl tekrarlanır.
Tik değerine göre girilen tarihten önce tetiklenecek olan crontime ifadesi döndürülür.

Parametre olarak geçerli bir tarih değeri gönderilmelidir. Tick değeri için herhangi bir sayısal değer kullanılabilir.

#### Girdi

|   Parametre   |  Tip   | Zorunluluk |                Açıklama                |
| :-----------: | :----: | :--------: | :------------------------------------: |
| args.\<date\> |  Date  |    evet    | Crontime ifadesi için kullanılan tarih |
| args.\<tick\> | Number |   hayır    |    Tarihten çıkarılacak gün sayısı     |

#### Çıktı

|  Tip   |     Açıklama     |
| :----: | :--------------: |
| String | Crontime ifadesi |

#### Örnek

```js
const cronti = require("cronti")

cronti("onDay", "2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti(0, "2022-05-26T09:30:00.000Z")
// => "30 12 26 5 *"

cronti("onDay", "2022-05-26T09:30:00.000Z", 2)
/* - VEYA - */
cronti(0, "2022-05-26T09:30:00.000Z", 2)
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

Geçerli bir ay, hafta veya hafta içi parametre değeri gönderilebilir. Paterne göre zaman parametresi gönderilebilir. Tick değeri için herhangi bir sayısal değer kullanılabilir.

#### Girdi

| Parameter                 | Tip               | Zorunluluk | Açıklama                                                                                                |
|:-------------------------:|:-----------------:|:--------:|:---------------------------------------------------------------------------------------------------------:|
| args.\<month\>            | String <..M>      | hayır    | Crontime ifadesi için ay. 0 ile 11 arasında değerler alır. <sayı>M değerini alır.                         |
| args.\<week\>             | String <..W>      | hayır    | Crontime ifadesi için hafta. 0, 1, 2 ve -1 değerlerini alır. <sayı>W değerini alır.                       |
| args.\<weekDays\>         | String <..WD>     | hayır    | Crontime ifadesi için hafta içi günler. 0 ile 6 arasında değerler alır. <sayı>WD değerini alır.           |
| args.\<time\>             | String <dd\:mm>   | hayır    | Crontime ifadesi için zaman(gg:dd)                                                                        |
| args.\<tick\>             | Number            | hayır    | Tarihten çıkarılacak gün sayısı. Ay ve hafta parametreleri olmak zorundadır                               |
| args.\<firstDayOfWeek\>   | String            | hayır    | Haftanın ilk günü. 0 ile 6 arasında değerler alır. <sayı>FD değerini alır. Varsayılan değer pazartesidir  |

#### Çıktı

|  Tip   |     Açıklama     |
| :----: | :--------------: |
| String | Crontime ifadesi |

#### Örnek

```js
const cronti = require("cronti")

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "4M", "2W")
/* - VEYA - */
cronti(3, "4M", "2W")
// => "30 12 15-21 5 *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "4M", "2W", "3WD")
/* - VEYA - */
cronti(3, "4M", "2W", "3WD")
// => "30 12 18 5 *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "0W")
/* - VEYA - */
cronti(3, "0W")
// => "30 12 1-7 * *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "2M")
/* - VEYA - */
cronti(3, "2M")
// => "30 12 * 3 *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "6WD")
/* - VEYA - */
cronti(3, "6WD")
// => "30 12 * * 6"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "3M", "1WD")
/* - VEYA - */
cronti(3, "3M", "1WD")
// => "30 12 * 4 1"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime")
/* - VEYA - */
cronti(3)
// => "30 12 * * *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "4M", "2W", 1)
/* - VEYA - */
cronti(3, "4M", "2W", 1)
// => "30 12 14-21 5 *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "2M", "09:45")
/* - VEYA - */
cronti(3, "2M", "09:45")
// => "45 09 * 3 *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "0FD", "4M", "2W")
/* - OR - */
cronti(3, "0FD", "4M", "2W")
// => "30 12 14-20 5-5 *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "0FD", "4M", "2W", "3WD")
/* - OR - */
cronti(3, "0FD", "4M", "2W", "3WD")
// => "30 12 17 5 *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "0FD", "0W")
/* - OR - */
cronti(3, "0FD", "0W")
// => "30 12 1-7 * *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "0FD", "2M")
/* - OR - */
cronti(3, "0FD", "2M")
// => "30 12 * 3 *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "0FD", "6WD")
/* - OR - */
cronti(3, "0FD", "6WD")
// => "30 12 * * 6"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "0FD", "3M", "1WD")
/* - OR - */
cronti(3, "0FD", "3M", "1WD")
// => "30 12 * 4 1"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "0FD")
/* - OR - */
cronti(3, "0FD")
// => "30 12 * * *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "0FD", "4M", "2W", 1)
/* - OR - */
cronti(3, "0FD", "4M", "2W", 1)
// => "30 12 13-20 5-5 *"

// ! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
cronti("onTime", "0FD", "2M", "09:45")
/* - OR - */
cronti(3, "0FD", "2M", "09:45")
// => "45 09 * 3 *"
```

## onWeek

Girilen tarihin haftasında, her gün tetiklenecek olan crontime ifadesi oluşturur.
tick değerine göre girilen tarihten önce tetiklenecek olan crontime ifadesi döndürülür.

Parametre olarak geçerli bir tarih değeri gönderilmelidir. Tik değeri için herhangi bir sayısal değer kullanılabilir.

#### Girdi

| Parametre                 | Tip                  | Zorunluluk | Açıklama                                                                                                |
|:-------------------------:|:--------------------:|:--------:|:---------------------------------------------------------------------------------------------------------:|
| args.\<date\>             | Date                 | evet     | Crontime ifadesi için haftanın tarihi                                                                     |
| args.\<tick\>             | Number               | hayır    | Tarihten çıkarılacak gün sayıs                                                                            |
| args.\<firstDayOfWeek\>   | String               | hayır    | Haftanın ilk günü. 0 ile 6 arasında değerler alır. <sayı>FD değerini alır. Varsayılan değer pazartesidir  |

#### Çıktı

|  Tip   |     Açıklama     |
| :----: | :--------------: |
| String | Crontime ifadesi |

#### Örnek

```js
const cronti = require("cronti")

cronti("onWeek", "2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti(1, "2022-05-26T09:30:00.000Z")
// => "30 12 22-28 5-5 *"

cronti("onWeek", "2022-05-26T09:30:00.000Z", 2)
/* - VEYA - */
cronti(1, "2022-05-26T09:30:00.000Z", 2)
// => "30 12 20-28 5-5 *"

cronti("onWeek", "2022-05-26T09:30:00.000Z", "0FD")
/* - VEYA - */
cronti(1, "2022-05-26T09:30:00.000Z", "0FD")
// => "30 12 21-27 5-5 *"

cronti("onWeek", "2022-05-26T09:30:00.000Z", 2, "0FD")
/* - VEYA - */
cronti(1, "2022-05-26T09:30:00.000Z", 2, "0FD")
// => "30 12 19-27 5-5 *"
```

# Yazarlar

Bakımını Yapanlar:

- Levent Sencer Şahin : [LinkedIn:@buglss](https://www.linkedin.com/in/buglss/) | [Blog:@buglss](https://buglss.github.io/) | [Facebook:@buglss](https://www.facebook.com/buglss) | [Twitter:@buglss](https://twitter.com/buglss) | [Instagram:@buglss](https://www.instagram.com/buglss)

# Telif Hakkı ve Lisans

Telif hakkı Levent Sencer Şahin ve diğer katkıda bulunanlar, [GPL-3.0](https://github.com/buglss/cronti/blob/master/LICENSE) kapsamında.
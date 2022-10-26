---
title: Session Management / Oturum Yönetimi
date: 2022-10-26 21:40:35
tags: [session]
categories: Web
---

<br />

![session_management](/img/post/http-session-management_01.png)

<br />

İstemci/client ile sunucu/server arasında birbirini tanıma yöntemidir. Sunucu konuştuğu istemcinin kim olduğunu bilmek ister.

Session, oturum anlamına gelir. Gerçek hayatta insanlar birbiriyle konuşmak için haberleşmek için oturum düzenlerler. İşte sanal dünyada da benzer bir ilişki vardır. Cihazlar/makineler/bilgisayarlar arasındaki iletişimin anlamlı olması için oturum/session kurulur.

<!-- more -->

Session kullanıcı bilgisi gibi düşünülmemelidir. İstemcinin yaptığı herşey session kavramına girer. Kullanıcı girişi olmaksızın da oturum bilgileri tutulup kullanılabilir. Oturum bilgisi yani session konuşan iki kişinin birbirini tanıması gibidir.

Kim konuşuyor ne diyor? İşte session kabaca bu sorulara cevap bulmaya çalışırken kullanılan bilgilerin bütünüdür.

Session istemci tarafında veya sunucu tarafında saklanabilir. Saklama koşulları tamamen geliştiricinin mimari kurgusuna bağlıdır. Sunucu tarafında bir veritabanına session bilgilerini kaydedebilir. In-memory ortamda saklayabilir. Programlama dili içindeki değişken türlerini kullanarak program içerisinde saklayabilir. İstemci tarafında url adresinde, hidden inputlarda veya cookie header objesinde saklanabilir.

![server-side-session](/img/post/cookie-and-session-management-process-in-codeigniter.jpg)

Session karakteri gereği gizliliği sever. Oturum sahibine ait bilgileri tuttuğu için gizlice transferi sağlanmalıdır. Yöntemlerden biri sunucu tarafında session bilgilerini kaydedip bu bilgilere erişimi sağlayabilecek bir id üretmektir. Bu id'yi ise istemci tarafında kaydedip her istekte session bilgilerine ulaşılabilir. Bir diğer yöntem ise istemci tarafında session datanın hashlenmiş halini saklamaktır. Bunun için session bilgisi cookie objesine yazdırılır. Her istekte de cookie objesinden okunarak session bilgisi kullanılabilir.

Session bilgisinin hassaslığından bahsetmiştim. Bu hassasiyetinden ötürü sadece id veya hashleme ile korumak yetersiz olur. Bu session'ın bizim istemcimize ait olduğundan emin olmamız lazım. Session'ın çalınması halinde koruma sağlamalıyız. Bunu istemcinin/cihazın/makinenin/bilgisayarın benzersiz, ona özel bir değerini kullanarak yapabiliriz.

Örneğin session datamızın içine ip adresini kaydedersek sahibini kontrol etme şansımız olur. Session'ı en başta alan istemcinin ip adresi ile sonrasında istekte bulunan istemcinin ip adresi aynı olmalıdır. Özellikle statik ip alınmadıysa, ip adresleri dinamik bir şekilde değişir. Fakat bu ip değişikliği kısa sürede olmaz. Alınan ip adresi kullanıldığı sürece istemciye kiralanır.

![client-side-session](/img/post/jwt.jpg)

Session bilgisini sunucu tarafında kaydettiğinde ulaşılabilir bir id değeri istemciye gönderilir. Session bilgilerini devamlı kaydedilen yerden okumak istenmeyebilir. Bunun yerine session bilgilerinin referansı olan id değil de olduğu gibi tüm session bilgilerinin hashlenmiş hali istemci tarafına gönderilebilir. Her istekte de istemci bu hashlenmiş session bilgisini gönderir.

İstemci tarafında session bilgilerinin kaydedilmesinde yaygın olarak cookie objesi kullanılır. Bunun sebebi sunucu tarafından yönetilebiliyor olmasıdır. Sunucudan istemciye cookie objesine şunu yaz şunu sil gibi işlemler bildirilebilir.

Sunucu tarafında session bilgilerini tutucam diyorsanız tercih edeceğiniz saklama yöntemine göre işlem yapabilirsiniz. Bu seçeneği tercih ettiğinizde istemci tarafına session bilgilerine referans sağlayan id bilgisini istemciye gönderebilirsiniz. İstemci tarafında session id bilgisi yaygın olarak cookie objesinde saklanır. Örneğin veritabanına session bilgilerini kaydettiğiniz. İstemciden her istek geldiğinde veritabanından bu id bilgisi ile session çekilir. Çekilen session bilgisinde ip kontrolü yapılır.

İstemci tarafında session bilgilerini tutucam diyorsanız bu session bilgilerini hashlemeniz gerekir. Yaygın hashleme kütüphanelerinde jwt kullanılabilir. JWT ile hashlenen session bilgileri istemci tarafına gönderilir. İstemci tarafında session hash'i yaygın olarak cookie objesinde tutulur. Her istek geldiğinde hash decode edilir ve session bilgileri kullanılır. Session bilgilerinde ip kontrolü yapılır.

![jwt](/img/post/jwt.png)

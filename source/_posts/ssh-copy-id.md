---
title: SSH Public Key ile Güvenli Bağlantı
date: 2022-10-26 22:49:28
tags: [ssh]
categories: Güvenlik
---

![ssh](/img/post/asimetrik-sifreleme.jpg)

İki bilgisayar arasında bağlantı kurmak için ssh protokolü güvenli bir yoldur. SSH protokolü ile varsayılan olarak 22 portundan iki bilgisayar arasında güvenli bir yol oluşturulur. Bu kanaldan veri alış verişi yapılabilir.

SSH ile bağlantı kurmanın 2 farklı yolu vardır. Bunlardan biri bağlanılmak istenen bilgisayardaki kullanıcı adı ve parola ile bağlanmaktır. Diğer bir yöntem ise ``.ssh`` dizini altındaki **.pub** uzantılı dosyadaki key, hedef bilgisayarda ``.ssh`` dizinindeki ``authorized_keys`` dosyasına yazılır. Bu şekilde kaynak bilgisayardaki ssh key ile hedef bilgisayardaki ssh key birbiriyle eşleştirilmiş olur.

<!-- more -->

## Yöntem 1 - Kullanıcı Adı ve Parola ile Bağlanma

Doğrudan kaynak bilgisayardan hedef bilgisayara ``ssh`` komutu ile veya ssh protokolünü kullanan ve kullanıcıya önyüz sunan uygulamalar ile bağlantı kurulur. Bu bağlantı şekilde hedef bilgisayardaki kullanıcı bilgilerinin biliniyor olması gerekmektedir. Hedef bilgisayardaki kullanıcı adı ve parola ile ssh bağlantısı kurulur.

### SSH Bağlantını Test Et

```bash
ssh -T <HEDEF_KULLANICI_ADI>@<HEDEF_IP>
```

### Bağlan

```bash
ssh <HEDEF_KULLANICI_ADI>@<HEDEF_IP>
# Kullanıcıya ait parolayı soracak.
# Parolanın doğru girilmesiyle bağlantı kurulacak.
```

## Yöntem 2 - Public Key ile Bağlanma

Kaynak bilgisayardaki public ssh key, hedef bilgisayardaki ilgili yere kopyalanır. Bu şekilde bilgisayarlar arası ssh key eşleştirmesi yapılır. Bu eşleştirme sonrasında artık herhangi bir kullanıcı bilgisine ihtiyaç duyulmaz.

Bu işlemi manuel yapabileceğiniz gibi ``ssh-copy-id`` komutu ile de yapabilirsiniz. Bu komut manuel yapacağınız kopyalama işlemini otomatik bir şekilde yapar. Ayrıca kopyalanan key değerinin dosya izinleri de özeldir. SSH dosyalarındaki izinler güvenlik nedeniyle rastgele verilemez.

### SSH Public Key'i Kopyala

```bash
ssh-copy-id <HEDEF_KULLANICI_ADI>@<HEDEF_IP>
```

### SSH Bağlantını Test Et

```bash
ssh -T <HEDEF_KULLANICI_ADI>@<HEDEF_IP>
```

### Bağlan

```bash
ssh <HEDEF_KULLANICI_ADI>@<HEDEF_IP>
# Doğrudan herhangi bir parola sormadan bağlantı kuracak.
```

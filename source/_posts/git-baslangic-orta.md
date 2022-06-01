---
title: Git Başlangıç ve Orta Seviye
date: 2022-06-01 07:14:30
tags: [git]
categories: Wiki
---

- [1. Başlangıç Seviye](#1-Baslangic-Seviye)
  - [1.1 Versiyon Yönetimi](#1-1-Versiyon-Yonetimi)
    - [1.1.1 Yerel Versiyon Yönetim Sistemleri (YVYS)](#1-1-1-Yerel-Versiyon-Yonetim-Sistemleri-YVYS)
    - [1.1.2 Merkezi Versiyon Yönetim Sistemleri (MVYS)](#1-1-2-Merkezi-Versiyon-Yonetim-Sistemleri-MVYS)
    - [1.1.3 Dağıtık Versiyon Yönetim Sistemleri (DVYS)](#1-1-3-Dagitik-Versiyon-Yonetim-Sistemleri-DVYS)
  - [1.2 Git'e Giriş](#1-2-Gite-Giris)
  - [1.3 Kurulum](#1-3-Kurulum)
  - [1.4 Konfigürasyon](#1-4-Konfigurasyon)
  - [1.5 Komutlar](#1-5-Komutlar)
    - [1.5.1 init](#1-5-1-init)
    - [1.5.2 add](#1-5-2-add)
    - [1.5.3 commit](#1-5-3-commit)
    - [1.5.4 clone](#1-5-4-clone)
    - [1.5.5 status](#1-5-5-status)
    - [1.5.6 log](#1-5-6-log)
    - [1.5.7 remote](#1-5-7-remote)
    - [1.5.8 pull](#1-5-8-pull)
    - [1.5.9 push](#1-5-9-push)
- [2. Orta Seviye](#2-Orta-Seviye)
  - [2.1 .gitignore](#2-1-gitignore)
  - [2.2 Dallar(Branch)](#2-2-Dallar-Branch)
  - [2.3 Komutlar](#2-3-Komutlar)
    - [2.3.1 diff](#2-3-1-diff)
    - [2.3.2 rm](#2-3-2-rm)
    - [2.3.3 mv](#2-3-3-mv)
    - [2.3.4 checkout](#2-3-4-checkout)
    - [2.3.5 reset](#2-3-5-reset)
    - [2.3.6 checkout vs reset](#2-3-6-checkout-vs-reset)
    - [2.3.7 merge](#2-3-7-merge)
  - [2.4 SSH(Secure Shell) Protokolü](#2-4-SSH-Secure-Shell-Protokolü)

<!-- more -->

# 1. Başlangıç Seviye

Bu kısımda versiyon yönetiminin tarihçesine giriş yapılacak. Devamında Git versiyon yönetim aracı özelinde temel kullanım bilgileri verilecektir.

## 1.1 Versiyon Yönetimi

Geliştirmenin olduğu yerde versiyonlamaya ihtiyaç vardır. Her yeni gelişmede eski hallerinin tutulduğu bir yapı olmalıdır. Çünkü gelişim beraberinde sorunları da getirebilir. Her gelişim tek yönlü olmayabilir. Geçmişteki sorunsuz kısımların şimdiki haliyle kıyaslamak gerekebilir.

Versiyonlama ihtiyacının temelinde geçmişi kaybetmemek vardır. Versiyonlama ihtiyacı sadece yazılım için değil dijital olan herşey için geçerlidir. Örneğin bir mimar çizimlerini versiyonlamak ister.

Versiyonlamaya tekil çalışmanın yanında çok kişili çalışılan projelerde daha da fazla ihtiyaç duyulmaktadır. Ama sadece çok kişili çalışma için değil tek başına çalışılan projelerde de kullanılması gerekir. Projenin tarihçesini; kimin hangi işlemi yaptığını, hangi noktalara dokunduğunu, ne zaman yaptığını görmek istenir. Eğer bir problem varsa kimin ne zaman yaptığı veya sorunsuz halinin ne olduğu ile ilgili bilgiler kolaylıkla görülebilir.

Versiyonlama ihtiyacı geliştiriciler tarafından kabul görmüş ve çözüm arayışına çıkılmıştır. Versiyonlama önemlidir fakat nasıl yönetilmelidir? Örneğin farklı isimlerde dosyalamak da versiyonlama örneğidir. Ama bu yöntem versiyon yönetimini oldukça zorlaştırır. Versiyonlama için öncelikle uygun bir versiyon yönetim mimarisi geliştirilmelidir. Bu kapsamda geliştiriciler 3 farklı versiyon yönetim sistemi üzerinde çalışmışlardır.

### 1.1.1 Yerel Versiyon Yönetim Sistemleri (YVYS)

Bu yöntemde hedeflenen değişiklikleri küçük parçalar halinde takip edebilmektir. Küçük parçalara ayrılmış değişiklik geçmişini kolaylıkla takip edilebilir diye düşünülmüştür. Bu kapsamda değişiklik parçaları veritabanında tutulmuştur. Veritabanından okunarak takibi sağlanmıştır.

![Yerel Versiyon Yönetim Sistemi](https://git-scm.com/book/en/v2/images/local.png)

Bu yöntemin kullanıldığı versiyon yönetim aracına örnek olarak [RCS](https://www.gnu.org/software/rcs/) verilebilir. Bu araç dosyadaki değişiklik yapılan parçaları kendine has formatta kaydeder. Daha sonra istenen zamandaki versiyon için o zamana kadarki tüm parçaları birleştirerek gösterir. Bu araçta çalışma performansnı yükseltmek için son versiyona ait parçaların birleştirilmiş hali hazır olarak tutulur.

### 1.1.2 Merkezi Versiyon Yönetim Sistemleri (MVYS)

Bu yöntemle hedeflenen YVYS'nin eksik yönlerini tamamlamaktır. YVYS'de çok kişili çalışılan projelerde versiyon takibi mümkün değildir. Çünkü versiyonlar kişilerin yerel bilgisayarlarında tutulmaktadır.

![Merkezi Versiyon Yönetim Sistemi](https://git-scm.com/book/en/v2/images/centralized.png)

Bu yöntemin versiyonlama mantığı YVYS ile aynıdır. Tek farkı versiyonlar yerel bilgisayarda değil internet üzerinden erişilebilir bir sunucu bilgisayarda tutulmaktadır. Sunucu veritabanında versiyonlar tutulur. Projede çalışan kişiler de sunucudan İlgili versiyonu çeker. Çalışması bittiğinde de sunucuya yeni versiyonu gönderir. Bu yöntemin kullanıldığı CVS, Subversion ve Perforce gibi araçlar vardır.

Bu yöntem YVYS'ye göre pek çok avantaja sahiptir. Tek bir noktadan tüm tarihçeye ulaşılabilir. Proje üzerindeki çalışmaların kontrolü uzaktan yapılabilir. Kim hangi değişikliği ne zaman yaptı görüntülenebilir. Kimin hangi çalışmayı yapacağına karar verilip kontrolü sağlanabilir.

YVYS ve MVYS ciddi dezanvajlara da sahiptir. Versiyonlar her iki yöntemde de sadece 1 noktada tutulmaktadır. MVYS için sunucuda olabilecek kesintilerde versiyonlama çalışması da durur. Sunucuda olası bir disk arızasında veri kaybıyla beraber tüm versiyonlar yok olur. Sadece yerelde kişilerin çalıştığı versiyona ait proje dosyaları kalır. Aynı şekilde YVYS için de bu durumlar geçerlidir.

### 1.1.3 Dağıtık Versiyon Yönetim Sistemleri (DVYS)

Bu yöntemle hedeflenen YVYS ve MVYS'nin eksik yönlerini tamamlamaktır. YVYS'de çok kişili çalışılan projelerde versiyon takibi mümkün değildir. MVYS ise sunucuda yaşanacak problem veya erişim sorunlarında versiyonlama durur. Ayrıca her iki yöntemde de projede versiyon kaybı hatta proje kaybı söz konusudur.

![Dağıtık Versiyon Yönetim Sistemi](https://git-scm.com/book/en/v2/images/distributed.png)

Bu yöntemin versiyonlama mantığı YVYS ile aynıdır. YVYS ve MVYS'den farkı versiyonlar hem yerelde hem sunucuda tutulmaktadır. Yerelde başlatılan bir proje YVYS gibi yerel veritabanında tutulur. Yereldeki bu projenin sunucu ile bağlantısı kurulur ve MVYS gibi yereldeki versiyonlama sunucuya aktarılır. Bu noktada proje kritik ayrım versiyonların tüm tarihçesi olduğu gibi yerelde ve sunucuda bulunur. Bu yöntemin kullanıldığı Git, Mercurial, Bazaar ya da Darcs gibi araçlar vardır.

Sunucu ile yerel senkron çalışmak zorunda değildir. Örneğin çevrimiçin olunamadığı durumlarda yerelde sunucudan bağımsız yani çevrimdışı olarak çalışılabilir. Çok kişili projelerde sunucudaki versiyon başka kullanılar tarafından ilerletilebilir. Çevrimiçi olunduğu anda sunucuya yereldeki proje versiyonu gönderilmeden önce sunucudaki güncel versiyon çekilir. Tarih bazlı sıralamayla değişiklikler versiyonlanır. Bu şekilde yerel versiyon veritabanı sunucudaki versiyon veritabanı ile eşitlenir. Bu noktada yereldeki versiyon veritabanı ile sunucudaki versiyon veri tabanı birleştirilir. Son adım olarak da yereldeki versiyon sunucuya gönderilir. Başka biri de benzer işlemi yaparak çalışmaya devam eder.

Bu yöntem YVYS ve MVYS'e göre pek çok avantaja sahiptir. Proje versiyonlarının kaybolma riski düzenli senktonize edildiği taktirde yoktur. YVYS gibi sadece yerelinde çalışabilir, MVYS gibi yerelindeki çalışmayı sunucuya gönderebilirsin. Projenin bir örneği bulunduğu sürece yerelindeki veritabanı arızası veya sunucudaki veritabanı arızası projedeki versiyonların kaybolmasına sebep olmaz. Sunucuda problem olursa herhangi birindeki örnek proje sunucuya gönderilerek çalışmaya devam edilebilir. Herhangi birinin yerelinde bir problem yaşanırsa da sunucudan projenin bütün halini çekip kaldığı yerden devam edebilir.

Bu yöntemin diğer yöntemlerde olduğu gibi çalışmayı etkileyen bir dezavantajı yoktur. Bu yöntem günümüzde kabul görmüş ve yaygın olarak kullanılan yöntemdir. Projeye ait tüm kaynaklar yok olmadığı sürece proje kaybolmaz.

Bu yazıda Git versiyon yönetim aracı ile ilgili bilgiler verilecektir.

## 1.2 Git'e Giriş

2005 yılında Linus Torvalds başta olmak üzere Linux çekirdeğini geliştiren topluluk tarafından geliştirilmiştir.

Git'in bazı hedefleri şunlardır:

- Hız
- Minimal tasarım
- Lineer olmayan geliştirme için güçlü destek (binlerce paralel dal desteği)
- Tamamen dağıtık olması
- Devasa projeleri Linux kerneli verimliliğinde destekleyebilmesi (hız ve veri büyüklüğü açısından)

Git diğer dağıtık versiyon yönetim araçlarına göre farklı mimaride geliştirilmiştir. Diğer mimarilerde dosyanın değişiklik parçası saklanır. Başka bir deyişle delta temelli versiyonlar tanımlanır (delta-based).

![Delta-Based](https://git-scm.com/book/en/v2/images/deltas.png)

Git'te ise dosyanın anlık görüntüsü alınır (snapshot). Yani diğerlerinin yaptığı gibi sadece değişiklik parçasını versiyonlamaz. Dosyanın o anki halinin görüntüsünü çeker ve o şekilde saklar. Eğer anlık görünümü alınan dosya değişmediyse yeni bir görüntü oluşturmaz bir önceki görüntünün referansını saklar. Başka bir deyişle anlık görünümler ile versiyon tanımlanır (stream of snapshots).

![Stream of Snapshots](https://git-scm.com/book/en/v2/images/snapshots.png)

Dosyanın versiyon döngüsü 3 durumdan oluşmaktadır. Modified(Değişiklik), Staged(İşaretli), and Committed(Kaydedilmiş).

- Modified: dosyayı değiştirdiğinizi ama henüz veritabanına kaydetmediğinizi gösterir.
- Staged: değiştirilmiş bir dosyayı bir sonraki anlık görünümünde kaydedilecek şekilde işaretlediğinizi gösterir. Bu dosyalara Index ismi verilir.
- Committed: dosyanın güvenli bir şekilde yerel veritabanınızda saklandığını gösterir.

Bu kapsamda proje 3 ana bölüme ayrılabilir.

![Proje Bölümleri](https://git-scm.com/book/en/v2/images/areas.png)

--------

![Proje Bölümleri Alt](https://miro.medium.com/max/1000/1*zw0bLFWkaAP2QPfhxkoDEA.png)

Commit'lenmiş yani kaydedilmiş dosyalar ile versiyon ağacı ortaya çıkar. Versiyon ağacında hangi versiyonun aktif olduğunu yani kullanıldığını işaret eden HEAD isminde bir işaretçi(pointer) vardır.

![HEAD](https://git-scm.com/book/en/v2/images/branch-and-history.png)

## 1.3 Kurulum

[https://git-scm.com/downloads](https://git-scm.com/downloads) resmi adresinden kurulum yapabilirsiniz.


## 1.4 Konfigürasyon

Kurulum sonrası yapılması gereken ilk şey temel konfigürasyonların ayarlanmasıdır. Burada kullanıcı bilgilerimizi tanımlamamız gerekir. Bu bilgiler commit işleminde kimlik bilgisi olarak kullanılır. Tüm yaratılan commit'lerde değişmez bir şekilde kaydedilir.

```bash
git config --global user.name "Levent Sencer Şahin"
git config --global user.email levent.sahin@yedas.com
```

## 1.5 Komutlar

### 1.5.1 init

Bu komut projenizde git'i oluşturur. Git ile versiyonlamaya başlamaya karar verdiğinizde bu komutu proje dizininde çalıştırmalısınız. Bu komut proje dizininde ``.git`` adında bir dizin oluşturur. Bu dizin git'in iskeletidir. Git herşeyi bu dizin altında tutar.

``Proje Dizini`` içine git:
```bash
git init
```

### 1.5.2 add

Bu komut dosyaları takibe almak için kullanılır. İlk defa git entegre edildiyse hiçbir versiyonlama yoktur ve projedeki tüm dosyalar takip edilmeyi bekler. Sonraki aşamalarda değişiklik olan dosyaların takibe alınması için kullanılır. Tek tek takip edilmesi istenen dosyalar tam dosya yolu belirtilecek şekilde yazılabilir veya tüm dosyaların takip edilmesi isteniyorsa .(nokta) işareti kullanılabilir.

```bash
git add <dosyanın_tam_yolu|.> # Tüm dosyaları takibe almak için .(nokta) işareti kullanılır
```

```bash
git add README.md
git add LICENSE
```

### 1.5.3 commit

Bu komut takibe alınan dosyaların yerel veritabanına kaydedilmesi için kullanılır. Komit işleminde mesaj yazılması beklenir. Bunun için 2 farklı yöntem izlenebilir.

1. Daha detaylı mesaj yazmak için editörden açmak.
```bash
git commit # Editör açılır. Editörde yazılan mesaj kaydedilip editör kapatıldığında commit tamamlanmış olur.
```
2. Pratik mesaj yazmak.
```bash
git commit -m "Initial Project"
```

Buraya kadar 3 komuttan bahsettim. Bu 3 komut git ile yerelde çalışmak için başlangıç seviyesinde yeterlidir. Sunucuya gönderme işleminden önce internetten erişilebilir bir git projesini nasıl yerele çekip üzerinde çalışılabileceğinden bahsedeceğim.

### 1.5.4 clone

Bu komut bir git projesini tüm versiyonlarıyla beraber neredeyse tüm verileri olduğu gibi yerelinize kopyalar.

Örneğin libgit2 projesini yerele kopyalamak için:
```bash
git clone https://github.com/libgit2/libgit2
```

Kopyalama işleminden sonra **add** ve **commit** komutları ile kopyalanan proje içinde versiyon yönetimi yapılabilir.

### 1.5.5 status

Bu komut dosyaların dumunu listeler. Bir dosyanın 4 farklı durumu olabilir. Untracked(Takipsiz), Unmodified(Değişmemiş), Modified(Değişmiş) ve Staged(İşaretli).

- Untracked: Takip edilmeyen dosya durumudur. Örneğin bu durumdaki dosyalar yeni eklenmiş dosyalar olabilir.
- Unmodified: Takip edilen ve commit edilmiş dosyalarda değişiklik olmama durumudur. Örneği add ile işaretlenmiş ve commit ile kaydedilmiş ve sonrasında hiçbir değişikliğe uğramamış dosyalar.
- Modified: Takip edilen ve commit edilmiş dosyalarda değişiklik olma durumudur. Örneği add ile işaretlenmiş ve commit ile kaydedilmiş ve sonrasında değişikliğe uğramış dosyalar.
- Staged: Takip edilen veya edilmeyen dosyaların işaretlenme durumudur. Örneğin add komutu ile bu dosyalar işaretlenir. Commit işleminden sonra da takip edilir duruma geçerler.

![Dosya Durum Döngüsü](https://git-scm.com/book/en/v2/images/lifecycle.png)

```bash
git status
```

### 1.5.6 log

Bu komut commit tarihçesini gösterir.

```bash
git log
```

Bu noktaya kadar sadece yerelde çalıştık. Bu noktadan sonra sunucu ile çalışma kısmından bahsedeceğim.

### 1.5.7 remote

Bu komut yerelde çalışılan projenin sunucu bağlantısı kurmak için kullanılır. Sunucunun kısa adını ve url bilgisini girerek bağlantı kurulur. Kısa ad olarak gelenek haline gelmiş "origin" ismi kullanılabilir. 

```bash
git remote add <kısa_ad> <url>
```

```bash
git remote add origin https://git.yesilirmakedas.com/levent.sahin/hello-world
```

Sunucu bağlantısını görüntülemek için:

```bash
git remote -v
```

### 1.5.8 pull

Bu komut yerelde olmayan sunucudaki tüm versiyonları çeker ve yereldeki versiyonlarla birleştirir. Varsayılan olarak gelenek haline gelmiş "master" dalı kullanılır.

```bash
git pull <kısa_ad> <dal>
```

```bash
git pull origin master
```

### 1.5.9 push

Bu komut sunucuda olmayan yereldeki tüm versiyonları sunucuya göndermek için kullanılır. Eğer sunucuda yereldeki değişiklik sonucu oluşan versiyondan başka bir versiyon varsa öncelikle **pull** yapılması gerekir.

```bash
git push <kısa_ad> <dal>
git push -u <kısa_ad> <dal> # -u parametresi varsayılan kısa ad ve dalı ayarlamak için eklenebilir.
```

```bash
git push origin master
# veya
git push -u origin master # eğer bu şekilde çalıştırılırsa bir sonraki push ve pull işleminde <kısa_ad> ve <dal> eklenmesine gerek kalmaz. --> git push (yeterli)
```

# 2. Orta Seviye

Bu kısımda Git versiyon yönetim aracı ile ilgili temel bilgilerin üzerine sık kullanılan veya kullanılma ihtiyacı duyulabilecek konulardan bahsedilecek.

## 2.1 .gitignore

Versiyonlamaya dahil olmasını istemediğini dosya ve dizinleri ``.gitignore`` dosyasına yazabilirsiniz. Bu dosyada tam yol(full path) veya göreceli yol(relative path) veya joker karakter(wildcard) ile tanımlama yapabilirsiniz. Her satırda 1 tanımlama olacak şekilde yazılır. Hariç tutmak istediğin tanımın başına !(ünlem) işareti koyabilirsin.

Tanım Kuralları:
- #(hashtag) karakteri ile başlayan satırlar yok sayılır. Yorum satırı olarak değerlendirilir.
- Standart glob deseninde(pattern) çalışır. Yinelemeli(Recursive) olarak tanımlama uygulanır. Yinelemeyi önlemek için başına /(eğik çizgi) karakteri ile başlatın. Dizini belirtmek için sonuna /(eğik çizgi) karakteri ekleyin.
- Hariç tutmak için başına !(ünlem) işareti atabilirsiniz. !(ünlem) işareti değili/olumsuzu anlamına gelir.

Örnek:
```bash
# ignore all .a files
*.a

# but do track lib.a, even though you're ignoring .a files above
!lib.a

# only ignore the TODO file in the current directory, not subdir/TODO
/TODO

# ignore all files in any directory named build
build/

# ignore doc/notes.txt, but not doc/server/arch.txt
doc/*.txt

# ignore all .pdf files in the doc/ directory and any of its subdirectories
doc/**/*.pdf
```

## 2.2 Dallar(Branch)

Git, paralel çalışmaya izin verir. Bu kapsamda farklı çalışmalar farklı birçok dal(brach) ile yapılabilir. Git'in çalışma yapısı depolama mimarisi ise bu dallanmaya oldukça elverişlidir. Herhangi bir performans sorunu yaratmaz.

![dal bilgi](https://git-scm.com/book/en/v2/images/advance-master.png)

Yeni dal oluştururken mevcut daldaki HEAD referans alınır.

Dal Oluştur:
```bash
git checkout -b <dal_adı>
```

Öncesi:

![dal ekle öncesi](https://git-scm.com/book/en/v2/images/basic-branching-1.png)

```bash
git checkout -b iss53
```

Sonra

![dal ekle sonrası](https://git-scm.com/book/en/v2/images/basic-branching-2.png)

Dal oluşturduktan sonra ``checkout`` komutuyla ilgili dalı seçip çalışmaya başlayabiliriz. Çalışmaya başlayıp commit attığımızda aktif dalda commit tarihçesi ilerler.

```bash
git checkout iss53
git add file.txt
git commit -m "file.txt"
```

![dal seç](https://git-scm.com/book/en/v2/images/basic-branching-3.png)

Tekrar master dalına ``checkout`` komutuyla dönüp yeni bir dal yaratıp o dalda da farklı bir çalışma yürütebiliriz.

```bash
git checkout master
git checkout -b hotfix
git add index.txt
git commit -m "index.txt"
```

![dal oluştur seç](https://git-scm.com/book/en/v2/images/basic-branching-4.png)

## 2.3 Komutlar

### 2.3.1 diff

Bu komut kaydedilmiş son versiyon ile mevcuttaki değişiklikler arasındaki farkları listeler. Tüm değişiklikler de görüntülenebilir sadece 1 dosya özelinde de bu işlem yapılabilir.

```bash
git diff [dosya]
```

### 2.3.2 rm

Bu komut silme işlemi yapar. Fakat standart silmeden farklıdır. Git tarafından takip edilen bir dosyayı sildiğinizde bunu değişiklik olarak kabul eder ve işaretleyip bu değişikliği kaybetmenizi ister. Git'in rm komutu ile sildiğinizde ise Git bunu otomatik yapar. Yani dosyayı hem fiziksel olarak siler hem de işaretler. Aynı zamanda bu dosyanın takibini de kaldırır.

Örnek:
```bash
git rm <dosya>
```

### 2.3.3 mv

Git dosyaların isimleri ile ilgili meta bilgileri tutmaz, isim değişikliğini takip etmez. Bu komut bir dosyayı yeniden adlandırmak için kullanılır. Bunu taşıma işlemi yaparak sağlar. Fakat standart taşımadan farklıdır. Git tarafından takip edilen bir dosyayı taşıdığınızda yani ismini değiştirdiğinizde eski isimdeki dosyanın silindiğini ve yeni isimdeki dosyanın takip edilmeyen yeni bir dosya olduğunu söyler. Bu işlemi devam ettirdiğinizde eski isimdeki silme operasyonunun ve yeni isimdeki dosyayı işaretlemeniz gerekir. İşaretleme sonrası eski isim tarihçeye silindi olarak geçer ve yepyeni bir dosya takip edilmeye başlandı olarak geçer. Bu doğru bir yaklaşım değildir. Bu yanlış kullanımın önüne geçmek için Git'in mv komutu ile isim değişikliği yapılmalıdır. Git mv komutu ile dosya ismini değiştirdiğinizde Git bunun bir isim değişikliği olduğunu anlar ve eski isimden yeni isme geçiş olduğunu belirtecek şekilde "renamed" durumunda işaretler.

Örnek:
```bash
git mv <eski_dosya> <yeni_dosya>
```

### 2.3.4 checkout

Dal(branch), versiyon(commit), etiket(tag) gibi kayıtlı bölümler arasında seçim yapmak için kullanılır. Commit seviyesinde HEAD'i değiştirir. Aynı zamanda işaretlenmemiş değişikliklerin son versiyonlanmış haline geri dönmesi için de kullanılır. Yani değişikliği işaretlememek istediğinizde checkout ile kaldırabilirsiniz.

Dal Geçişi:
```bash
git checkout <dal>
```

**master dalında**:
```bash
git checkout master
```

![master Dal](https://git-scm.com/book/en/v2/images/checkout-master.png)

**testing dalında**:
```bash
git checkout testing
```

![testing Dal](https://git-scm.com/book/en/v2/images/advance-testing.png)

**Versiyon Geçişi:**
```bash
git checkout <commit>
```

![Versiyon](https://wac-cdn.atlassian.com/dam/jcr:d93bca4e-11ed-4cd6-a690-e97444755429/01-02%20Detached%20HEADS.svg?cdnVersion=291)

**Değişikliği Geri Al:**
```bash
git checkout -- <dosya|.> # .(nokta) işareti tüm değişiklikleri geri alır.
```

### 2.3.5 reset

Versiyonları veya dosyalardaki değişiklikleri geri almak için kullanılır. Geri alma işlemi Git'in 3 ana çalışma bölgesi için ayrı ayrı uygulabilir. Bu ayrım --soft, --mixed ve --hard parametreleriyle yapılır. Varsayılan olarak parametre belirtilmezse --mixed uygulanır.

![reset 3 bölge](https://wac-cdn.atlassian.com/dam/jcr:7fb4b5f7-a2cd-4cb7-9a32-456202499922/03%20(8).svg?cdnVersion=291)

**reset --soft**

Commit seviyesinde HEAD'i değiştirir. Bu anlamda checkout ile benzer işlemi yapar. (HEAD, aktif commit işaretçisi)

```bash
git reset --soft <commit|dosya>
```

Öncesi Commit:

![reset soft öncesi commit](https://git-scm.com/book/en/v2/images/reset-start.png)

```bash
git reset --soft 9e5e6a4
```

Sonrası Commit:

![reset soft sonrası commit](https://git-scm.com/book/en/v2/images/reset-soft.png)

Öncesi Dosya:

![reset soft öncesi dosya](https://git-scm.com/book/en/v2/images/reset-squash-r1.png)

```bash
git reset --soft file-a.txt
```

Sonrası Dosya:

![reset soft sonrası dosya](https://git-scm.com/book/en/v2/images/reset-squash-r2.png)

Bu işlemden sonra işlemi geri almak için ``git commit`` komutu çalıştırılabilir.

![reset soft sonrası dosya commit](https://git-scm.com/book/en/v2/images/reset-squash-r3.png)

**reset --mixed** veya **reset**

Index seviyesinde değişiklik yapar. Hem HEAD'i hem Index'i değiştirir. (Index, stage bölümünde işaretlenmiş hali)

```bash
git reset --mixed <commit|dosya>
# veya
git reset <commit|dosya>
```

Öncesi Commit:

![reset mixed öncesi commit](https://git-scm.com/book/en/v2/images/reset-start.png)

```bash
git reset --mixed 9e5e6a4
# veya
git reset 9e5e6a4
```

Sonrası Commit:

![reset mixed sonrası commit](https://git-scm.com/book/en/v2/images/reset-mixed.png)

Öncesi Dosya:

![reset mixed öncesi dosya](https://git-scm.com/book/en/v2/images/reset-start.png)

```bash
git reset --mixed file.txt
# veya
git reset file.txt
```

Sonrası Dosya:

![reset mixed sonrası dosya](https://git-scm.com/book/en/v2/images/reset-path1.png)

Bu işlemden sonra işlemi geri almak için ``git add`` komutu çalıştırılabilir.

![reset soft sonrası dosya add](https://git-scm.com/book/en/v2/images/reset-path2.png)

**reset --hard**

Proje genelinde değişiklik yapar. Hem çalışma dizinini (working directory) hem HEAD'i hem de Index'i değiştirir. Bu işlemi diğerlerine göre tehlikelidir. Çünkü yapılan değişiklik geri alınamaz. Kalıcı olarak siler.

```bash
git reset --hard <commit|dosya>
```

Öncesi:

![reset hard öncesi](https://git-scm.com/book/en/v2/images/reset-start.png)

```bash
git reset --hard 9e5e6a4
```

Sonrası:

![reset hard sonrası](https://git-scm.com/book/en/v2/images/reset-hard.png)

### 2.3.6 checkout vs reset

git checkout b:

![checkout vs](https://wac-cdn.atlassian.com/dam/jcr:f45c4a34-8968-4c81-83cf-d55ebf01a447/02%20git-checkout-transparent%20kopiera.png?cdnVersion=291)

git reset b:

![reset vs](https://wac-cdn.atlassian.com/dam/jcr:bdf5fda3-4aac-4170-ba35-58f7a66ea3c4/03%20git-reset-transparent%20kopiera.png?cdnVersion=291)

-----------

![checkout vs reset](https://git-scm.com/book/en/v2/images/reset-checkout.png)

### 2.3.7 merge

2 veya daha fazla versiyonu birleştirmek için kullanılır. Örneğin farklı dallar ile çalıştıktan sonra birleştirme işlemi için bu komut kullanılır.

```bash
git merge <dal|commit>
```

Örneğin master ile iss53 dalını master dalında birleştirelim.

Öncesi:

![merge öncesi](https://git-scm.com/book/en/v2/images/basic-merging-1.png)

```bash
git checkout master
git merge iss53
```

Sonrası:

![merge sonrası](https://git-scm.com/book/en/v2/images/basic-merging-2.png)

## 2.4 SSH(Secure Shell) Protokolü

Bir bilgisayardan diğeri güvenli yoldan oturum açma yöntemidir. Bilgisayarlar arası bağlantı güvenli bağlantı kurulur.

Projede yaptığınız çalışmaları sunucuya gönderirken bu protokolün kullanılması hız katar. Varsayılan olarak HTTPS protokolü üzerinden aktarım yapılır. Bu protokolde ise her transferde kimlik doğrulaması yapmanız gerekir. SSH protokolü ile çalıştığınızda ise git web client uygulamasındaki tarife göre ayarlama yaptıktan sonra transfer işlemini transfer anında kimlik doğrulamasına ihtiyaç olmadan yapabilirsiniz.

![ssh şema1](https://www.ssh.com/hs-fs/hubfs/SSH_Client_Server.png?width=834&name=SSH_Client_Server.png)

-------------

![ssh şema2](https://miro.medium.com/max/1200/1*ZItMQX9ycwTOsqNZ9yvSog.jpeg)
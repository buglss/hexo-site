---
title: oAuth Temel Çalışma Mantığı
date: 2022-01-21 22:46:08
tags: oAuth
categories: Wiki
---

#### {C} => Client, {S} => Server, {FQDN} => Hizmet Sağlayıcı

Sırasıyla aşağıdaki gibidir.

1. ``Client``: Webview içinde **{FQDN}**/oauth/authorize?response_type=code&client_id=**\<CLIENT_ID\>**&redirect_uri=**\<SİZİN_URL\>** adresine ``GET`` et.
2. ``Client``: **{FQDN}** login sayfası açıldı. **{FQDN}** sistemindeki kullanıcı bilgilerini girdi.
3. ``Client``: **\<SİZİN_URL\>** adresinde ``GET`` metodunu dinleyen endpoint'inize **{"code":\<CODE\>}** payload'una sahip bir request gelir.
4. ``Server``: **\<SİZİN_URL\>** entpoint'inde gelen ``code`` bilgisini kullanarak {client_id:"**\<CLIENT_ID\>**",client_secret:"**\<CLIENT_SECRET\>**",grant_type:"authorization_code",code:**\<PAYLOAD.CODE\>**,redirect_uri:**\<SİZİN_URL\>**} payload'u ile **{FQDN}**/oauth/token adresine ``POST`` yap.
5. ``Server``: {"access_token":**\<ACCESS_TOKEN\>**,"expires_in":3600,"token_type":"Bearer","scope":"basic","refresh_token":**\<REFRESH_TOKEN\>**} response objesindeki "access_token" ve "token_type" bilgilerini kullanarak authorization header oluştur. Bu header ile payload'ın boş obje olacak şekilde **{FQDN}**/oauth/me/ adresine ``POST`` yap.
6. ``Server``: {"ID":**\<USER_ID\>**,"user_login":**\<USERNAME\>**,"user_nicename":**\<USER_NICENAME\>**,"user_email":**\<USER_EMAIL\>**,"user_registered":**\<USER_REGISTERED\>**,"user_status":**\<USER_STATUS\>**,"display_name":**\<USER_DISPLAY_NAME\>**} response objesi ile kullanıcı bilgilerine ulaştın.
7. ``Server``: Kullanıcı login başarılı. Webview olduğu için response olarak html dön. Başarılı olduğuna dair bir yazı olabilir. Tablette gitmesi gereken sayfaya doğrudan yönlendirme olabilir. Gibi gibi…
8. ``Client``: 7'nci adımdaki response'ta yaptığın işlem gerçekleşir.

<!-- more -->

![oAuth Flow Gif](/img/oauth.gif)
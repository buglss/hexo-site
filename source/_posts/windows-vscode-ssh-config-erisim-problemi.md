---
title: Windows VSCode SSH config Erişim Problemi
date: 2022-01-25 21:41:00
tags: [windows, vscode]
categories: Haydalı Bilgiler
---

# ...Bad Owner or Permissions on username.ssh\config...
``settings.json``'a (sol altta makaraya tıkla oradan **Settings** tıkla. Açıldıktan sonra sağ üst köşede **Open Settings (JSON)** iconuna tıkla) aşağıdaki satırı ekle.

```json
...
"remote.SSH.configFile": "C:\\\\Users\\\\<username>\\\\.ssh\\\\config"
...
```
---
title: Docker ile Gitlab Kurulumu
date: 2022-01-21 22:03:52
tags: [docker,gitlab]
categories: Kurulum
---

## SSH Port Ayarı

Gitlab 22 portunu kullandığı için işletim sisteminin ssh portunu 2222 olarak değiştir. ``/etc/ssh/sshd_config`` git.

```nginxconf
...
# What ports, IPs and protocols we listen for
Port 2222
...
```

## Docker ile Çalıştır

```bash
$ sudo docker run --detach --publish 443:443 --publish 80:80 --publish 22:22 --name gitlab --restart always --volume <path>/gitlab/config:/etc/gitlab --volume <path>/gitlab/logs:/var/log/gitlab --volume <path>/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce:latest
```

<!-- more -->

## Gitlab root Kullanıcı

Gitlab konteynırına bağlan ve root parolasını resetle.

```bash
$ docker exec -it gitlab bash
$ gitlab-rake "gitlab:password:reset[root]"
```

## Konfigürasyon

Temel konfigürasyon ayarlarını yap. ``<path>/gitlab/config/gitlab.rb`` dosyasını aç. Aşağıdakiler uygula.

```ruby
...
## GitLab URL
##! URL on which GitLab will be reachable.
##! For more details on configuring external_url see:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
external_url 'https://git.<domain>.com'
...
### GitLab email server settings
###! Docs: https://docs.gitlab.com/omnibus/settings/smtp.html
###! **Use smtp instead of sendmail/postfix.**
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "<ip>"
gitlab_rails['smtp_port'] = <port>
gitlab_rails['smtp_user_name'] = "<kullanici_adi>"
gitlab_rails['smtp_password'] = "<parola>"
gitlab_rails['smtp_domain'] = "<domain>.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = false
...
################################################################################
## Container Registry settings
##! Docs: https://docs.gitlab.com/ce/administration/container_registry.html
################################################################################
registry_external_url 'https://registry.<domain>.com'
...
```

## SSL Sertifika

SSL sertifikalarını aktar. ``<path>/gitlab/config/ssl`` klasörünün içine git. ``<domain>.com.crt``, ``git.<domain>.com.key``, ``registry.<domain>.com.crt`` ve ``registry.<domain>.com.key`` isminde crt ve key dosyalarını at. Sonra gitlab konteynırına restart at.

```bash
$ docker restart gitlab
```

## Bonus

Gitlab dosya ve dizinlerin sahipliklerinin olması gerektiği ayarlarda olması için aşağıdaki komutu çalıştırabilirsiniz. Olası bir sahiplik bozulmasında kullanılabilir.

```bash
$ docker exec -it gitlab update-permissions
```
FROM nginx@sha256:42d7c8933b04c4d5c2a69ec95c1f6424ccd0ceb1ffb577ebc93dbb37bad59ac0

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY out/ /usr/share/nginx/html/

EXPOSE 8080

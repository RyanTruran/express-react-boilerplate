FROM nginx:latest
COPY context/build /var/www
COPY conf/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]

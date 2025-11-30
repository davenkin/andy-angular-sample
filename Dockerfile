FROM nginx:1.28.0

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/andy-angular-sample/browser /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

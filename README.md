
# Proyecto Cinema
##### Este proyecto tiene como finalidad mostrar a grandes rasgos el resultado final de este curso. La imagen "microservices architecture" representa la conexión de cada uno de los componentes de este sistema que interactuan con el sistema.

![alt text](https://www.dropbox.com/s/p8bzdssqik2tw9m/microservice-cinema-architecture.png?dl=1 "microservices architecture")

### Componentes del sistema
* Balanceador de carga para servicios rest y la spa.
* Contenedor corriendo una imagen docker de la spa.  

### Load Balance nginx
```
upstream micro-cinema-movies {
   server 10.0.0.4:3000;
   server 10.0.0.5:3000;
}

upstream micro-cinema-comments {
   server 10.0.0.4:3001;
   server 10.0.0.5:3001;
}

server {
    listen 80;

    server_name cinema.crisostomo.soy;

    location /api/movies {
        proxy_pass http://micro-cinema-movies/movies;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    location /api/comments {
        proxy_pass http://micro-cinema-comments/comments;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

}
```

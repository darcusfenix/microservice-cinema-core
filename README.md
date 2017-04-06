
# Proyecto Cinema
##### Este proyecto tiene como finalidad mostrar a grandes rasgos el resultado final de este curso. La imagen "microservices architecture" representa la conexión de cada uno de los componentes que interactuan con el sistema.

![alt text](https://www.dropbox.com/s/p8bzdssqik2tw9m/microservice-cinema-architecture.png?dl=1 "microservices architecture")

### Componentes del sistema. MV (máquina virtual)

* MV - Balanceador de carga para servicios rest y la spa.
* MV - Contenedor corriendo una imagen docker de la spa.  
* MV - Contenedor corriendo una imagen mongodb.
* MV x2 - Cluster nativo de docker llamado (docker swarm). Dos nodos, manager y worker. Dos servicios docker-sarm para las API REST-FULL.
* MV . Broker de mensajería y sus respectivo proxy para el websocket ssl. Esta mv expone el puerto para la conexión TCP con mqtt.
* Tres nanegadores web. Una vez recibida la SPA conectan con el WWS y los servicios REST FULL

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

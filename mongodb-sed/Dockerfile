FROM mongo:latest
MAINTAINER Juan Crisóstomo

RUN mongodump  -h mongodb.crisostomo.soy --port 27017 -d cinema  -o cinemaBackup
CMD mongorestore --host mongodb --drop -d cinema  cinemaBackup/cinema

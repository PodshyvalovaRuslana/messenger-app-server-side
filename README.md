## Messenger app
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is a messenger, allows people to exchange with text messages
	
## Technologies
Project is created with:
* Docker version: 20.10.21
* Node version: 16.14.0
* Express version: 4.17.2
* Typescript version: 4.5.4
* Postgresql version: 8.7.1
* ReactJS version:18.2.0

## Setup
To setup this project install Docker Compose

```
Installation instruction:
https://docker-docs.netlify.app/compose/install/#prerequisites
```
## Project demands settings in .env file
* SERVER_PORT
* CLIENT_PORT
* DB_USER
* DB_HOST
* DB_NAME
* DB_PASSWORD
* DB_PORT
* PGADMIN_EMAIL
* PGADMIN_PASSWORD
* PGADMIN_PORT

## Run
To run this project use docker:

```
$ docker compose up
```
## Additional commands

```
$ docker compose up // Create and start containers
$ docker compose restart // Restart service containers
$ docker compose start // Start services
$ docker compose stop // Stop services
$ docker compose down // Stop and remove containers, networks
```

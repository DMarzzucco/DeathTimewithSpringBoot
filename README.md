# Death Time Middleware in APIsREST with SpringBoot

This is an example of how the Death Time middleware works in SpringBoot.

## Before Installation

Before testing the application, it is recommended to check the source code to configure the counter. The soruce code is
located at: `./src/main/java/com.DeathTime.API.Spring/middleware/DeathTimerMid.java`.

```Java
ZonedDateTime deathTime = LocalDateTime.parse("0000-00-00T00:00:00").atZone(ZoneId.systemDefault()); 
```

# Requirements

* Docker [Docker-Desktop](https://www.docker.com/products/docker-desktop/)
* .Java  [Java](https://www.java.com/download/ie_manual.jsp)
* Java Development Kit (JDK)
  17 [JDK Oracle](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

## Installation

```bash

#Start Data Base
docker-compose up db

# Compile the project
.\mvnw clean install 

#RunApp
.\mvnw spring-boot:run


```

## Port

[localhost:8080](http://localhost:8080)

## Documentation

The server code is documented in Swagger. You can access it
at [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

## Author

Made by Dario Marzzucco (DMarzzucco)

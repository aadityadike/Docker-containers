# CONTAINERIZING NODEJS & GOLANG APPLICATION SHARING SAME REACT CLIENT

## Additional Features In Docker File (Refer to SampleDockerfile)

### Parser Directives

At the top of the dockerfile You can add Two Optional things:

1. syntax=docker/dockerfile_version : You can use newer features provided by newer Dockerfile.
2. escape=\ : You can specify escape character. Default is '\'.

### ARG 

`@db` :  This part of the URL specifies the hostname or IP address of the server where the PostgreSQL database is running. In this case, it's set to "db." The use of "db" as the hostname suggests that the PostgreSQL server is running in a Docker container, and "db" is likely the container name
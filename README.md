# DevShare

Monorepo for PERN stack using Docker and `docker-compose`

## Setup

### Requirements / Dependencies

-   Docker + Docker Compose
-   Node 14
-   Yarn

### Environment Setup

For the Nginx reverse proxy setup, add the following to the `/etc/hosts` file:

```
# DevShare Development Environment Setup
127.0.0.1       dev.devshare.gg
127.0.0.1       app-dev.devshare.gg
127.0.0.1       api-dev.devshare.gg
```

To ensure all node dependencies install, run `yarn` in the main project directory.

## Development

### Adding Dependencies

To add dependencies to a specific package inside the monorepo, run the following:

```shell
# yarn workspace @devshare/<package> add [--dev] <dependency> [...<dependency>]
```

### Starting the Monorepo

To start the packages in the monorepo for development, run the following:

```shell
# docker-compose up -d
```

This will launch the Docker containers in daemon mode.

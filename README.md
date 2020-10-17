# booksForLife

## Docker

To start the API and Database, run the following command in the root of the repository:

```sh
docker-compose up -d
```

This will start the services in the background. To access the logs you can use the following commands:

```sh
docker-compose logs -t # shows all service logs with timestamps
docker-compose logs -tf # use 'follow' mode for watching logs in realtime
docker-compose logs -tf api # only api's logs
docker-compose logs -tf db # only db's logs
```

If each service starts successfully, you should be able to access following:

- Node/Express API at http://localhost:8080/
- Arango Dashboard at http://localhost:8529/
  ```
  username: root
  password: bfl
  database: _system
  ```

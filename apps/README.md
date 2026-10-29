# Create env variable

```
vim .env
```

```
DB_NAME=training
DB_HOST=127.0.0.1
DB_USER=peserta
DB_PASS=password
APP_PORT=3000
```
sonar-scanner \
  -Dsonar.projectKey=simple-apps \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://172.23.13.196:9000 \
  -Dsonar.token=sqp_4c4da067248353e77f369cae13cdc4fefecdb896
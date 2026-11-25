# Create env variable

```
vim .env
```

```
DB_NAME=training
DB_HOST=ipaddress
DB_USER=peserta
DB_PASS=password
APP_PORT=3000
```

sonar-scanner \
  -Dsonar.projectKey=simple-apps \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://172.23.8.160:9000 \
  -Dsonar.token=sqp_91fb76daa19c929076465bbadede079f922cef35

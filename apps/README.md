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
sonar-scanner-npm \
  -Dsonar.host.url=http://172.23.13.196:9000 \
  -Dsonar.token=sqp_af6ed50dd5d72b8ae3d42f165576356e0cef0017 \
  -Dsonar.projectKey=simple-apps
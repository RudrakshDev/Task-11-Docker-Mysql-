# Task-11-Docker-Mysql

## Setting Up MySQL with Docker and Vanilla JavaScript for Testing Database Connections

### 1. Set up MySQL Using Docker

```
docker run --name container-name -e MYSQL_ROOT_PASSWORD=mysql-password -e MYSQL_DATABASE=mysql-database -p custom-port-number:3306 -d mysql
```

![Screenshot (136)](https://github.com/RudrakshDev/Task-11-Docker-Mysql-/assets/170597596/6857b0cf-9049-40f2-a2d6-6816e76c1a6a)

### 2. Verify Container Status

```
docker ps
```

![image](https://github.com/RudrakshDev/Task-11-Docker-Mysql-/assets/170597596/5e07c8f3-7cf2-45bd-8b3d-bf721081fdfd)

### 3. Test Database Connection Using Vanilla JavaScript.

```
 npm init -y
```

![image](https://github.com/RudrakshDev/Task-11-Docker-Mysql-/assets/170597596/79a5fc22-7669-4197-8dfb-106334cee3a2)

```
npm i mysql2
```

![Screenshot 2024-07-10 055454](https://github.com/RudrakshDev/Task-11-Docker-Mysql-/assets/170597596/2ee77b2b-296f-42a6-98b7-c4ce34059cc4)

#### Create an `index.js` file and write the above given index.js code.

![image](https://github.com/RudrakshDev/Task-11-Docker-Mysql-/assets/170597596/b7e8718a-833f-4d5e-8a60-cf7149a3d52a)

```
node index.js
```

![Screenshot 2024-07-10 055920](https://github.com/RudrakshDev/Task-11-Docker-Mysql-/assets/170597596/b133ced1-3a8d-4ac6-b9c6-94e7b41f3a82)

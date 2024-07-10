# Task-11-Docker-Mysql

## Setting Up MySQL with Docker and Vanilla JavaScript for Testing Database Connections

### 1. Set up MySQL Using Docker

```
docker run --name container-name -e MYSQL_ROOT_PASSWORD=mysql-password -e MYSQL_DATABASE=mysql-database -p custom-port-number:3306 -d mysql
```

![Screenshot (136)](https://github.com/RudrakshDev/Task-11-Docker-Mysql-/assets/170597596/99b87795-0c58-4c5d-a385-5846c8ed0753)

### 2. Verify Container Status

```
docker ps
```

![image](https://github.com/RudrakshDev/Task-11-Docker-Mysql-/assets/170597596/5e07c8f3-7cf2-45bd-8b3d-bf721081fdfd)

### 3. Test Database Connection Using Vanilla JavaScript.

```
 npm init -y
```

  ![Screenshot 2024-07-10 054538](https://github.com/RudrakshDev/Task-11-Docker-Mysql-/assets/170597596/245df3c1-4954-49ef-8b23-7142aff1ae5e)

```
npm i mysql2
```

![Screenshot 2024-07-10 055454](https://github.com/RudrakshDev/Task-11-Docker-Mysql-/assets/170597596/2ee77b2b-296f-42a6-98b7-c4ce34059cc4)

#### Create an `index.js` file and write the code in it.


```
node index.js
```



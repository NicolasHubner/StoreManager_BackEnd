Here’s the translation:

# 🛍️ Store Manager Project

## 📄 About

A CRUD-based sales management system where it's possible to create, view, delete, and update products and sales. MySQL database was used for data management, following the MSC (Model-Service-Controller) architecture.

## 📋 Run the project on your machine

Clone the repository:

```
git clone git@github.com:NicolasHubner/store-manager-back-end.git
```
<details>
  <summary><strong>🐳 Running with Docker vs Locally</strong></summary>

### 👉 With Docker

**:warning: Before starting, your docker-compose must be version 1.29 or higher. [See here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) or [in the documentation](https://docs.docker.com/compose/install/) how to install it. In the first article, you can replace `1.26.0` with `1.29.2`.**

> :information_source: Run the `node` and `db` services with the command `docker-compose up -d`.

- Remember to stop `mysql` if you are using it locally on the default port (`3306`), or adapt it if you want to use the application in containers;
- These services will initialize a container named `store_manager` and another named `store_manager_db`;
- From here, you can run the `store_manager` container via CLI or open it in VS Code.

> :information_source: Option 1: Use the command `docker-compose run node npm test`, or to access the container and run it there:

> :information_source: Option 2: Use the command `docker exec -it store_manager bash` and follow the steps below.

- This will give you access to the interactive terminal of the container created by compose, which is running in the background.

> :information_source: Install dependencies [**If any**] with `npm install`.

- **:warning: Note:** If you choose to use Docker, **ALL** commands available in `package.json` (npm start, npm test, npm run dev, ...) must be run **INSIDE** the container, i.e., in the terminal that appears after executing the `docker exec` command mentioned above.

- **:warning: Note:** The **git** inside the container is not configured with your credentials. Either make commits outside the container, or configure your git credentials inside the container.

- **:warning: Note:** Do not run the npm audit fix command! It updates several project dependencies, and this update causes conflicts with the evaluator.

- **:warning: Note:** If you encounter the error below, it means that your application is already using port `3000`, either with another Node.js process (which you can stop with the `killall node` command) or some container! In this case, you can stop the container with the command `docker stop <container-name>`.


- ✨ **Tip:** Before starting anything, check the containers running on your machine. To see the running containers, just use the `docker container ls` command. If you want to stop the container, just use the `docker stop containerName` command. If you want to stop and remove the containers, just run the `docker-compose down` command.

- ✨ **Tip:** The `Remote - Containers` extension (which will be in the recommended extensions section of VS Code) is recommended so that you can develop your application in the Docker container directly in VS Code, just as you do with your local files.


 <br />

### 👉 Without Docker

> :information_source: Install dependencies [**If any**] with `npm install`.

- **:warning: Note:** Do not run the npm audit fix command! It updates several project dependencies, and this update causes conflicts with the evaluator.

- **:warning: Note:** Don't forget to rename/configure the `.env.example` file for local tests to work.
- **:warning: Note:** To run the project this way, **you must** have `Node.js` installed on your computer.
- **:warning: Note:** The version of `Node.js` and `NPM` to be used is `"node": ">=16.0.0"` and `"npm": ">=7.0.0"`, as described in the `engines` key in the `package.json` file. Ideally, Node.js version `16.14` should be used, which is the version this project was tested on.

  <br/>

</details>

## 👨🏻‍💻 Skills

- Create an application using Express.js;
- Create a RESTful API using the MSC (Model-Service-Controller) architecture;
- Validate request data with the Joi library;
- Implement unit tests with Mocha, Chai, and Sinon.


## 🛠️ Tools & Methodologies Used

- [Node.js](https://nodejs.org/en/);
- [Express.js](https://expressjs.com/);
- [Mocha](https://mochajs.org/);
- [Chai](https://www.chaijs.com/);
- [Sinon.js](https://sinonjs.org/);
- [sinon-chai](https://www.chaijs.com/plugins/sinon-chai/);
- [MySQL](https://www.mysql.com/);
- [mysql2](https://www.npmjs.com/package/mysql2);
- [Joi](https://joi.dev/api/?v=17.6.0);
- [Docker](https://www.docker.com/);
- JavaScript ES6+;

---
⌨️ developed by [Nicolas Hubner Santos](https://www.linkedin.com/in/nicolashubner/) 

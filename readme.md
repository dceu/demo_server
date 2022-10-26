# A Simple Express Server to Demo HTML/CSS/Javascript
Simple server implemented as a portfolio application. 
## Requirements: 
- [x] [Node](https://nodejs.org/en/download/)
- [x] [Express](https://expressjs.com/)
- [ ] Your own git Submodules

# How to use
## Add a Submodule 
```shell
cd public/ && git submodule add {your submodule url}
```

## Update Links & Routes
**Links** in *index.html*
```html
<div class="projects">
      <a href="/yourProject">go to project thing</a>
    </div>
```
**Routes** in *server.js*
```js
app.get("/{projectName}", (req, res) => {
  console.log("server get request");
  html = fs.readFileSync("./public/{projectName}/index.html");
  res.send(`${html}`);
```
## Demo
in your *terminal* the command:
```shell
node server.js
```
Will start a server listening on **port 3001** by default! This can be changed in *server.js*
```js
const port = 3001; // change to your spec
```
# Customize
Add your own stylesheets and scripts to **public/** and link them in the *index.html*


```html
<head>
  ...
  <link rel="stylesheet" href="customStyles.css" />
 <script defer src="/customThing.js"></script>
 ...
 </head>
 ```
You can change/add your own static folders to be served in *server.js*
### For example, adding the following line to *server.js*
```js
app.use(express.static("projects"));
```
Will open up routes to a folder named projects in the **root** directory.

# To Do:
- [ ] create npm run script
- [ ] projects folder to house submodules
- [ ] update package.json to decouple projects from server package
- [ ] deployment strategy that deploys as a single application containing projects

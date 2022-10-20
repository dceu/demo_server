# A Simple Express Server to Demo HTML/CSS/Javascript

## Install Node
https://nodejs.org/en/download/

## Install Express
```
npm install express
```

make sure you have admin privies or if using a linux distro:

```
sudo npm install express
```

## Start Server
```
node server.js
```

### How to use
#### in server.js
```
app.get("/", (req, res) => {
  console.log("server get request");
  html = fs.readFileSync("./index.html");
  res.send(`${html}`);
```
Routes to the index.html file

```
app.use(express.static("public"));
```
Allows static access to the public dir (include local css/js files here), but make sure you link them in the index.html head:
```
<head>
 <script defer src="/recipething/recipething.js"></script>
 </head>
 ```


### If You want to see some of the javascript included in this demo:
```
npm install
```
will create a node_modules dir and install demo project dependencies

### ToDo:
- [ ] create npm run script

## how to set up tailwind css 

step 1 : first should run these commands 


```
npm install -d tailwindcss
npx tailwindcss init 
```

setep 2 :
update tailwind.conf.js faile to include this line :

```
content:["*.html"],
```
step 3 : creating src/input.css to include 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
step 4 : including the ```src/output.css```
 file to our html 

 step 5 :
 fun the following command 
 ```
 npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
 ```
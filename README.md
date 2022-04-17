# CS351-project

CS351 database project.

## Start Backend

1. Install XAMPP
2. Start Apache and MySQL
3. http://localhost/phpmyadmin
4. Import CFG.sql into phpmyadmin
5. Move php/loginPortal.php into C:/xampp/htdocs/

## Start FrontEnd

```
yarn
yarn start
```

## How it works

1. no auth route http://localhost:3000/
1. rep auth route http://locahost:3000/portal
1. endpoint http://localhost/loginPortal.php is POST requested by the axios library. 

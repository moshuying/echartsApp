# data

## Project setup
```
npm install 
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 遇到的第一个难题:路由
做这个的时候没啥经验,一开始的路由想法错了,就很难受

## 第二个难题:304请求

304请求的意思是发送了两次相同的请求,服务器告诉你原来的缓存文件还可以用,解决方法是加个时间戳
const http=require('http')

const server= http.createServer((req,res)=>{
    res.write('hello world')
    res.write('hello maryouh')

    res.end()


})


server.listen(5000,()=>{console.log('server run with port 5000')})
// 引用Node内置包
const http = require('http')
const port = 3000

// 创建服务器
const server = http.createServer((req, res) => {
  // 返回什么内容
  res.end(`
  <h1>Yoooo</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur est omnis porro repellendus rerum sapiente! Architecto deleniti, dignissimos distinctio dolor laborum maiores molestias natus, nisi optio quos, reprehenderit velit voluptas!</p>
  `)
})

// 启动服务器
server.listen(port, error => {
  console.log(`http://localhost:${port}`)
})

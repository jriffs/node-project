const {writeFileSync} = require('fs')
const createBigFile = () => {
    for (let i = 0; i < 10000; i++) {
       writeFileSync('./bigfile.txt', '\n tkjhkhkjkjhkjsdkfzjddfvkjzfjdhzdfd,jhzfbv,zjhhdvbz,dfvdjz,dfv', {flag: 'a'})   
    }
}

createBigFile()
//console.log('hello node js')
var fs=require('fs')
// var r=fs.readFileSync('textfile.txt')
// console.log('trxt data is:' +r)
//console.log(fs)
// fs.readFile('textfile.txt',(er,data)=>{
//     console.log(data.toString())
// })
fs.open('textfile.txt','r',(err,data)=>{
    if(err)
         console.log(err)
    else{
         console.log('opened a file');
         fs.writeFile('textfile.txt','i am the new code',(err,data)=>{
            if(err)
                console.log(err);
            else
            console.log('new line added')
        })
    }
})


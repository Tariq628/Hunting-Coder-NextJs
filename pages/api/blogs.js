// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';

export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  let allBlogs = [];
  let myFile;
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    console.log(myFile);
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs);

  // fs.readdir("blogdata", (err, data)=>{
  //   let allBlogs = [];
  //   data.forEach(item => {
  //     fs.readFile(('blogdata/' + item), (data)=>{
  //       allBlogs.push(data);
  //     })
  //   });

  //   res.status(200).json(allBlogs);
  // })
}

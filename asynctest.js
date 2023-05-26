const fs = require("fs");

// 順不同で実行されてしまう！
// writeFileは非同期実行される
// for (let i = 0; i < 10; i++) {
//   const text = `write: ${i}`;

//   fs.writeFile("./data.txt", text, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(text);
//   });
// }

console.log("-----");

// 回数指定したいつもりがiを逆にしてしまったため，カウントダウンになってしまった
// これでwriteFile(10)なら，i=10..1で，10回のループになる．
// 一応，再帰を使うことで，処理の直列化ができることを確認．
const writeFile = (i) => {
  if (i <= 0) {
    return;
  }
  const text = `write: ${i}`;
  fs.writeFile("./data.txt", text, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(text);
    writeFile(i - 1);
  });
};

writeFile(10);

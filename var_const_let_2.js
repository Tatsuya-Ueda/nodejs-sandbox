function f1() {
    var a = 1;
}


f1();
// console.log(a) // error

// 関数内のvarは関数外には出ない．スコープは関数内．



var b = 1;

function f2() {
    var b = 2;
}
f2();
console.log(b);

function f3() {
    b = 2;
}
f3();
console.log(b);

// 関数内からグローバル領域の変数を書き換えられる例とそうでない例
// letでも同様になる

var c = 1;
var c = 2;
let d = 1;
// let d = 2;
const e = 1;
// const e = 2;

// 再代入不可な例とそうでない例

const obj = {
    prop1: 1
}
console.log(obj.prop1)
obj.prop1 = 2
console.log(obj.prop1)
Object.freeze(obj)
obj.prop1 = 999
console.log(obj.prop1)

/*
freezeはオブジェクトのプロパティを不変にすることができるが，constのように，上書きしようとしている箇所でエラーを出させるものではない．
誤って上書きしようとしてエラーとなっているような場合は，原因箇所の特定が大変になる可能性がありそう．
*/





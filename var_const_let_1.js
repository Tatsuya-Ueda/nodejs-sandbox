
if (true) {
    var foo = 5;
    const bar = 5;
    let baz = 5;
    aaaaa = 10;
    // bar = 1; // -> assignment to constant
}

console.log(foo + "aaa");
// console.log(bar + "aaa"); // -> not defined
// console.log(baz + "aaa"); // -> not defined
console.log(aaaaa + "aaa"); // -> not defined


/*
変数の強さとしては，
var > let > const
の順番．
*/

const $aaa = 0;
const _aaa = 0;
const a123 = 1;
const A = 0;
const a = 1;
// const 1a = 1; // error

console.log(A);
console.log(a);

/*
変数名は，ドル記号，アンダースコア，大小文字英字から始めることができる．
大文字と小文字は区別される．
*/

const str1 = "1";
const int1 = 1;

console.log(str1==int1)
console.log(str1===int1)

/*
等価演算(比較)には，(あいまい)等価と厳密等価が存在する．
不等価演算も同じように，両方存在する．
*/


console.log(typeof "") // string
console.log(typeof 1) // number
console.log(typeof 1e10) // number
console.log(typeof console.log) // function
console.log(typeof null) // object
console.log(typeof true) // boolean
console.log(typeof false) // boolean
console.log(typeof undefined) // undefined
console.log(typeof []) // object
console.log(typeof {})




console.log(`C${0}FF${3}${3}`)
console.log(`${3}y${3}s`)
console.log({})
console.log({foo: 1, bar: 2, baz: 3}) // associative array
console.log({foo: 1, bar: 2, baz: 3}.foo)
console.log(typeof {foo: 1, bar: 2, baz: 3}.bar)
// Pythonでいう辞書に似ているデータ構造．


// 連想配列の略記法
let _foo = 0;
let _bar = 1;
let _baz = 2;
console.log({_foo, _bar, _baz});




console.log(new Date());

t = {
    func1: !function(x) {
        return x*2;
    },
    func2: !function(x) {
        return x*x;
    }
}
console.log(t)

/**
 * const,letなどの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // 変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3="const変数を上書き";
// const val3="const変数を再宣言不可";
// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "かわかみ",
//   age: 28
// };
// val4.name = "jak";
// val4.address = "hiroshima";
// console.log(val4);
// constで定義した配列の変更が可能

/**
 * テンプレート文字列
 */
const name = "じゃけぇ";
const age = 28;
//「私の名前はじゃけぇです。年齢は28歳です。」

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

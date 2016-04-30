/* eslint-disable no-unused-vars,no-redeclare,no-empty */

// 末尾のセミコロンがない
var obj = {}

// 末尾に不要なセミコロン
function func(){}; 

// デバッグコード
console.log();

// デバッグコード（エラー）
console.error();

// アラート禁止
alert();

// trailing comma
var obj = {
  a:1,
  b:2
};
var obj = {a:1};

// 比較のイコールが代入になってる
var a=1,b=1;
if (a=b){}

// デバッガ機能
debugger;

// 引数がかぶってる
function func(a,b,a){}

// キーがかぶってる
var obj = {
  a:1,
  a:2,
};

// caseの条件がかぶってる
a = 1;
switch (a){
  case 1: break;
  case 1: break;
}

/* eslint-enable no-empty */
// 空ブロック
if (a==1){}
/* eslint-disable no-empty */

// functionオブジェクトに代入
function hoge(){}
hoge = 1;

// inの左側に!が来てはいけない、!(a in b)を強制
var b = {};
var a = 'key';
if (!a in b){}

// グローバルオブジェクトをfunctionとして呼んではいけない
Math();

// 配列で必ず要素を指定する
var array = [a,,b];

// 実行されないコード
function func(){
  return true;
  var x = 1;
}

// isNaN()の強制
a = 1;
if (a == NaN){}

// JSDocの構文チェック
/**
 * description
 * @param {int} id description
 */
function func(id){}

// typeofの型間違い
a = '123';
if (typeof a === 'strong'){}

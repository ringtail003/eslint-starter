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
var a=1;
var b=1;
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

// Arrayのcallbackの中でreturnを書く
Array.map(function(){});

// ブロックスコープ内での変数宣言
function doSomething(){
  if (a==1){
    var fuga = true;
  }
}

// returnに一貫性がない
function func(){
  if (a==1){
    return;
  } else {
    return 1;
  }
}

// {}の省略
if (a==1) b='abc';

// 値の比較は===または!==にする
if (a=='12345'){}

// nullと比較する時は===を使用
if (a==null){}

// evalはコンテキストを指定(e.g.window.eval())
eval('1+1');

// floatオブジェクトの0の省略を許可しない
a=.5;

// 必要のないブロック
function func(){
  {}
}

// 必要のない複数スペース
if (a   === 'bar'){}

// Functionコンストラクタの使用
var x = new Function();

// プリミティブのラッパークラスにnewを使用
var y = new String(123);

// 8進数はエスケープ文字を使用
var x = "\251";

// return文での代入
function func(){
  return a=b;
}

// 同じ内容の代入
a = a;

// 同じ内容の比較
if (a===a){}

// newなしのthrow
try {
  throw "error";
} catch(e){
}

// 文字列リテラルの連結(改行すれば可)
a = "123" + "456";

// 意味のないエスケープ
a = "123\a";

// with禁止
with ({a:1}){}

// parseIntにradixを指定
a = parseInt("071");

// グローバルオブジェクトのshadowing
function NaN(){}

// var宣言のない変数
hogefugafoo=1;

// undefinedでの初期化
var a = undefined;

// 配列のスペース
a = ['foo', 'bar' ];

// ブロックのスペース
if (a=1){a=123; }

// プロパティのスペース
a = {};
b = a[ 'name'];

// that,selfにプリミティブを保存しない
var that = 'abc';

// indent
    a=1;

// キーワードのスペース
if(a===1){
}else {
}

// ネスト数
for (var i=0;i<1;i++){
    for (var j=0;j<1;j++){
        for (var k=0;k<1;k++){
            for (var l=0;l<1;l++){
            }
        }
    }
}

// コールバック数
var foo = function(){};
var bar = function(){};
var baz = function(){};
var qux = function(){};
foo(function () {
    bar(function () {
        baz(function() {
            qux(function () {

            });
        });
    });
});

// 引数の数
function hoge(a,b,c,d,e,f,g,h,i){}

// elseの中で意味のないひとつだけのif
if (a===1){
} else {
    if (b===1){
        foo();
    }
}

// ドットの前後のスペース
a = {};
a . b = 1;

// セミコロン前のスペース
a = 1 ;

// 引数前後のスペース
function foo(){}
foo('abc', 123 );

/*コメントのスペース */

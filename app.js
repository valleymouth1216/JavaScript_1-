//2章 【JavaScriptの基本文法】

// let 変数名 = 内容 ;
// 変数は一度しか宣言できない
//JavaScriptでは、変数名の前にletを付けることで、変数を宣言できる

let hello = 'Hello World';
//アラートウィンドウが表示される↓
alert(hello);



//変数に代入
// 整数を代入する
let int1 = 1;

// 負数を代入する
let int2 = -10;

// 小数点を代入する
let float1 = 3.14;

// 文字列を代入する
let str1 = 'JavaScriptを覚えよう';

alert(int1);
alert(int2);
alert(float1);
alert(str1);



// 四則演算
// 足し算
alert(4 + 3);

// 引き算
alert(8 - 5);

// 掛け算
alert(2 * 6);

// 割り算
alert(10 / 2);



// 文字結合
alert('Hello' + 'World');



// 文字結合 変数で
let str3 = 'Hello';
let str4 = 'World!!';
alert(str3 + str4);




// 条件分岐

//if(条件1){
//  処理1
//}
// 条件1を満たすときは、処理1を実行

//if(条件1){
//  処理1
//} else{
//  処理2
//}
// 条件1を満たすときは処理1、満たさないときは処理2を実行

//if(条件1){
//  処理1
//} else if(条件2){
//  処理2
//} else{
//  処理3
//}
// 条件1を満たすときは処理1、条件2を満たすときは処理2、どちらも満たさないときは処理3を実行
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}



//繰り返し処理

//while(条件){
// 処理
//}
//引数の条件がtrueの間、波括弧内部の処理が繰り返される。

let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


//do{
//  最低1回は行われる処理
//}while(条件式);
//条件式のtrue／falseに関わらず、最初の1回だけは必ず処理される


//for ( 初期値; 条件式; 増減値 ){
//  繰り返し処理
//}
//決められた回数の処理を繰り返す

let i;
let num1 = 0;

for(i = 1; i < 11; i++){
  num1 = num1 + i;
}


alert('1から10まで足し算した結果は' + num1 + 'です');


//2章 【JavaScriptの基本文法】終わり
'use strict';

{
  // const score1 = 80;
  // const score1 = 90;
  // const score1 = 40;

  const otherScores = [10, 20];
  const scores = [80, 90, 40, ...otherScores];
  //上のように書くことで、配列を作る事ができる。...配列名と書くことで、配列内に配列ごと要素を入れる事が出来る。

  const [a, b, ...others] = scores;//この様に書くことで、a, bそれぞれの定数に配列の要素を代入できる。...(レスト構文)を使うことで配列内に配列の要素を代入する。...は最後の要素にしか使えない。

  let x = 30;
  let y = 70;
  [x, y] = [y, x];//この様に書くことで、変数の内容を入れ替える事が出来る。
  console.log(x);
  console.log(y);

  console.log(a);
  console.log(b);
  console.log(others);
  
  function sum(a, b) {
    console.log(a + b);
  }

  sum(...otherScores);//この様に書くことで、otherScoresの要素が展開されて、配列を引数に渡す事が出来る。

  console.log(scores[1]);
  //配列の中身を指定する場合は、[]内に数値を指定する。

  scores[2] = 45;//配列内の要素に代入する事が出来る。constでも配列内の要素に対しての代入は可能。

  console.log(scores[2]);

  scores.push(60,50);//pushで配列の末尾に要素を追加。
  scores.shift();//shiftで先頭の要素を消去。
  scores.splice(1, 1, 40, 50);//spliceを使用することで、配列の要素を任意の場所から変化させることができる。書き方はsplice(変化が開始する位置, 削除数, 追加する要素)。

  console.log(scores.length);//.lengthで配列の要素数を取り出せる。
for(let i = 0; i < scores.length; i++) { //for文の書き方はjavaとほぼ同じ。
  console.log(`Score ${i}: ${scores[i]}`);
  }

  const scores2 = [30, 40, 55];
  scores2.forEach((score, index) => {//forEachを使えば、配列の要素を一つずつ順番に取り出して処理を行う事が出来る。
    console.log(`Score ${index}: ${score}`);
  });

  const updatedScores2 = scores2.map((score) => {//mapを使うことで、配列の要素に処理を行い新しい配列に代入する事が出来る。
    return score + 20; 
  });
  // const updatedScores2 = scores2.map(score => score + 20);アロー関数は、引数が一つの場合引数の括弧を、処理が一つの場合中括弧をそれぞれ省略できる。
  console.log(updatedScores2[0]);

  const evenScores = scores2.filter(number => number % 2 === 0);
//filterを使うことで、条件に合った要素を別の配列に代入する事が出来る。
  console.log(evenScores);


  const point = {
    x: 100, 
    y: 180,
  };
  //上のような書き方でオブジェクトを作る事が出来る。{}内の呼称は、名前(キー):値 で、二つを合わせてプロパティ(メンバー)と呼ぶ。 
  
  point.x = 120;
  // point['x'] = 120;
  // 上の二つのような書き方でプロパティの内容を変更できる。
  
  console.log(point.x);
  console.log(point['y']);
  //オブジェクトの要素を取り出すとき、上の二つのように書く。下の記法は変数にアクセスするときに使う。

  point.z = 90; //新しいオブジェクトを挿入できる。
  delete point.y;//deleteでオブジェクトを削除できる。

  const keys = Object.keys(point);
  keys.forEach(key => {//オブジェクトの要素を配列に入れている。
    console.log(`Key: ${key} Value: ${point[key]}`); 
  });

  const points = [//pointsの配列に複数のオブジェクトを入れている。
    {x: 30, y: 20},
    {x: 10, y: 50},
    {x: 40, y: 40},
  ]
  console.log(points[1].y);

  const str = 'hello';
  
  console.log(str.length);//lengthで文字数を抽出できる。

  console.log(str.substring(2, 4));
  //substringを使うことで、文字列の指定した部分を切り出して抽出できる。substring(開始位置, 終了位置)と指定する。

  console.log(str[1]);//この様に書くと文字列の何文字目かを指定して抽出できる。

  const d = [2021, 6, 5];
  console.log(d.join('/'))//joinで配列の区切りに指定した文字を入れられる。

  const t = '12:40:05';
  console.log(t.split(':'));
  // splitで指定した文字で文字列を区切る事が出来る。
  const [hour, minute, second] = t.split(':');//区切った文字は、配列に入れることも可能。
  console.log(hour);
  console.log(minute);
  console.log(second);

  let sum2 = 0;

  scores2.forEach(score => {
    sum2 += score;
  });

  const avg = sum2 / scores2.length;

  console.log(Math.floor(avg));//floorで切り捨て
  console.log(Math.ceil(avg));//ceilで切り上げ
  console.log(Math.round(avg));//roundで四捨五入
  console.log(avg.toFixed(2));//toFixedで小数点以下の数を指定して表示。

  console.log(Math.random()); //randomで0~1の間の数字をランダムで生成。

  console.log(Math.floor(Math.random() * 3))
  //randomとfloorを組み合わせることで整数値をランダムで生成する事が出来る。

  const date = new Date();//現在の日時を取得。特定の日時を取得したい時は()内に数値を入力。
  console.log(date);

  console.log(`${date.getMonth() + 1}月 ${date.getDate()}日`);//getMonthで月を、getDateで日を取得。

  alert('こんにちは。');//alertを使うと、実行した際に警告のダイアログを表示できる。

  const answer = confirm('疲れてない？大丈夫？');//confirmを使うと、確認のダイアログを表示する事が出来る。

  if(answer === true) { //confirmの結果で条件分岐させることもできる。OKと答えたらtrueになる。
    alert('なら良かった。')
  } else {
    alert('そろそろ休んだ方が良いよ。');
  }

  let count = 0;

  function showTime() {
    console.log(new Date());
    count++;
    if(count > 2) {
      clearInterval(intervalId);//clearIntervalでsetIntervalの処理を止める事が出来る。
    }
  }

  const intervalId = setInterval(showTime, 1000);//setIntervalを使用することで、指定した時間間隔で処理を行う事が出来る。秒数の単位はミリ秒。

  setTimeout(showTime, 4000);//指定した秒数後に処理を行う事が出来る。秒数の単位はミリ秒。

  const name = 'sasaki';

  try {
    console.log(name.toUpperCase());//toUpperCaseで小文字を大文字に変換している。
  } catch (e) {
    console.log(e);
  }//予期しないエラーを想定してtry-catchでエラーが起きてもプログラムが滞らない様にすることができる。エラーが起きる可能性がある部分をtryで囲み、catchでエラーが起きた時の処理を記述する事が出来る。

  console.log('Finish!');


  class Post {//この様な書き方でクラスを定義する事が出来る。
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`);
    }

    //静的メソッド
    //staticを付けることでクラスから直接このメソッドを呼び出す事が出来る。静的メソッドではthisを使う事が出来ない。
    static showInfo() {
      console.log('Post class version 1.0');
    }
  }

  class SponsoredPost extends Post {//extendsで一つのクラスから要素を継承して子クラスを作り出す事が出来る。
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`... sponsored by ${this.sponsor}`);
    }

    
    static showInfo() {
      console.log('Post class version 1.0');
    }
  }

  const posts = [
    new Post('JavaScriptの勉強中です。'),//
  
      // show: function () {
      //   console.log(`${this.text} - ${this.likeCount}いいね`);
      // },
      // show() {
      //   console.log(`${post.text} - ${post.likeCount}いいね`);
      // }
      //上のように、関数をプロパティの値に設定した場合その関数はメソッドと呼ばれる。メソッドの定義の仕方は上のような二つの書き方がある。
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall')
  ];

  posts[0].show();
  posts[1].show();
  posts[2].show();
  

  Post.showInfo();


}
'use strict'

{
  // function update() {
  //   // document.querySelector('h1').textContent = 'Changed!';
  //   // document.querySelector('#target').textContent = 'Changed!';
  //   // document.getElementById('target').textContent = 'Changed!';
  //   // document.querySelectorAll('p')[1].textContent = 'Changed!';
  //   // document.querySelectorAll('p').forEach((p, index) => {
  //   //   p.textContent = 'Changed!'
  //   // });
  // }
  //タグやidを指定して、要素を書き換える事が可能。
  // setTimeout(update, 1000);

  document.querySelector('button').addEventListener('click', () => {
    const targetNode =document.getElementById('target');
    // targetNode.textContent = 'Changed!';
    targetNode.textContent = targetNode.dataset.translation;//datasetを使用すると、HTMLのカスタムデータ属性を指定して要素を変更できる。
    targetNode.title = 'This is title!';
  //  targetNode.className = 'my-color';//classNameを使って、HTMLのclassの値を操作する事が出来る。
  // targetNode.classList.add('my-color');
  // if (targetNode.classList.contains('my-color') === true) {
  //   targetNode.classList.remove('my-color');
  // } else {
  //   targetNode.classList.add('my-color');
  // }
  targetNode.classList.toggle('my-color');//classListを使用すると、HTMLで既に要素にclassが付けられていたとしても指定したクラスを追加する事が出来る。toggleは重複するクラスがないか確認し、あれば消去、なければ追加してくれる。



  });//addEventListnerを使うと指定された動作を確認すると、中の処理を行う様にすることができる。
  //clickはクリックされた時、dbclickはダブルクリックされた時、mousemoveはマウスを動かした処理が実行される。


  
}
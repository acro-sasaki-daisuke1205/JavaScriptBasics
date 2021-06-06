'use strict'

{
  document.querySelector('button').addEventListener('click',() => {
    // const item2 = document.createElement('li');//createElementで要素を生成する事が出来る。
    // item2.textContent = 'item 2';

    // const ul = document.querySelector('ul');
    // ul.appendChild(item2);//appendChildで指定した要素の子要素に入れる事が出来る。

    const item0 = document.querySelectorAll('li')[0];
    const copy = item0.cloneNode(true);//要素を複製している。

    const item1 = document.querySelectorAll('li')[1];

    const ul = document.querySelector('ul');
    const item2 = document.querySelectorAll('li')[2];
    ul.insertBefore(copy, item2);//第一引数に指定した要素を第二引数の前に挿入している。
    // item1.remove();
    //親Node.removeChild();

    document.querySelector('ul').removeChild(item1);//removeかremoveChildを使うことで要素を削除できる。

    
  });


}
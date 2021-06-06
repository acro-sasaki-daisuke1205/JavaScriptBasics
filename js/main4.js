'use strict'

{
  document.querySelector('button').addEventListener('click',() => {
    // const li = document.createElement('li');
    // const text = document.querySelector('input');
    // li.textContent = text.value;
    // document.querySelector('ul').appendChild(li);

    // text.value = '';
    // text.focus();//focusで自動でテキスト入力待ち状態にしている。
    // const color = document.querySelector('select');
    // li.textContent = `${color.value} - ${color.selectedIndex}`;//valueで入力された値、selectedIndexで選ばれた要素が配列の何番目かを表示。valueはHTMLで定義されていればそちらが優先される。
    // document.querySelector('ul').appendChild(li);

    const colors = document.querySelectorAll('input');
    let selectedColors = [];

    colors.forEach(color => {
      if (color.checked === true) {//checkedで指定された値が入力されているか確認できる。
        selectedColors.push(color.value);
      }
    });

    if(selectedColors.length === 0) {
      alert('チェックがされてないよ！');
    }

    const li = document.createElement('li');
    // li.textContent = selectedColors.join(',');
    li.textContent = selectedColors;
    document.querySelector('ul').appendChild(li);
  });
}
const arr1 = [1,2,3];//eslint-disable-line

function generateList(array){//eslint-disable-line
    const $ul = document.createElement('ul');
    for (let i = 1; i <= arr1.length; i++) {
        const $li = document.createElement('li');
        $li.textContent = i;
        $ul.appendChild($li);
    }
    return $ul.outerHTML;
}
document.body.outerHTML = generateList(arr1);


const array = [1,2,3];//eslint-disable-line
function generateList(array){//eslint-disable-line
    const $ul = document.createElement('ul');
    array.forEach(element => {
        const $li = document.createElement('li');
        $li.textContent = element;
        $ul.append($li);
    });
    return $ul.outerHTML;

}
document.body.outerHTML = generateList(array);

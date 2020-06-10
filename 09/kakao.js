const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const $moreBtn = document.querySelector('#more');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK cd6141155bb38de2c96510191479f0c1' };

function success(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`;
  });

  $result.innerHTML += `<ul class="list-group list-group-flush">${li.join(
    '',
  )}</ul>`;
}

function error() {
  alert('데이터를 가져올 수 없습니다.');
}

function getResult() {
  const { value } = $text;
  fetch(`${url}?query=${value}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);
}

function search() {
  const { value } = $text;
  if (value === '') {
    alert('검색어를 입력하세요.');
    return false;
  }

  getResult();

  $moreBtn.style.display = 'inline-block';

  return true;
}

function moreSearch() {
  getResult();
}

$btn.addEventListener('click', search);
$moreBtn.addEventListener('click', moreSearch);
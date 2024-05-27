// 서버 URL
const URL = "https://jsonplaceholder.typicode.com/posts";
const URL2 = "http://localhost:8383/api/v1/replies/30";
const $postUl = document.querySelector(".posts");

// 화면에 게시물을 렌더링하는 함수
const renderPosts = (postsList) => {
    postsList.forEach((post) => {
        // 템플릿 태그 가져오기
        const $template = document.querySelector("#single-post");
        const $li = document.importNode($template.content, true);
        $li.querySelector("h2").textContent = post.title;
        $li.querySelector("p").textContent = post.body;

        $postUl.appendChild($li);
    });
};

// 서버에서 게시물 정보 받아오기

document
    .querySelector("#available-posts button")
    .addEventListener("click", (e) => {
        fetch(URL)
            .then((res) => res.json())
            .then((json) => {
                renderPosts(json);
            });
    });
$postUl.addEventListener("click", e=> {
});


/* <template id="single-movie">
            <div class="movie">
                <div class="img-box">
                    <img src="#" alt="표지사진">
                </div>
                <div class="inner">
                    <div class="title"></div>
                    <div class="year"></div>
                    <div class="rating"></div>
                </div>
            </div>
        </template> */
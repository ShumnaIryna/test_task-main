"use strict";

function addCommentFields() {
  const comment_wr = document.querySelector("#comment_new");
  const user_comment = document.createElement("div");
  const add_btn = document.createElement("button");

  user_comment.classList.add("comment-add");
  user_comment.setAttribute("contenteditable", true);

  add_btn.setAttribute("type", "button");
  add_btn.textContent = "опубликовать";
  add_btn.addEventListener("click", () => {
    if (user_comment.textContent !== "") {
      addNewComment(user_comment.textContent, comment_wr);
      user_comment.textContent = "";
    }
  });

  comment_wr.appendChild(user_comment);
  comment_wr.appendChild(add_btn);
}

function addNewComment(user_comment, comment_wr) {
  const comment = document.createElement("div");
  comment.classList.add("comments");

  const new_comment = `
    <div class="profile">
        <img src='./assets/9.jpg'>
    </div>
    <div class="comment-content">
        <p class="name">Anonim</p>
        <p>${user_comment}</p>
    </div>
  `;
  comment.innerHTML = new_comment;

  comment_wr.after(comment);
}

(function () {
  window.addEventListener("load", addCommentFields);
})();

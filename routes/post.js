const express = require("express");

const router = express.Router();

// /post - 전체 글 보기
router.get("/", (req, res) => {
  const board_date = [
    {
      category: "유머",
      title: "안녕하세요 스터디",
      date: "2021-12-26",
      like: 100,
      comment_count: 5,
    },
    {
      category: "이슈",
      title: "가격이 아무리 올라도 프리미엄을 쓸수밖에 없게 만든 넷플릭스",
      date: "2021-12-26",
      like: 100,
      comment_count: 10,
    },
    {
      category: "공포/오컬트",
      title: "꼭 알아야하는 왓챠의 기괴한 공지사항",
      date: "2021-12-26",
      like: 100,
      comment_count: 15,
    },
    {
      category: "유머",
      title: "안녕하세요 스터디 스터디",
      date: "2021-12-26",
      like: 100,
      comment_count: 20,
    },
  ];
  res.status(200).json(board_date);
});

// /post -  글 하나 보기
router.get("/:id", (req, res) => {
  res.send("글 하나 보기");
});

// /post - 글쓰기
router.post("/", (req, res) => {
  res.send("글쓰기");
});

// /post - 글수정
router.put("/:id", (req, res) => {
  res.send("글수정");
});

// /post - 글삭제
router.delete("/:id", (req, res) => {
  res.send("글삭제");
});

// /post - 검색
router.get("/search/:search", (req, res) => {
  res.send("검색");
});

module.exports = router;

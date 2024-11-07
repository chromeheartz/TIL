import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  // 비동기적으로 데이터를 가져오기 위해 Promise로 감싸서 사용
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 예시 대기 시간

  // 동기식으로 SQL 쿼리 실행
  return db.prepare("SELECT * FROM meals").all();
}

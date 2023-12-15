import { loadData } from "@/app/loadData";
import CommentsSection from "@/app/comments-section";

export default async function Home() {
  const { currentUser, comments } = await loadData();
  return <CommentsSection currentUser={currentUser} comments={comments} />;
}

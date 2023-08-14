import { EmojiRating } from "@/app/components/EmojiRating";
const App = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <EmojiRating rate={5} />
      </div>
    </>
  )
}

export default App;
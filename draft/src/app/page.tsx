import { peopleList } from "@/app/data/people";

const Page = () => {
  return (
    <>
      <ul>
        {
          peopleList.filter(({ profession }) => (profession != "chemist")).map(({ id, name, profession }) => {
            return <li key={id}>{name} is {profession}</li>
          })
        }
      </ul>
    </>
  )
}
export default Page;
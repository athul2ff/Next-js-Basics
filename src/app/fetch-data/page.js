export default async function DataFetching() {

  const res = await fetch('https://dummyjson.com/users');
  const { users } = await res.json();
  console.log("users", users, res);

  return (
    <div>
      <h1>Data fetching...</h1>
      {
        users.map((user) => {
          return <h4 key={user.id}>{user.firstName}</h4>
        })
      }

    </div>
  )
}

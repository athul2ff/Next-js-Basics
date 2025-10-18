export const users =[
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "role": "admin",
    "age": 28
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "email": "bob.smith@example.com",
    "role": "user",
    "age": 32
  }
]


export async function GET() {
    return Response.json(users); 
}

export async function POST(req) {
    const body = await req.json()
    const newUser = {id:users.length +1,...body}
    users.push(newUser);
    return Response.json(newUser,{status:201});
}
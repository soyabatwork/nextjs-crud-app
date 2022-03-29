// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const method = req.method;

  if (method === "GET") {
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json();
    res.status(200).json(posts);
  }

  if (method === "POST") {
    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
      const data = await response.json();
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}

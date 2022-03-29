export default async function handler(req, res) {
  const method = req.method;
  const { postid } = req.query;

  if (method === "GET") {
    try {
      const response = await fetch(`http://localhost:3000/posts/${postid}`);
      const data = response.json();
      res.status(200).json(data);
    } catch (error) {}
  }

  if (method === "PUT") {
    try {
      const response = await fetch(`http://localhost:3000/posts/${postid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
      const data = await response.json();
      console.log(data);
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (method === "DELETE") {
    try {
      await fetch(`http://localhost:3000/posts/${postid}`, {
        method: "DELETE",
      });
      res.status(200).json({ message: "post deleted successfully" });
    } catch (error) {
      console.log(error);
    }
  }
}

export default function handler(req, res) {
  const { phone } = req.query;

  if (!phone) {
    return res.status(400).json({ error: "Phone number is required" });
  }

  const pairCode = `${Math.floor(100000 + Math.random() * 900000)}`;
  return res.status(200).json({ pairCode });
}

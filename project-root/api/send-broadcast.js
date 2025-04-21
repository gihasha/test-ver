export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, groupJid } = req.body;

  if (!message || !groupJid) {
    return res.status(400).json({ error: "Message and Group JID are required" });
  }

  console.log(`Sending message: "${message}" to group ${groupJid}`);
  return res.status(200).json({ success: true, sent: 100 });
}

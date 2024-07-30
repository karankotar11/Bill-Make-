'use server'
import connectToDB from "@/database";
import LocationofUser from "@/model"

export default async function handler(req, res) {
    if (req.method === "POST") {
      await connectToDB();
  
      try {
        const createdLocation = await LocationofUser.create(req.body.location);
        res.status(200).json({ success: true, data: createdLocation });
      } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, error: e.message });
      }
    } else {
      res.status(405).json({ success: false, error: "Method not allowed" });
    }
  }
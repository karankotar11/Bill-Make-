'use server'
import connectToDB from "@/database";
import LocationofUser from "@/model"

export async function SaveLocation(location) {
    await connectToDB();

    try {
      const createdLocation = await LocationofUser.create(location);
  
        return { success: true, data: JSON.parse(JSON.stringify(createdLocation)) }; // Return success and created document
    } catch (e) {
        console.error(e);
        return { success: false, error: e.message }; // Return error message
    }
}

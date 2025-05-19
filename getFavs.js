export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') { //GET
      return res.status(405).json({ error: 'Only GET requests allowed' });
    }

    const { createClient } = require('@supabase/supabase-js');

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );

    const { data, error } = await supabase.from('favorites').select('*'); //FAVORITES

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("Server Error:", err); //SERVER ERROR
    return res.status(500).json({ error: 'Unexpected server error' });
  }
}
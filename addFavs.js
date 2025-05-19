export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') { //POST
      return res.status(405).json({ error: 'Only POST requests allowed' }); //ONLY POST REQUESTS ALLOWED
    }

    const { createClient } = require('@supabase/supabase-js');

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );

    const { quote, author } = req.body;

    if (!quote || !author) {
      return res.status(400).json({ error: 'Missing quote or author' }); //MISSING QUOTE OR AUTHOR
    }

    const { data, error } = await supabase
      .from('quote')
      .insert([{ quote, author }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Saved!', data }); //SAVED

  } catch (err) {
    console.error("Server Error:", err);
    return res.status(500).json({ error: 'Unexpected server error' });
  }
}
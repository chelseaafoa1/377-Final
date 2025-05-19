import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { supabase } from './supabase_client.js';
import { createServer } from '@vercel/node';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Save a new quote

app.post('/api/addFavs', async (req, res) => {
  const { quote, author } = req.body;
  //console.log("💾 Trying to save:", quote, author);
  //console.log("📦 Payload going to Supabase:", { quote, author }); // 

  const { data, error } = await supabase
    .from('quotes') // 
    .insert([{ quote, author }]);

  if (error) {
    //console.error(" Supabase insert error:", error);
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: "Quote saved!", data });
});

app.get('/api/getFavs', async (req, res) => {
  const { data, error } = await supabase
    .from('quotes') // 
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    //console.error("Supabase fetch error:", error);
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
export default app;
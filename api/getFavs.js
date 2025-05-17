export default async function handler(req, res){
    const {createClient} = require('@supabase/supabase-js');

    const supabase=createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_ANON_KEY
    );


const { data, error } = await supabase.from('favorites').select('*');

if (error){
     return res.status(500).json({ error: error.message});
}
res.status(200).json(data);
}
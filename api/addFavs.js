export default async function handler(req, res){
    if (req.method !=='POST') {
        return res.status(405).json({error: 'only POST request'})
    }

    const {createClient} = require('@supabase/supabase-js');
   const supabase=createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_ANON_KEY
);

const {quote, author}=req.body;

const { data, error } = await supabase
    .from('favorites')
    .insert([{quote, author}]);

if (error) {
    return res.status(500).json({ error: error.message})
}
res.status(200).json({message: 'Saved!', data});
}

export default async function handler(req, res){
    if (req.method !=='POST') {
        return res.status(405).json({error: 'only POST request'})
    }

    const {createClient} = require('@supabase/supabase-js');
   const supabase=createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_ANON_KEY
);

const {quote, author}=req.body;

const { data, error } = await supabase
    .from('favorites')
    .insert([{quote, author}]);

if (error) {
    return res.status(500).json({ error: error.message})
}
res.status(200).json({message: 'Saved!', data});
}

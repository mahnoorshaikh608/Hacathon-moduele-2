const supabaseUrl = "https://afaeflhduoqffylpontx.supabase.co"
const supabasekey = "sb_publishable_AtQ8VpU2TTjQdMYhmcfzQA_2iAR9mFn"
const {createClient} = supabase;

const client = createClient(supabaseUrl,supabasekey);

console.log(client);



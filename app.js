const supabaseUrl = "https://afaeflhduoqffylpontx.supabase.co"
const supabasekey = "sb_publishable_AtQ8VpU2TTjQdMYhmcfzQA_2iAR9mFn"
const {createClient} = supabase;

const client = createClient(supabaseUrl,supabasekey);

console.log(client);

let submit = document.querySelector("#submitbtn")
console.log(submit)

let  username = document.querySelector("#username")
let  useremail = document.querySelector("#useremail")
let  userpassword = document.querySelector("#userpassword");

submit.addEventListener ("click", async(event)=>{
    event.preventDefault()
    try{
const { error } = await client
  .from('Recipe-shairing')
  .insert([{
    name : username.value,
    email : useremail.value,

   }])
}
catch(error){
    console.log(error)
};
})
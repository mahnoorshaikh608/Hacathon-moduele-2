const supabaseUrl = "https://afaeflhduoqffylpontx.supabase.co"
const supabasekey = "sb_publishable_AtQ8VpU2TTjQdMYhmcfzQA_2iAR9mFn"
const {createClient} = supabase;

const client = createClient(supabaseUrl,supabasekey);

console.log(client);

let submit = document.querySelector("#submitbtn")


// console.log(username);
// console.log(useremail);
// console.log(userpassword);

if(submit) {

let  username = document.querySelector("#username");
let  useremail = document.querySelector("#useremail");
let  userpassword = document.querySelector("#userpassword");

submit.addEventListener ("click", async(event)=>{
    event.preventDefault()
    if (!username.value || !useremail.value || !userpassword.value){
        // alert("please fill all fields");
        // return;
    }
    try{
const { data ,error } = await client
  .from('profiles')
  .insert([{
    name : username.value,
    email : useremail.value,

   }]);
}
catch(error){
    console.log(error)
};
});
}

function showOptions() {
    document.getElementById("options").style.display = "block";
}

function logout() {
    window.location.href = "logout.html";
}
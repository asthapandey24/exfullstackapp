 const form=document.getElementById('my-form"');   //form

const sumbmit=document.querySelector('.btn');  //submit_btn

const ul=document.getElementById('users'); ///ul

sumbmit.addEventListener('click',storedata); //// 

let id;

//////////////////////////

function storedata(e){
    e.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    if(sumbmit.value==='UPDATE')
    {

              const data={
                "name":name,
                "email":email
              }
              console.log()
        axios.put(`https://crudcrud.com/api/96e6da4dfac14061b8cfa7f1b7e3cef6/bookapinmnetdetail/${id}`,data)
        .then((Response)=>{
          console.log(Response);
          displaydata(data);
             cleardata();
        }).catch((err)=>{
          console.log(err);
        });

        sumbmit.value='Submit';
        sumbmit.style.background='#333';
    }
    else
    {

    
     if(name!=='' || email!=='')
     {
        
        const obj={
            name,
            email
        };
          axios.post(`http://localhost:4000/user/add-user`, obj)
        .then(response => {
          console.log(response);
          displaydata(obj);
        })
        .catch(error => {
          console.log(error);
        });
       
             cleardata();
      }
    }
}

////////////////////for window refresh///////////////////////////

window.addEventListener('DOMContentLoaded',(event)=>{
    console.log("i am window");
    axios.get(`http://localhost:4000/user/get-data`)
    .then((Response)=>{
      console.log(Response);
      for(var i=0;i<Response.data.details.length;i++)
      {
        displaydata(Response.data.details[i]);
        console.log("hello");
      }
    }).catch((error)=>{
      console.log(error)
    });

                
});


//////////////////for display///////////////////////////////////////

function  displaydata(details){
    
    const li=`<li id=${details.id}>${details.name}-${details.email}
    <button onclick=deletedata('${details.id}')>delete</button>
    <button onclick=editdata('${details.id}','${details.name}','${details.email}')>edit</button></li>`;
    ul.innerHTML=ul.innerHTML+li;

}



//////////////////////deletedata///////////////////////////////////
function deletedata(deleteid)
{
   // localStorage.removeItem(deleteid);

    axios.delete(`http://localhost:4000/user/delete-user/${deleteid}`)
    .then((response)=>{
      removedata(deleteid);
      console.log(response);
    }).catch((err)=>{
        console.log(err);
    })
   

}



////////////////remove the data form the screen////////////////////////////

function removedata(deleteid)
{
    let parentNode=document.getElementById('users');
    let elementnode=document.getElementById(deleteid);
    parentNode.removeChild(elementnode);

}





//////////////////////////////////updata_data////////////////////
function editdata(user_id,name,emailid){
  const name1=document.getElementById('name').value=name;
    const email=document.getElementById('email').value=emailid;
    id=user_id;
  // axios({
  //     method:'put',
  //     url:`https://crudcrud.com/api/96e6da4dfac14061b8cfa7f1b7e3cef6/bookapinmnetdetail/${id}`,
  //     const data={
  //         "name":name1,
  //         "email":email
  //       }
  //       console.log()
  // axios.put(`https://crudcrud.com/api/96e6da4dfac14061b8cfa7f1b7e3cef6/bookapinmnetdetail/${id}`,data)
  // .then((Response)=>{
  //   console.log(Response);
  // }).catch((err)=>{
  //   console.log(err);
  // });

  removedata(user_id);
    

  sumbmit.value='UPDATE';
    sumbmit.style.background='GREEN';

}


////////////////////////clear_data//////////////////////////////////


function cleardata(){
const name=document.getElementById('name').value='';
const email=document.getElementById('email').value='';

}
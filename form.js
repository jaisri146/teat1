const a = []
async function fun(){
     const data = {}
     data['fullname'] = "";
     data['age'] = "";
     data['male'] = "";
     data['phone'] = "";
     data['email'] = "";
     a.push(data)
    a = `
         <tr>
         <td>${data.fullname}</td>
         <td>${data.age}</td>
         <td>${data.male}</td>
         <td>${data.phone}</td>
         <td>${data.email}</td>
         </tr>
    `;
   document.getElementById("test").innerHTML=a;
}
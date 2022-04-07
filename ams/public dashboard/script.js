// static alumnies....
const alumni=[ {
     "name": "Ankit Chouhan",
     "desc": "Incoming System Engineer at TCS"
    },
    {
      "name": "Kailash Sahu",
      "desc": "Power programmer at Infosys"
    },
    {
        name:"ram chopra",
        desc:"Software Engineer at Capegemini"
    },
    {
        name:"Nikita Verma",
        desc:"Software Engineer at MPhasis"
    },
    {
        name:"Arvind Thakur",
        desc:"Data Engineer at ExternLab"
    },
    {
        name:"Akash Yadav",
        desc:"Data Analyst at Google"
    }
];
//.............
const gallery=['../images/gallery/i1.jpg','../images/gallery/i2.jpg','../images/gallery/i3.jpg','../images/gallery/i4.jpg','../images/gallery/i5.jpg','../images/gallery/i6.jpg'];
showgallery(gallery);// display gallery images..
showAlumnies(alumni);// display all Alumnies;
const upcommmingEvent={
    title:"Sagar Euphoria Shine 2K22",
    banner:"../images/gallery/i6.jpg",
    descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur numquam beatae aliquam repellendus? Nesciunt animi perferendis perspiciatis exercitationem laboriosam placeat porro, omnis magni doloremque ducimus suscipit veniam ad incidunt laudantium nostrum error fugiat tempora temporibus ullam officia eaque facilis iste laborum maxime. Iste totam distinctio quasi eveniet sapiente eum itaque."
};
const pastEvents=[{
    title:"Sagar Euphoria Shine 2K22",
    banner:"../images/gallery/i6.jpg",
    descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur numquam beatae aliquam repellendus? Nesciunt animi perferendis perspiciatis exercitationem laboriosam placeat porro, omnis magni doloremque ducimus suscipit veniam ad incidunt laudantium nostrum error fugiat tempora temporibus ullam officia eaque facilis iste laborum maxime. Iste totam distinctio quasi eveniet sapiente eum itaque."
},
{
    title:"Holi Celebration",
    banner:"../images/gallery/i6.jpg",
    descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur numquam beatae aliquam repellendus? Nesciunt animi perferendis perspiciatis exercitationem laboriosam placeat porro, omnis magni doloremque ducimus suscipit veniam ad incidunt laudantium nostrum error fugiat tempora temporibus ullam officia eaque facilis iste laborum maxime. Iste totam distinctio quasi eveniet sapiente eum itaque."
},
{
    title:"Holi Celebration",
    banner:"../images/gallery/i6.jpg",
    descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur numquam beatae aliquam repellendus? Nesciunt animi perferendis perspiciatis exercitationem laboriosam placeat porro, omnis magni doloremque ducimus suscipit veniam ad incidunt laudantium nostrum error fugiat tempora temporibus ullam officia eaque facilis iste laborum maxime. Iste totam distinctio quasi eveniet sapiente eum itaque."
}
];
var aboutInfo={
    des:`SAP stands for SISTec Alumni Portal. SAP is the official Alumni Group of Sagar Group of Institution. The group is being formed on the occasion of the silver jubilee of SISTec as an initiative to connect all batches of SISTec across Engineering, MCA, Management and Pharmacy.

    It is a well-known fact that the best ambassadors of any educational institution are the students who graduate from there. The achievements of the Alumni are directly proportional to the brand value of any college. The activities of the Alumni Association will greatly contribute to the perception of the institution amongst the general public as well as the Industry.
    
    On the other hand, a well-organized Alumni Network is also extremely useful for the Alumni themselves. Frequent meetings of Alumni help build useful networks within and across industries which can prove to be the differentiating factor for executives at any level. Alumni Networks are usually the first ones an individual hits when he wants to explore opportunities within and outside his organization. Entrepreneurs get valuable connections and a chance to build lasting relationships.`,
    vision:"To build a foster a strong network of SISTec Alumni which would add value to the members, the institution and the society.",
    objectives:["To become a single forum for all Alumni Activities for SISTec Group which would add value to all its Registered Members.",
"To organize initiatives and activities as what the Association Leadership decides on a yearly basis.",
"To render help to the institute and the students in the best way possible",
"To be a positive voice influencing the higher educational system in particular and the society in general."
]
};
showAbout(aboutInfo);// showing about Informations.
showEvents(upcommmingEvent,pastEvents);// showing Events....
async function getAlumnies(str){
   const l= new Array(alumni.length);
   l.fill(false);
   const out=[];
   for(var i=0;i<alumni.length;i++){
       if(l[i]!=true && alumni[i].name.toLowerCase().includes(str.toLowerCase())){
           out[out.length]=alumni[i];
           l[i]=true;
       }
   }
   for(var i=0;i<alumni.length;i++){
       if(l[i]!=true && alumni[i].desc.toLowerCase().includes(str.toLowerCase())){
           out[out.length]=alumni[i];
           l[i]=true;
       }
   }
   return out;
}
const searchBtn=document.querySelector(".search-form-control");
searchBtn.addEventListener('keyup',async (e)=>{
    const out= await getAlumnies(e.target.value);
    showAlumnies(out);
})
function showAlumnies(inputs){
    const container=document.querySelector(".alumni-carasel");
    var text='';
    if(inputs.length==0){
          text=`<div class="no-record">
          <h4>No Records Found</h4>
          </div>`;
    }
    else{

        for(var i=0;i<inputs.length;i++){
            text+=`
            <div class="alumni">
            <div class="avatar"><img src="../images/alumni img/al-1.jpg" alt=""></div>
            <h3 class="name">${inputs[i].name}</h3>
            <p class="description">${inputs[i].desc}</p>
            </div>
            `;
        }
    }
    container.innerHTML=text;
}
function showEvents(u,p){
    var text=`<article class="event">
    <div class="banner"><img src="${u.banner}" alt=""></div>
    <div class="desc">
        <h3>${u.title}</h3>
        <p class="description">${u.descr}</p>
    </div>
</article>`;
   document.querySelector(".upcomming-events .show-events").innerHTML=text;
   text='';
   for(var i =0;i<p.length;i++){
       text+=`<article class="past-event">
       <h3 class="title">${p[i].title}</h3>
       <div class="banner"><img src="${p[i].banner}" alt=""></div>
       <p class="description">${p[i].descr}</p>
   </article>`;
   }
   document.querySelector(".past-events .show-past-events").innerHTML=text;
}
function showgallery(list){
    var text='';
    for(var i =0;i<list.length;i++){
            text+=`<div class="gal-img "><img src="${list[i]}" alt="img1"></div>`;
    }
    document.querySelector("#gallery .gal-main").innerHTML=text;
}
function showAbout(info){
    var text=`
    <h1 class="heading">About SAP</h1>
            <div class="descrip">
               ${info.des}
            </div>
            <h2>
                Vision
            </h2>
            <div class="descrip">
                ${info.vision}
            </div>
            <h2>
                Objectives
            </h2>
            <div class="descrip">
                <ol>
                `;
                for(var i=0;i<info.objectives.length;i++){
                    text+=`<li>${info.objectives[i]}</li>`;
                }
            text+=`</ol></div>`;
                document.querySelector("#about").innerHTML=text;
}
document.querySelector(".logo").addEventListener('click',()=>{
    window.location.href='https://Ankitchouhan9993.github.io/AMS-MAJOR-/blob/main/ams/public%20dashboard/index.htm';
})
document.querySelector("#reg-btn").addEventListener('click',()=>{
    window.location.href="https://Ankitchouhan9993.github.io/AMS-MAJOR-/tree/main/ams/register/html";
});

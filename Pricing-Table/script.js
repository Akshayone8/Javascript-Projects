const priceChange = document.getElementById('priceChange');
const priceCard1 = document.getElementById('priceCard1');
const price = document.getElementsByClassName("price");
const storageReq = document.getElementsByClassName('storageReq');
const userReq = document.getElementsByClassName('userReq');
const dataReq = document.getElementsByClassName('dataReq');
const spanEle = document.getElementsByTagName("span");
console.log(spanEle.length);

const intialObject = [
    {
        priceActual:"$20",
        storageActual:"500 GB Storage",
        userActual:"2 Users Allowed",
        dataActual:"Send Upto 3 GB"
    },
    {
        priceActual:"$24.99",
        storageActual:"1 TB Storage",
        userActual:"5 Users Allowed",
        dataActual:"Send Upto 10 GB"
    },
    {
        priceActual:"$39.99",
        storageActual:"2 TB Storage",
        userActual:"10 Users Allowed",
        dataActual:"Send Upto 20 GB"
    }
];

const ActualObject=[
{
    priceActual:"$255",
    storageActual:"1 TB Storage",
    userActual:"5 Users Allowed",
    dataActual:"Send Upto 10 GB"
},
{
    priceActual:"$355",
    storageActual:"5 TB Storage",
    userActual:"8 Users Allowed",
    dataActual:"Send Upto 13 GB"
},
{
    priceActual:"$555",
    storageActual:"10 TB Storage",
    userActual:"15 Users Allowed",
    dataActual:"Send Upto 30 GB"
}
];



priceChange.addEventListener('change',()=>{
    if(priceChange.checked){
        for(let i=0;i<price.length;i++){
            price[i].innerText=ActualObject[i].priceActual;
            storageReq[i].innerText = ActualObject[i].storageActual;
            userReq[i].innerText = ActualObject[i].userActual;
            dataReq[i].innerText = ActualObject[i].dataActual;
          }
          for(let i=0;i<spanEle.length;i++){
            spanEle[i].classList.toggle('showPlan');
            
          }
          
    }else{
        for(let i=0;i<price.length;i++){
        price[i].innerText=intialObject[i].priceActual;
        storageReq[i].innerText = intialObject[i].storageActual;
        userReq[i].innerText = intialObject[i].userActual;
        dataReq[i].innerText = intialObject[i].dataActual;
        }
        for(let i=0;i<spanEle.length;i++){
            spanEle[i].classList.toggle('showPlan');
            
          }
    }

})
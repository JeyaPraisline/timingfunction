function displaytime()
{
    let hours=new Date().getHours();    //20
    let minutes=new Date().getMinutes();   //13
    let seconds=new Date().getSeconds();

    let session="AM";

    if(hours>12)
    {
        session="PM";
        hours=hours-12;    //8  hours-=12
    }
    hours=hours>=10 ? hours : "0" +hours;
    minutes=minutes>=10 ? minutes :"0"+ minutes;
    seconds=seconds>=10 ? seconds : "0" + seconds;

    let res=`${hours}:${minutes}:${seconds}:${session}`;
    document.getElementById('time').innerHTML=res;

}

setInterval(displaytime,1000);
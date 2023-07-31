window.onload=function()
{
    var box=document.getElementById('box')
    var img=document.getElementsByClassName('img')
    var song=new Audio('asset/birthday.mp3')

    var cur=img.length
    var isClick=false
    var played=false

    init()

    function init()
    {
        if(document.body.clientHeight*0.45+50>document.body.clientWidth)
        {
            box.style.width=document.body.clientHeight*0.45-50+'px'
            box.style.height=document.body.clientHeight*0.45-50+'px'
        }
        else
        {
            box.style.width=document.body.clientHeight*0.45+'px'
            box.style.height=document.body.clientHeight*0.45+'px'
        }
    }

    for(var i=0;i<img.length;i++)
	{	
		img[i].index=i;

		img[i].onclick=function()
		{	
            if(isClick==false)
            {
                num=this.index;

                if(cur>=num+1)
                {
                    img[num].classList.remove('pre'+num)
                    img[num].classList.add('next'+num)
                    cur=num
                    
                    if(played==false)
                    {
                        playSong()
                        played=true
                    }
                }
                else
                {
                    img[num].classList.remove('next'+num)
                    img[num].classList.add('pre'+num)
                    cur=num+1
                }

                wait()
                isClick=true
            }
		}
	}

    function wait()
    {
        setTimeout(function(){isClick=false},2000);
    }

    function playSong()
    {
        setTimeout(function(){song.play()},1000);
    }
}
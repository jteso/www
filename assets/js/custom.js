+function(){for(var a=document.querySelectorAll("p, li"),b=0;b<a.length;b++){var c=a[b].innerHTML.trim().charAt(0),d=/「|『|“/;c.match(d)&&(a[b].className+=" leading-indent-fix")}}();
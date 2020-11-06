let x=new Array();
x['rpl']='Rekayasa perangkat lunak';
x['tkj']='Teknik komputer dan jaringan';

for(key in x){
    console.log(key.toUpperCase()+'\t='+x[key]);
}
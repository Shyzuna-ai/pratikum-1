let siswa=[
    ['1','adi','malang'],
    ['2','budi','sidoarjo'],
    ['3','dea','surabaya']
];

console.log('no \t nama siswa \t asa');
console.log('--- \t ---------- \t ----');
for(let i=0;i<siswa.length;i++){
    for(let j=0;j<siswa[i].length;j++){
        Process.stdout.write(siswa[i][j].toString());
        if(j<siswa[i].length-1){
            process.stdout.write('  \t  ');
        }
    }
    console.log();
}
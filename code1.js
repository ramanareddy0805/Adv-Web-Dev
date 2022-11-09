var x =[0,1,2,3,4,5,6,7,8,9]

var a = [x,x,x,x,x]
for(var i=0, j=9;i <= j;i++,j--){
    console.log('a[' + i + '][' + j + ']=' + a[i][j]);
    console.log('a['+i+']' + a[i]);
}
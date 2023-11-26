function sum(x, y)
{
    return x+y
}
console.log(sum(15,10));

// 2.Write a function that takes an integer minutes and converts it to seconds.

function time(a){
    
    return a*60
}
console.log(time(7))

// 3.Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function vijay(b){
    
    for(b=1;b<=10;b++){
        
        console.log(b)
    }
    return b
    
    
}
vijay(10)

// 4.Create a function that takes the age in years and returns the age in days.

function age(c){

return c*365 
}
console.log(age(21))

// 5.Create a function that takes voltage and current and returns the calculated power.

function power(voltage,current){

return 'power = '+(voltage*current) +'w'
}
console.log(power(25,300))


// 6.Write a function that returns the string "something" joined with a space " " and the given argument a.

function v(d){
    
    return 'something '+' '+d
    return 'something '+' '+d
}
console.log(v(20))
console.log(v('vijay'))


// 7.
function vijay(x,y){
    
    if(x==10 || y==10 || x+y==10){
        return true
      
    }
    else{
       return false
    
    }
   
}
console.log(vijay(5,5))

function hello() {
    return 'hello guys'
    
}

function hello2(a,b,v) {
    return a();
}

console.log(hello2(hello,2,5));


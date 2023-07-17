//,48,50,51 incomplete

1.  //write a script to print all array values in the console.
var a=[11,23,25,76,59];
 for(i=0;i<=a.length-1;i++){
     console.log(a[i])
 }

 2. //For the Given array: [23,34,54,0,4,7] print all the Array values using a for loop. Expected output: 23 34 54 0 4 7
 var a=[23,34,54,0,4,7];
  for(i=0;i<=a.length-1;i++){
      console.log(a[i])
  }

  3.//print all numbers in an array except the first element. Expected output: 34 54 0 4 7
  var a=[23,34,54,0,4,7];
   for(i=1;i<=a.length-1;i++){
       console.log(a[i])
   }

4.//Print all elements in an array except the last element Expected output: 23 34 54 0 4
var a=[23,34,54,0,4,7];
 for(i=0;i<=a.length-2;i++){
     console.log(a[i])
 }

5.//Print all the numbers from last index to first index Expected output: 7 4 0 54 34 23
var a=[23,34,54,0,4,7];
 for(i=a.length-1;i>=0;i--){
     console.log(a[i])
 }

6. //Print all the numbers from last index to first index except the first element Expected output: 4 0 54 34 23
var a=[23,34,54,0,4,7];
 for(i=a.length-2;i>=0;i--){
     console.log(a[i])
 }

7.//Print all the numbers from last index to first index except the last element Expected output: 7 4 0 54 34
var a=[23,34,54,0,4,7]; 
 for(i=a.length-1;i>0;i--){
     console.log(a[i])
 }

 8.//Print only the last 4 elements of an array. Expected output: 54 0 4 7
 var a=[23,34,54,0,4,7];
  for(i=a.length-4;i<=a.length-1;i++){
      console.log(a[i])
  }
 

9. //For the Given array: [23,34,54,10,4,7] print the minimum number in an Array. Expected output: 4
var a=[23,34,54,10,4,7];
var min=a[0];
 for(i=1;i<=a.length-1;i++){
     if(min>a[i])
         min=a[i]
 }
 console.log(min)


10.//For the Given array: [23,34,54,10,4,7] print the Maximum number in an array. Expected output: 54
var a=[23,34,54,10,4,7];
var max=a[0];
 for(i=1;i<=a.length-1;i++){
     if(max<a[i])
         max=a[i]
 }
 console.log(max)

 11.//For the Given array: [23,34,54,10,4,7] sum of all the numbers in an Array. Expected output: 132
 var a=[23,34,54,10,4,7];
 var sum=0;
  for(i=0;i<=a.length-1;i++){
      sum=sum+a[i]
  }
  console.log(sum)
 
12.//For the Given array: [23,34,54,10,4,7] Average of all the numbers in an Array. Expected output: 22
var a=[23,34,54,10,4,7];
var sum=0,avg;
 for(i=0;i<=a.length-1;i++){
     sum=sum+a[i]
 }
 avg=sum/a.length
 console.log(avg)

 13.//For the Given array: [23,34,54,10,4,7] print values that are greater than the given number.
 // Given number: 20, Expected output: 23,34,54
 var a=[23,34,54,10,4,7];
 var g=20,avg;
  for(i=0;i<=a.length-1;i++){
     if(a[i]>g)
        console.log(a[i])
      
  }

14.//For the Given array: [23,34,54,10,4,7] print all the even numbers in an Array. Expected output: 34,54,10,4
var a=[23,34,54,10,4,7];
 for(i=0;i<=a.length-1;i++){
    if(a[i]%2===0)
       console.log(a[i])  
 }
 
 15.//For the Given array: [23,34,54,10,4,7] print all the odd numbers in an Array. Expected output: 23,7
 var a=[23,34,54,10,4,7];
  for(i=0;i<=a.length-1;i++){
     if(a[i]%2===1)
        console.log(a[i])  
  }

16.//For the Given array: [23,-34,-54,10,-4,7] print all the positive numbers in an array. Expected output: 23,10,7
var a= [23,-34,-54,10,-4,7];
 for(i=0;i<=a.length-1;i++){
    if(a[i]>0)
       console.log(a[i])  
 }

 17.   //For the Given array: [23,34,54,10,4,7] search if the given number is there in an array or not.
 //Given number: 34, Expected output: true Given number: 26, Expected output: false
 var a= [23,34,54,10,4,7];
 var bool=false,g=26
  for(i=0;i<=a.length-1;i++){
     if(a[i]==g)
      bool=true        
  }
  console.log(bool)

18.//For the Given array: [23,34,54,10,34,7,23,10,34] print the total number of times an element found in the array.
// Given number: 23, Expected output: 2 Given number: 34, Expected output: 3 Given number: 10, Expected output: 2 
//Given number: 54, Expected output: 1
var a= [23,34,54,10,34,7,23,10,34];
var c=0,g=54;
 for(i=0;i<=a.length-1;i++){
    if(a[i]==g)
     c=c+1;       
 }
 console.log(c)

19.//For the Given array: [23,34,54,10,4,7] print index of a given element in an Array.
// Given number: 23, Expected output: 0 Given number: 34, Expected output: 1
// Given number: 10, Expected output: 3 Given number: 54, Expected output: 2
var a= [23,34,54,10,4,7];
var g=10;
 for(i=0;i<=a.length-1;i++){
    if(a[i]==g)
    console.log(i)       
 }

20.//For the Given array: [23,34,54,10,34,7,23,10,34] eliminate duplicates in a given array Expected output: 23,34,54,10,7
var a= [23,34,54,10,34,7,23,10,34];
var i,j=0,b=[];
b=a;

 for(i=0;i<=a.length-1;i++){
     for(j=i+1;j<=a.length-1;j++){
         if(b[i]==b[j]){
             delete b[j];
         }
         
     }
    
 }
 for(i=0;i<=a.length-1;i++){
     if(b[i]!=undefined)
         console.log(b[i])
 }

20.//For the Given array: [23,34,54,10,34,7,23,10,34] eliminate duplicates in a given array
// Expected output: 23,34,54,10,7
var s=[23,10,34,54,10,34,7,23,10,34]
console.log(s)
var r=[],k=0;
for(i=0;i<s.length;i++){
    var t=0
    for(j=0;j<i;j++){
        if(s[i]==s[j])
           t=1
    }
    if(t==0){
         r[k]=s[i]
         k++
    }        
}
console.log(r)




21.//a program to store an array into another array var ar = [23,34,54,10,4,7] var br = [ ] Expected output: br = [23,34,54,10,4,7]
var ar = [23,34,54,10,4,7];
var br=ar;
 console.log(br)

22.//Sort an array in ascending order. Given array: [23,34,54,10,4,7] Expected output: 4,7,10,23,34,54
var a = [23,34,54,10,4,7];
 var t;
for(i=0;i<a.length;i++){
     for(j=i+1;j<a.length;j++){
         if(a[i]>a[j]){
             t=a[i];
             a[i]=a[j];
             a[j]=t;
         }
     }
       console.log(a[i]);
 }   

  //Sort an array in ascending order. Given array: [23,34,54,10,4,7] Expected output: 4,7,10,23,34,54
  var a=[23,34,54,10,4,7];
  a.sort(function(a,b){
      if(a<b)
          return -1
      else    
          return 1
  })
  console.log(a)

 23.//Reduce the each element of the array by 25% and store in a separate array.
 var a = [23,34,54,10,4,7],b=[];
 for(i=0;i<a.length;i++){
      b[i]=0.75*a[i]
        console.log(b[i]);
  }      
  
24.//Store only even numbers of a given array in another array.
var a = [23,34,54,10,4,7],b=[],j=0;
for(i=0;i<a.length;i++){
     if(a[i]%2==0){
         b[j]=a[i];
         console.log(b[j])
         j++;
     }
 }      
 console.log(b)

 26//Eliminate duplicates from a array.
 a=[10,20,30,10,30,33,40,50],c=0,k=0,r=[]
 for(i=0;i<a.length;i++){
     c=0
     for(j=0;j<a.length;j++){
         if(a[i]==a[j])
             c++
     }
     if(c==1){
         r[k]=a[i];
         k++
     }

 }
console.log(r)

 27.//print only the perfect squares in an array
 var a = [23,36,54,25,4,7];
 for(i=0;i<a.length;i++){
      if(Number.isInteger(Math.sqrt(a[i])) == true )
         console.log(a[i]);
  } 

  28.//Print only the 2 digit numbers from an array
  var a = [23,136,54,25,4,227];
  for(i=0;i<a.length;i++){
       if(a[i]<100 && a[i]>9)
          console.log(a[i]);
   }

   29.//Print only multiples of 5 from an array
   var a = [23,135,5,251,70,227];
   for(i=0;i<a.length;i++){
        if(a[i]%5==0)
           console.log(a[i]);
    }      
   
30.//Print only multiples of 2 AND 3 from an array
var a = [12,136,54,251,60,227];
for(i=0;i<a.length;i++){
     if(a[i]%2==0 && a[i]%3==0)
        console.log(a[i]);
 }      

31.//Print only multiples of 3 OR 5 from an array
var a = [12,136,54,251,60,227];
for(i=0;i<a.length;i++){
     if(a[i]%2==0 || a[i]%3==0)
        console.log(a[i]);
 }      

32.//Increment 5% for all the salaries in a given array
var a = [1000,32000,30000,24000];
for(i=0;i<a.length;i++){
    a[i]=a[i]+ (a[i]*5/100)
 }  
 console.log(a) 

33.//For every basic salary present in the array, add 40% HRA, 92% DA, 10% Tax and display the final output
var a = [1000,32000,30000,24000];
for(i=0;i<a.length;i++){
    a[i]=a[i]+ (a[i]*40/100)+ (a[i]*92/100)+ (a[i]*10/100)
    
 }  
 console.log(a) 

 34. //For every salary, deduct 10% tax for salaries less than 50000 and deduct 12% tax for salaries more than 50000
 var a = [10000,50000,60000,54000,23000];
 console.log(a) 
 for(i=0;i<a.length;i++){
      if(a[i]<=50000)
          a[i]=a[i]-(a[i]*10/100);
      else    
          a[i]=a[i]-(a[i]*12/100);
 }
  console.log(a) 
 
35. //Print only those odd numbers in a given array which are divisible by 3.
var a = [54,89,33,65,78,15,34];
console.log(a) 
for(i=0;i<a.length;i++){
     if(a[i]%2===1 && a[i]%3===0)
     console.log(a[i])   
}
 
36.//Insert first 10 odd numbers in an empty array(for and while).
var a=[],n=1
for(i=0;i<10;n++){
     if(n%2==1){
         a[i]=n;
         i++
     }
}
console.log(a)

37.//Print the elements present in the second half of the array.
var a=[23,77,43,12,90,65];
l=parseInt(a.length/2);
for(i=l;i<a.length;i++){
 console.log(a[i])
}

38.//Print the greatest of all 2-digit numbers present in an array.
var a=[223,97,6,643,142,90,65,647,9,4357],b=[],i,j=0
for(i=0;i<a.length;i++){
  if(a[i]<100 && a[i]>9){
     b[j]=a[i];
     j++
  }
}
console.log(b);
var max=b[0]
for(i=1;i<b.length;i++){
     if(max<b[i])
         max=b[i];
}
console.log(max);

39.//Write a program to remove elements from an array which are not in the ascending order 
//Ex: Original array: [12,34,11,56,37,98,23,67,109,45] Output : [12,34,56,98,109]
var s=[12,34,11,56,37,98,23,67,109,45]
var r=[],k=1;min=s[0];
r[0]=s[0]
console.log(s)
for(i=1;i<s.length;i++){
         if(min<s[i]){
            r[k]=s[i]
            k++
            min=s[i]
    }
}
console.log(r)


40.//Write a program to sort the array based on the number of occurrences of elements 
//Ex: original array: [1,2,5,6,2,1,6,1,2,6,2,1,2]; After the logic: [5,6,6,6,1,1,1,1,2,2,2,2,2]; 
//5 occurred one time,6 three times,1 occurred 4 times, 2 occurred 5 times
//[1, 2, 5, 6, 2, 1, 6, 1, 2, 6, 2, 1, 2]    
// [4, 5, 1, 3, 5, 4, 3, 4, 5, 3, 5, 4, 5] occ
var a= [1,2,5,6,2,1,6,1,2,6,2,1,2], r=[],s=[],i,j,c,op=[];
console.log("given arr " +a)
for(i=0;i<a.length;i++){
 c=0;
     for(j=0; j<a.length; j++){
         if(a[i]==a[j])
             c=c+1;
     }
     r[i]=c
}
console.log("occ " +r);
var res=[]
for(i=0;i<a.length;i++){
    res[i]={
        num:a[i],
        occ:r[i]
    }
}
r=r.sort()
for(i=0;i<a.length;i++){
    count=0
    for(j=0; j<a.length; j++){
        if(r[i]==res[j]["occ"] && count==0){
            op[i]=res[j]["num"]
            count=1
        }
    }
}
console.log(op)


41,42
  //Write script to merge array as the values of ar in the first and values of br next
       // Expected output: [19,12,23,4,15,26,37,18,79,10];
       var ar = [19,12,23,4,15];
       var br = [26,37,18,79,10];
        console.log(ar.concat(br))
        console.log(br.concat(ar))
        console.log(br.concat(ar).sort())

43.//insert An Element Desired or Specific Position In An Array
var ar = [19,12,23,4,15];
 ar[1]=99;
 console.log(ar)

 44. //Remove Duplicates Items In An Array
 var a = [19,12,23,4,15,4,12,23,69],r=[],k=0,c;
 console.log(a)
  for(i=0;i<a.length;i++){
   c=0;
   for(j=0;j<i;j++){
       if(a[i]==a[j])
          c=1 
   }
   if(c==0){
       r[k]=a[i];
       k++
   }
  }
  console.log(r)

  45. //Delete Element From Array At Desired Or Specific Position
  var a = [19,12,23,4,15,4,12,23,69];
  console.log(a)
   a.splice(2,1)//deletes index 2
   console.log(a)

46.//Check String Is Palindrome Or Not Using For Loop
var s = "asfsa",r="";
for(i=s.length-1;i>=0;i--){
  r=r+s[i]
}
if(s==r)
   console.log("palindrome");
 else         
  console.log("not a palindrome");

47.//Convert All Input String Simultaneously Into Asterisk ( * )
var s="Sowjanya";
console.log(s.replaceAll(/[a-zA-Z]/g, "*"))

52.//Get the second largest element in an array.
var a=[11,66,22,6,0]
a=a.sort(function(a,b){
    return a - b
});
console.log(a)
console.log(a[1])

53.//Count the total number of even and odd elements in an array.
var a=[11,66,23,6,0,55,19,64,34];
console.log(a)
var e=0,od=0;
for(i=0;i<a.length;i++){
if(a[i]%2===0)
    e++;
 if(a[i]%2===1)
    od++;
}
console.log("evens: "+e)
console.log("odds: "+od)

56.//Insert an element in an array.
var a=[11,66,23,6,0,55,19,64,34];
console.log(a)
a[1]=100;//directly inserting
console.log(a)
    a.push(888)
    console.log(a)
a.unshift(555)
console.log(a)
a=a.slice(0,3).concat(111).concat(a.slice(3,a.length)) //adding at index 3
console.log(a)

59.//Print all unique elements in the array.
var a=[11,65,true,"s",11,"a",2,"a"]
for(i=0;i<a.length;i++){
    c=0;
    for(j=0;j<a.length;j++){
        if(a[i]==a[j])
            c++
    }
    if(c==1)
        console.log(a[i])
}

68.// Right rotate an array.
var a=[11,2,78,45,23,5];
var k=a.pop();
a.unshift(k)
 console.log(a)
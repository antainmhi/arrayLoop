
//create function
function go(){

    //create array
    var arr = [2, 5, 7, 9, 103, 88, 3, 77, 46, 1002, 798, 534, 88]; 
    //set variable to 1st array element
    var largest = arr[0];
   
    
    //for loop through array to find largest number
    for (i = 0; i < arr.length; i++){
        if (largest < arr[i]){
            largest = arr[i];

            
        }
        
            
    }
    //print largest number
    document.getElementById("main").innerHTML+=largest;
    



}

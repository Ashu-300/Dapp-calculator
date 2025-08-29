pragma solidity ^0.8.0;

contract calculator{
    function addNum( uint num1 , uint num2) public returns (uint){
        return num1+num2 ;
    }
    function subNum( uint num1 , uint num2) public returns (uint){
        return num1-num2 ;
    }
    function mulNum( uint num1 , uint num2) public returns (uint){
        return num1*num2 ;
    } 
    function divNum( uint num1 , uint num2) public returns (uint){
        require(num2>0);
        require(num1>num2);
        return num1/num2 ;
    }  

}
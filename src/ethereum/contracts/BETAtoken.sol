pragma solidity ^0.4.2;

contract BetaToken{

    string public name = "BEAT Token";
    string public symbol = "BEAT";
    string public standard = "BEAT Token v1.0";
    uint public totalSupply;

    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;
        
    modifier sufficientBalance(uint _value){
        require(balanceOf[msg.sender] >= _value, "Do not have enough BEATs");
        _;
    }
    
    event Transfer(
        address indexed _from,
        address indexed _to, 
        uint _value);
    
    event Approve(
        address indexed _owner,
        address indexed _spender,
        uint _value);
    

    constructor(uint _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }
}
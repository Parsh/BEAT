pragma solidity ^0.4.2;

contract BetaToken{

    string public name = "BEAT Token";
    string public symbol = "BEAT";
    string public standard = "BEAT Token v1.0";
    uint public totalSupply;

    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;
        
    constructor(uint _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }
}
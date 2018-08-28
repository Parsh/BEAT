pragma solidity ^0.4.2;
    
contract BEATtokenSale{
        
    address public admin;
    BEATtoken public tokenContract;
    uint public tokenPrice;
        
    constructor(BEATtoken _tokenContract, uint _tokenPrice) public {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }
                
}
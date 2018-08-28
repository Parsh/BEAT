pragma solidity ^0.4.2;
    
import "./BEATtoken.sol";

contract BEAT_ICO{
        
    address public admin;
    BEATtoken public tokenContract;
    uint public tokenPrice;
    
    modifier adminOnly(){
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }
        
    modifier hasTokenSupply(uint _numberOfTokens){
        require(tokenContract.balanceOf(this) >= _numberOfTokens, "ICO do not have enough tokens to supply");
        _;
    }
    constructor(BEATtoken _tokenContract, uint _tokenPrice) public {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }
        
}
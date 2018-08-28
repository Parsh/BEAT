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

    function mul(uint256 _a, uint256 _b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested. This is multiply fxn from SafeMath
        if (_a == 0) {
            return 0;
        }
        
        uint256 c = _a * _b;
        require(c / _a == _b);
        
        return c;
    }
        
    function buyTokens(uint _numberOfTokens) public hasTokenSupply(_numberOfTokens) payable {
           
        require(msg.value == mul(_numberOfTokens, tokenPrice), "Price paid is not equal");
        require(tokenContract.transfer(msg.sender, _numberOfTokens), "Transfer failed");
    }
        
}
pragma solidity ^0.4.11;

contract ReactExample {
    address private owner;
    string public you_awesome;
    string private secret;
    string private state;
    
    function ReactExample () public {
        owner = msg.sender;
        you_awesome = "You're awesome";
        secret = "secret data";
        state = "initial state";
    }
    
    function getSecret () public view returns (string) {
        return secret;
    }
    
    function getState () public view returns (string) {
        return state;    
    }
    
    function setState (string newState) public payable {
        state = newState;
    }
    
    function kill () public {
        require (msg.sender == owner);
        selfdestruct (owner);
    }
    
    function () public payable {
        revert ();
    }
}
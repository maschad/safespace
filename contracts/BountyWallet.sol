pragma solidity >=0.4.22 <0.7.0;

contract BountyWallet {

    // Total amount
    uint public total;

    // Address of the winner
    address payable public winner;

    // The name of the bounty
    string public name;

    // Informants
    address[] public informants;


    // Set to true at the end, disallows any change.
    // By default initialized to `false`.
    bool ended;

    struct Bounty {
        string name;
        address creator;
    }
    
    event NewBountyWallet(string name, uint total, address wallet);
    event BountyIncreased(uint amount);
    event BountyEnded(address winner, uint total);

    constructor(
        string memory _name,
        uint _total
    ) public {
        name = _name;
        total = _total;
        ended = false;
    }

    function recieveFunds() public payable {
        total += msg.value;
        emit BountyIncreased(total);
    }

    function recieveTip () public {
        informants.push(msg.sender);
    }

    function setWinner (address payable _winner) public {
        winner = _winner;
        bountyEnd();
    }

    function bountyEnd() public {
        require(!ended, "bounty has already been called.");

        // End the bounty
        ended = true;
        emit BountyEnded(winner, total);
        // Winner gets the money
        winner.transfer(total);
    }
}
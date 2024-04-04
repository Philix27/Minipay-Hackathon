// https://eips.ethereum.org/EIPS/eip-2021
// https://github.com/IoBuilders/payoutable-token (example)
// SPDX-License-Identifier: MIT
/*
An extension to the ERC-20 standard token that allows Token wallet owners to request payout from their wallet,
by calling the smart contract and attaching a payout instruction string.

Token wallet owners (or approved addresses) can order payout requests through blockchain.
This is done by calling the orderPayoutFrom or orderPayoutFrom methods,
which initiate the workflow for the token contract operator to either honor or reject the payout request.
In this case, payout instructions are provided when submitting the request, which are used by the operator to determine the destination of the funds.

In general, it is not advisable to place explicit routing instructions for the payouts on a verbatim basis on the blockchain,
and it is advised to use a private communication alternatives, such as private channels, encrypted storage or similar,
to do so (external to the blockchain ledger). Another (less desirable) possibility is to place these instructions on the instructions field in encrypted form.
*/

pragma solidity >=0.5.0 <0.8.0;

interface IPayoutable /* is ERC-20 */ {
    enum PayoutStatusCode {
        Nonexistent,
        Ordered,
        InProcess,
        FundsInSuspense,
        Executed,
        Rejected,
        Cancelled
    }
    function authorizePayoutOperator(address orderer) external returns (bool);
    function revokePayoutOperator(address orderer) external returns (bool);
    function orderPayout(string calldata operationId, uint256 value, string calldata instructions) external returns (bool);
    function orderPayoutFrom(string calldata operationId, address walletToBePaidOut, uint256 value, string calldata instructions)
                                                                                                                external returns (bool);
    function cancelPayout(string calldata operationId) external returns (bool);
    function processPayout(string calldata operationId) external returns (bool);
    function putFundsInSuspenseInPayout(string calldata operationId) external returns (bool);
    function executePayout(string calldata operationId) external returns (bool);
    function rejectPayout(string calldata operationId, string calldata reason) external returns (bool);

    function isPayoutOperatorFor(address walletToDebit, address orderer) external view returns (bool);
    function retrievePayoutData(string calldata operationId) external view
                    returns (address walletToDebit, uint256 value, string memory instructions, PayoutStatusCode status);

    event PayoutOrdered(address indexed orderer, string indexed operationId, address indexed walletToDebit, uint256 value, string instructions);
    event PayoutInProcess(address indexed orderer, string indexed operationId);
    event PayoutFundsInSuspense(address indexed orderer, string indexed operationId);
    event PayoutExecuted(address indexed orderer, string indexed operationId);
    event PayoutRejected(address indexed orderer, string indexed operationId, string reason);
    event PayoutCancelled(address indexed orderer, string indexed operationId);
    event PayoutOperatorAuthorized(address indexed walletToBePaidOut, address indexed orderer);
    event PayoutOperatorRevoked(address indexed walletToBePaidOut, address indexed orderer);
}
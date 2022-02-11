// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import {EventTickets} from "./EventTickets.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/* The EventTickets contract keeps track of the details and ticket sales of one event. */

contract DefaultEventTickets is EventTickets, Ownable{
    /*
        Create a public state variable called owner.
        Use the appropriate keyword to create an associated getter function.
        Use the appropriate keyword to allow ether transfers.
     */

    //address payable public owner;

    // TODO: refactor: Ticket price sea variable
    //uint256 TICKET_PRICE = 100 wei;


    /*
        Create a struct called "Event".
        The struct has 6 fields: description, website (URL), totalTickets, sales, buyers, and isOpen.
        Choose the appropriate variable type for each field.
        The "buyers" field should keep track of addresses and how many tickets each buyer purchases.
    */

    struct Event {
        string description;
        string website;
        uint256 totalTickets;
        uint256 sales;
        uint256 ticketPrice;
        mapping(address => uint256) buyers;
        bool isOpen;
    }

    Event myEvent;

    /*
        Define 3 logging events.
        LogBuyTickets should provide information about the purchaser and the number of tickets purchased.
        LogGetRefund should provide information about the refund requester and the number of tickets refunded.
        LogEndSale should provide infromation about the contract owner and the balance transferred to them.
    */

    event LogBuyTickets(address buyer, uint256 numTickets);
    event LogGetRefund(address accountRefunded, uint256 numTickets);
    event LogEndSale(address owner, uint256 balance);

    /*
        Create a modifier that throws an error if the msg.sender is not the owner.
        TODO: refactoring; use openzeppelin Ownable contract.
        (https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable)
        (https://docs.openzeppelin.com/learn/developing-smart-contracts#importing_openzeppelin_contracts)
    */
    /*
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
    */

    /*
        Define a constructor.
        The constructor takes 3 arguments, the description, the URL and the number of tickets for sale.
        Set the owner to the creator of the contract.
        Set the appropriate myEvent details.
    */

    constructor(
        string memory _description,
        string memory _url,
        uint256 _totalTickets,
        uint256 _ticketPrice
    ) {
        transferOwnership(msg.sender);
        myEvent.description = _description;
        myEvent.website = _url;
        myEvent.totalTickets = _totalTickets;
        myEvent.ticketPrice = _ticketPrice;
        myEvent.isOpen = true;
    }

    /*
        Define a function called readEvent() that returns the event details.
        This function does not modify state, add the appropriate keyword.
        The returned details should be called description, website, uint totalTickets, uint sales, bool isOpen in that order.
    */
    function readEvent()
        external
        view
        returns (
            string memory description,
            string memory website,
            uint256 totalTickets,
            uint256 sales,
            bool isOpen
        )
    {
        return (
            myEvent.description,
            myEvent.website,
            myEvent.totalTickets,
            myEvent.sales,
            myEvent.isOpen
        );
    }

    /*
        Define a function called getBuyerTicketCount().
        This function takes 1 argument, an address and
        returns the number of tickets that address has purchased.
    */

    function getBuyerTicketCount(address buyer)
        external
        view
        returns (uint256)
    {
        return myEvent.buyers[buyer];
    }

    /*
        Defina una función llamada buyTickets().
        Esta función permite que alguien compre entradas para el evento.
        Esta función toma un argumento, el número de entradas a comprar.
        Esta función puede aceptar Ether.
        Asegúrese de comprobar:
            - Que el evento esOpen
            - Que el valor de la transacción es suficiente para el número de entradas compradas
            - Que hay suficientes entradas en stock
        Entonces
            - añadir el número adecuado de entradas al recuento de compradores
            - contabilizar la compra en el número restante de entradas disponibles
            - reembolsar cualquier valor sobrante enviado con la transacción
            - emitir el evento correspondiente
    */
    function buyTickets(uint256 quantity) external payable {
        require(myEvent.isOpen == true, "Event already closed");
        require(msg.value >= (quantity * myEvent.ticketPrice), "Funds not enough");
        require(
            quantity <= (myEvent.totalTickets - myEvent.sales),
            "Out of stock"
        );

        myEvent.buyers[msg.sender] += quantity;
        myEvent.sales += quantity;
        myEvent.totalTickets -= quantity;

        uint256 totalPrice = quantity * myEvent.ticketPrice;
        if (msg.value > totalPrice) {
            payable(msg.sender).transfer(msg.value - totalPrice);
        }

        emit LogBuyTickets(msg.sender, quantity);
    }

    /*
        Definir una función llamada getRefund().
        Esta función permite que alguien obtenga un reembolso de las entradas de la cuenta que compró.
        TODO:
            - Comprobar que el solicitante ha comprado entradas.
            - Asegúrese de que las entradas reembolsadas vuelvan a la reserva de entradas disponibles.
            - Transfiera el importe correspondiente al solicitante del reembolso.
            - Emitir el evento correspondiente.
    */

    function getRefund(uint256 toRefund) external{
        // TODO
        require(myEvent.buyers[msg.sender] > 0,"El usuario no ha comprado entradas");//Comprobar que el solicitante ha comprado entradas.
        require(toRefund > 0, "La cantidad de tickets debe ser mayor a 0");
        require(myEvent.buyers[msg.sender] >= toRefund, "No puede devolver esa cantidad de entradas");
        myEvent.totalTickets += toRefund;//Asegúrese de que las entradas reembolsadas vuelvan a la reserva de entradas disponibles.
        myEvent.sales -= toRefund;
        uint256 aDevolver = myEvent.ticketPrice * toRefund;//valor ticket * cantidad de entradas reembolsadas
        payable(msg.sender).transfer(aDevolver);//Transfiera el importe correspondiente al solicitante del reembolso.
        emit LogGetRefund(msg.sender,aDevolver);//Emitir el evento correspondiente.
    }

    /*
        Defina una función llamada endSale().
        Esta función cerrará la venta de entradas.
        Esta función sólo puede ser llamada por el propietario del contrato.
        TODO:
            - cerrar el evento
            - transferir el saldo del contrato al propietario
            - emitir el evento correspondiente
    */

    function endSale() external override onlyOwner {
        //require(owner() == msg.sender,"Debe ser el propietario del contrato");
        myEvent.isOpen = false;//Esta función cerrará la venta de entradas.
        uint256 saldoContrato = myEvent.ticketPrice*myEvent.sales; //valor del ticket * cantidad de entradas vendidas
        payable(owner()).transfer(saldoContrato);//transferir el saldo del contrato al propietario
        emit LogEndSale(owner(),saldoContrato);//emitir el evento correspondiente
    }
}

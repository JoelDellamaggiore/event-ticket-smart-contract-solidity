import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { DefaultEventTickets } from "../typechain";

describe("DefaultEventTickets Contract", function () {
    let DefaultEventTickets;
    let defaultEventTickets: DefaultEventTickets;
    let owner: SignerWithAddress;
    let addr1: SignerWithAddress;
    let addr2: SignerWithAddress;
    let addrs: SignerWithAddress[];

    beforeEach(async () => {
        DefaultEventTickets = await ethers.getContractFactory("DefaultEventTickets");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        defaultEventTickets = (await DefaultEventTickets.deploy('cvirtual','cvirtual.frvm.utn.edu.ar',100,1)) as DefaultEventTickets;
    });

    it('deberia deployar', () => {
        expect(defaultEventTickets).to.be.not.null;
    })
    it('debe establecer dueño ', async () => {
        expect(await defaultEventTickets.owner()).to.equal(owner.address);
    })

    it('debe comprar un ticket', async () => {
        await defaultEventTickets.connect(addr1).buyTickets(1, {value:150});
        expect(await defaultEventTickets.getBuyerTicketCount(addr1.address)).to.equal(1);
    })
    it('no debe comprar un ticket si evento esta cerrado', async () => {
        await defaultEventTickets.connect(owner).endSale();
        await expect(defaultEventTickets.connect(addr1).buyTickets(1, {value: 10})).to.be.revertedWith('Event already closed');
    })

    it('no debe comprar un ticket si no tiene fondos', async () => {
        await expect(defaultEventTickets.connect(addr1).buyTickets(1, {value: 0})).to.be.revertedWith('Funds not enough');
    })

    it('no debe comprar un ticket si no hay suficientes', async () => {
        await defaultEventTickets.connect(addr1).buyTickets(10, {value:150});
        await expect(defaultEventTickets.connect(addr2).buyTickets(99, {value: 110})).to.be.revertedWith('Out of stock');
    })

    it('debe poder devolver el ticket', async () => {
        await defaultEventTickets.connect(addr1).buyTickets(10, {value:150});
        expect(await defaultEventTickets.connect(addr1).getRefund(1));
    })
    it('no debe poder devolver el ticket si no tiene esa cantidad', async () => {
        await defaultEventTickets.connect(addr1).buyTickets(2, {value:150});
        await expect(defaultEventTickets.connect(addr1).getRefund(10)).to.be.revertedWith('No puede devolver esa cantidad de entradas');;
    })
    it('no debe poder devolver el ticket si no ha comprado', async () => {
        await defaultEventTickets.connect(addr1).buyTickets(0, {value:150});
        await expect(defaultEventTickets.connect(addr1).getRefund(1)).to.be.revertedWith('El usuario no ha comprado entradas');;
    })
    it('no debe poder devolver un valor menor a 0 tickets', async () => {
        await defaultEventTickets.connect(addr1).buyTickets(1, {value:150});
        await expect(defaultEventTickets.connect(addr1).getRefund(0)).to.be.revertedWith('La cantidad de tickets debe ser mayor a 0');;
    })
    it('no debe poder cerrar la venta de entradas si no es el propietario', async () => {
        await expect(defaultEventTickets.connect(addr1).endSale()).to.be.revertedWith('Ownable: caller is not the owner');;
    })


});
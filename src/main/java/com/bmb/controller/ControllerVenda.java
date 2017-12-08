/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the edito
 */
package com.bmb.controller;

import com.bmb.dao.DaoItemVenda;
import com.bmb.dao.DaoVenda;
import com.bmb.model.Cliente;
import com.bmb.model.ItemVenda;
import com.bmb.model.Venda;
import java.util.ArrayList;

/**
 *
 * @author iago.cguimaraes
 */
public class ControllerVenda {

    DaoVenda daoVenda = new DaoVenda();
    DaoItemVenda daoItemVenda = new DaoItemVenda();

    public Venda cadastrarVenda(Venda venda) throws Exception {
        try {

            if (venda.getFormaPagamento().getIdFormaPagamento() == 0) {
                throw new Exception("forma de pagamento inválida");
            }

            if (venda.getCliente().getIdCliente() == 0) {
                throw new Exception("cliente inválido");
            }

            if (venda.getEndereco().getIdEndereco() == 0) {
                throw new Exception("endereço inválido");
            }

            if (venda.getItems().size() == 0) {
                throw new Exception("venda sem itens");
            }

            venda = daoVenda.cadastrar(venda);
            
            for (int i = 0; i < venda.getItems().size(); i++) {
                int qtd = daoVenda.cadastrar(venda.getItems().get(i).getProduto().getIdProduto());
                if(qtd < venda.getItems().get(i).getQuantidade()){
                    throw new Exception("Quantidade inválida" + qtd + " Produto: " + venda.getItems().get(i).getProduto().getProduto());
                }
            }
            
            for (int i = 0; i < venda.getItems().size(); i++) {
                ItemVenda itemVenda = venda.getItems().get(i);
                itemVenda = daoItemVenda.cadastrar(itemVenda, venda.getIdVenda());
                venda.getItems().set(i, itemVenda);
            }
            return venda;
        } catch (Exception e) {
            throw e;
        }
    }
    
    public ArrayList<Venda> obter(Cliente cliente) throws Exception{
        try{
            return daoVenda.obterPorCliente(cliente.getIdCliente());
        }
        catch(Exception e){
            throw e;
        }
    }
    
}

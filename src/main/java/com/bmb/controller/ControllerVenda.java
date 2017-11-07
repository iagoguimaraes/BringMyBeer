/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.controller;

import com.bmb.dao.DaoItemVenda;
import com.bmb.dao.DaoVenda;
import com.bmb.model.ItemVenda;
import com.bmb.model.Venda;

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

            venda = daoVenda.cadastrarVenda(venda);
            for (int i = 0; i < venda.getItems().size(); i++) {
                ItemVenda itemVenda = venda.getItems().get(i);
                itemVenda = daoItemVenda.cadastrarItemVenda(itemVenda, venda.getIdVenda());
                venda.getItems().set(i, itemVenda);
            }
            return venda;
        } catch (Exception e) {
            throw e;
        }
    }
}

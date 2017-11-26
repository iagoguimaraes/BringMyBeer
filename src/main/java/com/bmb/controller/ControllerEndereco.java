/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor
 */
package com.bmb.controller;

import com.bmb.dao.DaoEndereco;
import com.bmb.model.Endereco;
import com.bmb.model.Cliente;

/**
 *
 * @author iago.cguimaraes
 */
public class ControllerEndereco {

    DaoEndereco daoEndereco = new DaoEndereco();

    public Endereco cadastrar(Cliente cliente, Endereco endereco) throws Exception {
        try {
            if (cliente.getIdCliente() == 0) {
                throw new Exception("Cliente inválido");
            }
            if (endereco.getCep().isEmpty() || endereco.getCep() == null) {
                throw new Exception("CEP inválido");
            }
            if (endereco.getNumero() == 0) {
                throw new Exception("Número inválido");
            }

            return daoEndereco.cadastrar(endereco, cliente.getIdCliente());
        } catch (Exception e) {
            throw e;
        }
    }

    public void alterar(Endereco endereco) throws Exception {
        try {
            if (endereco.getCep().isEmpty() || endereco.getCep() == null) {
                throw new Exception("CEP inválido");
            }
            if (endereco.getNumero() == 0) {
                throw new Exception("Número inválido");
            }

            daoEndereco.alterar(endereco);
        } catch (Exception e) {
            throw e;
        }
    }
    
    public void remover(Endereco endereco) throws Exception{
        try{
            daoEndereco.remover(endereco.getIdEndereco());
        } catch(Exception e){
            throw e;
        }
    }

}

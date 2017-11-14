/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.controller;

import com.bmb.dao.DaoCliente;
import com.bmb.model.Cliente;

/**
 *
 * @author iago.cguimaraes
 */
public class ControllerCliente {

    DaoCliente daoCliente = new DaoCliente();

    public Cliente logar(String email, String senha) throws Exception {
        try {
            Cliente cliente = daoCliente.obter(email, senha);

            if (cliente.getIdCliente() == 0) {
                throw new Exception("E-mail e/ou senha incorreto.");
            }

            return cliente;
        } catch (Exception e) {
            throw e;
        }
    }
    
    public Cliente cadastrar(Cliente cliente) throws Exception{
        try{
            if(cliente.getCpf().isEmpty() || cliente.getCpf() == null){
                throw new Exception("CPF não informado");
            }
            if(cliente.getNome().isEmpty() || cliente.getNome() == null){
                throw new Exception("Nome não informado");
            }
            if(cliente.getEmail().isEmpty() || cliente.getEmail() == null){
                throw new Exception("Email não informado");
            }
            
            return daoCliente.cadastrar(cliente);
        }catch(Exception e){
            throw e;
        }
    }
    
        public void alterar(Cliente cliente) throws Exception{
        try{
            if(cliente.getCpf().isEmpty() || cliente.getCpf() == null){
                throw new Exception("CPF não informado");
            }
            if(cliente.getNome().isEmpty() || cliente.getNome() == null){
                throw new Exception("Nome não informado");
            }
            if(cliente.getEmail().isEmpty() || cliente.getEmail() == null){
                throw new Exception("Email não informado");
            }
            
            daoCliente.alterar(cliente);
        }catch(Exception e){
            throw e;
        }
    }
    
}

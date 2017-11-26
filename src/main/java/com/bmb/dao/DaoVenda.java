/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import com.bmb.model.Venda;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author iago.cguimaraes
 */
public class DaoVenda {
    
    DaoItemVenda daoItemVenda = new DaoItemVenda();
    DaoFormaPagamento daoFormaPagamento = new DaoFormaPagamento();
    DaoCliente daoCliente = new DaoCliente();
    DaoEndereco daoEndereco = new DaoEndereco();

    public Venda cadastrar(Venda venda) throws Exception {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "call cadastrar_venda(?,?,?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setInt(1, venda.getCliente().getIdCliente());
            stmt.setInt(2, venda.getFormaPagamento().getIdFormaPagamento());
            stmt.setInt(3, venda.getEndereco().getIdEndereco());

            ResultSet rs = stmt.executeQuery();
            rs.last();
            venda.setIdVenda(rs.getInt(1));

            stmt.close();
            conn.close();

            return venda;

        } catch (Exception e) {
            throw e;
        }
    }
    
        public Venda obter(int idVenda) throws Exception {
        try {
            Venda venda = new Venda();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_venda_by_id(?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setInt(1, idVenda);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                venda = new Venda(
                        rs.getInt("id_venda"),
                        rs.getDate("data_venda"),
                        rs.getBoolean("confirmado"),
                        rs.getBoolean("cancelado"),
                        daoItemVenda.obter(rs.getInt("id_venda")),
                        daoFormaPagamento.obter(rs.getInt("id_forma_pagamento")),
                        daoCliente.obter(rs.getInt("id_cliente")),
                        daoEndereco.obter(rs.getInt("id_endereco")));
            }
            stmt.close();
            conn.close();

            return venda;
        } catch (Exception e) {
            throw e;
        }
    }

    public ArrayList<Venda> obterPorCliente(int idCliente) throws Exception {
        try {
            ArrayList<Venda> vendas = new ArrayList<Venda>();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_vendas_by_cliente(?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setInt(1, idCliente);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                vendas.add(new Venda(
                        rs.getInt("id_venda"),
                        rs.getDate("data_venda"),
                        rs.getBoolean("confirmado"),
                        rs.getBoolean("cancelado"),
                        daoItemVenda.obter(rs.getInt("id_venda")),
                        daoFormaPagamento.obter(rs.getInt("id_forma_pagamento")),
                        //daoCliente.obter(rs.getInt("id_cliente")),
                        null,
                        daoEndereco.obter(rs.getInt("id_endereco"))));
            }
            stmt.close();
            conn.close();

            return vendas;
        } catch (Exception e) {
            throw e;
        }
    }

}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import com.bmb.model.Venda;
import java.sql.Statement;

/**
 *
 * @author iago.cguimaraes
 */
public class DaoVenda {

    public Venda cadastrarVenda(Venda venda) throws Exception {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "INSERT INTO venda(data,confirmado,cancelado,id_cliente,id_forma_pagamento,id_endereco) VALUES (now(),0,0,?,?,?)";
            PreparedStatement stmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            stmt.setInt(1, venda.getCliente().getIdCliente());
            stmt.setInt(2, venda.getFormaPagamento().getIdFormaPagamento());
            stmt.setInt(3, venda.getEndereco().getIdEndereco());

            int id = stmt.executeUpdate();

            venda.setIdVenda(id);

            stmt.close();
            conn.close();

            return venda;

        } catch (Exception e) {
            throw e;
        }
    }
}

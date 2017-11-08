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

/**
 *
 * @author iago.cguimaraes
 */
public class DaoVenda {

    public Venda cadastrarVenda(Venda venda) throws Exception {
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
}

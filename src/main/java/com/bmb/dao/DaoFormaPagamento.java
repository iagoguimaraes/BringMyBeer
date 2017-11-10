/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import com.bmb.model.FormaPagamento;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 *
 * @author iago.cguimaraes
 */
public class DaoFormaPagamento {
        public FormaPagamento obter(int idFormaPagamento) throws Exception {
        try {
            FormaPagamento venda = new FormaPagamento();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_forma_pagamento_by_id(?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setInt(1, idFormaPagamento);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                venda = new FormaPagamento(
                        rs.getInt("id_forma_pagamento"),
                        rs.getString("forma_pagamento"));
            }
            stmt.close();
            conn.close();

            return venda;
        } catch (Exception e) {
            throw e;
        }
    }
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import com.bmb.model.ItemVenda;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author iago.cguimaraes
 */
public class DaoItemVenda {

    public ItemVenda cadastrarItemVenda(ItemVenda itemVenda, int idVenda) throws Exception {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "INSERT INTO item_venda(quantidade,preco,id_venda,id_produto) VALUES (?,?,?,?)";
            PreparedStatement stmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            stmt.setInt(1, itemVenda.getQuantidade());
            stmt.setDouble(2, itemVenda.getProduto().getPreco());
            stmt.setInt(3, idVenda);
            stmt.setInt(4, itemVenda.getProduto().getIdProduto());

            int id = stmt.executeUpdate();

            itemVenda.setIdItemVenda(id);

            stmt.close();
            conn.close();

            return itemVenda;

        } catch (Exception e) {
            throw e;
        }
    }
}

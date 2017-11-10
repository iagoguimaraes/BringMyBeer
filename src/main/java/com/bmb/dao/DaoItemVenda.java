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
import java.util.ArrayList;

/**
 *
 * @author iago.cguimaraes
 */
public class DaoItemVenda {

    private DaoProduto daoProduto = new DaoProduto();
    
    public ItemVenda cadastrar(ItemVenda itemVenda, int idVenda) throws Exception {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "call cadastrar_item_venda(?,?,?,?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setInt(1, itemVenda.getQuantidade());
            stmt.setDouble(2, itemVenda.getProduto().getPreco());
            stmt.setInt(3, idVenda);
            stmt.setInt(4, itemVenda.getProduto().getIdProduto());

            ResultSet rs = stmt.executeQuery();
            rs.last();
            itemVenda.setIdItemVenda(rs.getInt(1));

            stmt.close();
            conn.close();

            return itemVenda;

        } catch (Exception e) {
            throw e;
        }
    }
    
    
    public ArrayList<ItemVenda> obter(int idVenda) throws Exception {
        try {
            ArrayList<ItemVenda> itemsVenda = new ArrayList<ItemVenda>();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_item_venda_by_venda(?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setInt(1, idVenda);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                itemsVenda.add(new ItemVenda(
                        rs.getInt("id_venda"),
                        rs.getInt("quantidade"),
                        rs.getDouble("preco"),
                        daoProduto.obter(rs.getInt("id_produto"))));
            }
            stmt.close();
            conn.close();

            return itemsVenda;
        } catch (Exception e) {
            throw e;
        }
    }
    
}

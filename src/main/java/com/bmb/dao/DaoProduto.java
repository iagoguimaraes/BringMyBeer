/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import com.bmb.model.Produto;
import com.bmb.model.Tipo;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author luis.hlsousa
 */
public class DaoProduto {

    public static void cadastrarProduto(Produto produto) {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "INSERT INTO produto(produto) VALUES (?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, produto.getProduto());
            stmt.execute();
            stmt.close();
            conn.close();

        } catch (Exception e) {
            System.out.println("Não foi possível cadastrar o produto");
        }
    }

    public static void alterarProduto(Produto produto) {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "UPDATE produto SET produto = ? WHERE id_produto = ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, produto.getProduto());
            stmt.setInt(2, produto.getIdProduto());
            stmt.execute();
            stmt.close();
            conn.close();
        } catch (Exception e) {
            System.out.println("Não foi possível alterar o produto");
        }
    }

    public static Produto obter(int idProduto) throws Exception {
        try {
            Produto produto = new Produto();
            Connection conn = SQLConnection.getConexao();
            String sql = "SELECT * FROM produto WHERE id_produto = ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setInt(1, idProduto);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                produto = new Produto(
                        rs.getInt("id_produto"),
                        rs.getString("produto"));
            }
            stmt.close();
            conn.close();

            return produto;
        } catch (Exception e) {
            throw e;
        }
    }

    public static List<Produto> obter() throws Exception {
        try {
            ArrayList<Produto> produtos = new ArrayList<Produto>();
            Connection conn = SQLConnection.getConexao();
            String sql = "SELECT * FROM produto";
            PreparedStatement stmt = conn.prepareStatement(sql);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                produtos.add(new Produto(
                        rs.getInt("id_produto"),
                        rs.getString("produto")));
            }
            stmt.close();
            conn.close();

            return produtos;
        } catch (Exception e) {
            throw e;
        }
    }

    public static void deletarProduto(int idProduto){
        try{
            Connection conn = SQLConnection.getConexao();
            String sql = "DELETE FROM produto WHERE id_produto = ?" ;
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setInt(1, idProduto);
            stmt.close();
            conn.close();
        }catch(Exception e){
            
        }
    }
}

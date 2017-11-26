/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import com.bmb.model.Produto;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author luis.hlsousa
 */
public class DaoProduto {

    DaoTipo daoTipo = new DaoTipo();
    DaoMarca daoMarca = new DaoMarca();
    DaoFoto daoFoto = new DaoFoto();

    public void cadastrarProduto(Produto produto) throws Exception {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "INSERT INTO produto(produto) VALUES (?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(2, produto.getProduto());
            stmt.setDouble(3, produto.getPreco());
            stmt.setString(4, produto.getDescricao());
            stmt.setString(5, "now()");
            stmt.setInt(6, produto.isAtivo() ? 1 : 0);
            stmt.setInt(7, produto.getMarca().getIdMarca());
            stmt.setInt(8, produto.getFoto().getIdFoto());
            stmt.setInt(9, produto.getTipo().getIdTipo());
            stmt.execute();
            stmt.close();
            conn.close();

        } catch (Exception e) {
            throw e;
        }
    }

    public void alterarProduto(Produto produto) throws Exception {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "UPDATE produto SET produto = ? WHERE id_produto = ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(2, produto.getProduto());
            stmt.setDouble(3, produto.getPreco());
            stmt.setString(4, produto.getDescricao());
            stmt.setDate(5, (Date) produto.getDataCadastro());
            stmt.setInt(6, produto.isAtivo() ? 1 : 0);
            stmt.setInt(7, produto.getMarca().getIdMarca());
            stmt.setInt(8, produto.getFoto().getIdFoto());
            stmt.setInt(9, produto.getTipo().getIdTipo());
            stmt.execute();
            stmt.close();
            conn.close();
        } catch (Exception e) {
            throw e;
        }
    }

    public Produto obter(int idProduto) throws Exception {
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
                        rs.getString("produto"),
                        rs.getDouble("preco"),
                        rs.getString("descricao"),
                        rs.getDate("data_cadastro"),
                        rs.getBoolean("ativo"),
                        daoTipo.obter(rs.getInt("id_tipo_produto")),
                        daoMarca.obter(rs.getInt("id_marca")),
                        daoFoto.obter(rs.getInt("id_foto")));
            }
            stmt.close();
            conn.close();

            return produto;
        } catch (Exception e) {
            throw e;
        }
    }

    public ArrayList<Produto> obter() throws Exception {
        try {
            ArrayList<Produto> produtos = new ArrayList<Produto>();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_produto()";
            PreparedStatement stmt = conn.prepareStatement(sql);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                produtos.add(new Produto(
                        rs.getInt("id_produto"),
                        rs.getString("produto"),
                        rs.getDouble("preco"),
                        rs.getString("descricao"),
                        rs.getDate("data_cadastro"),
                        rs.getBoolean("ativo"),
                        daoTipo.obter(rs.getInt("id_tipo_produto")),
                        daoMarca.obter(rs.getInt("id_marca")),
                        daoFoto.obter(rs.getInt("id_foto"))
                ));
            }
            stmt.close();
            conn.close();

            return produtos;
        } catch (Exception e) {
            throw e;
        }
    }
    
    public ArrayList<Produto> obterTipo(String tipo) throws Exception {
        try {
            ArrayList<Produto> produtos = new ArrayList<Produto>();
            Connection conn = SQLConnection.getConexao();
            String sql = "select * from produto where id_tipo_produto="+tipo;
            PreparedStatement stmt = conn.prepareStatement(sql);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                produtos.add(new Produto(
                        rs.getInt("id_produto"),
                        rs.getString("produto"),
                        rs.getDouble("preco"),
                        rs.getString("descricao"),
                        rs.getDate("data_cadastro"),
                        rs.getBoolean("ativo"),
                        daoTipo.obter(rs.getInt("id_tipo_produto")),
                        daoMarca.obter(rs.getInt("id_marca")),
                        daoFoto.obter(rs.getInt("id_foto"))
                ));
            }
            stmt.close();
            conn.close();

            return produtos;
        } catch (Exception e) {
            throw e;
        }
    }

    public ArrayList<Produto> obter(String produto, String tipo, String marca, double vlrmin, double vlrmax) throws Exception {
        try {
            ArrayList<Produto> produtos = new ArrayList<Produto>();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_produto_by_pesquisa(?,?,?,?,?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setString(1, produto);
            stmt.setString(2, tipo);
            stmt.setString(3, marca);
            stmt.setDouble(4, vlrmin);
            stmt.setDouble(5, vlrmax);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                produtos.add(new Produto(
                        rs.getInt("id_produto"),
                        rs.getString("produto"),
                        rs.getDouble("preco"),
                        rs.getString("descricao"),
                        rs.getDate("data_cadastro"),
                        rs.getBoolean("ativo"),
                        daoTipo.obter(rs.getInt("id_tipo_produto")),
                        daoMarca.obter(rs.getInt("id_marca")),
                        daoFoto.obter(rs.getInt("id_foto"))
                ));
            }
            stmt.close();
            conn.close();

            return produtos;
        } catch (Exception e) {
            throw e;
        }
    }

    public ArrayList<Produto> obterDescontos() throws Exception {
        try {
            ArrayList<Produto> produtos = new ArrayList<Produto>();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_produto_desconto()";
            PreparedStatement stmt = conn.prepareStatement(sql);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                produtos.add(new Produto(
                        rs.getInt("id_produto"),
                        rs.getString("produto"),
                        rs.getDouble("preco"),
                        rs.getString("descricao"),
                        rs.getDate("data_cadastro"),
                        rs.getBoolean("ativo"),
                        daoTipo.obter(rs.getInt("id_tipo_produto")),
                        daoMarca.obter(rs.getInt("id_marca")),
                        daoFoto.obter(rs.getInt("id_foto"))
                ));
            }
            stmt.close();
            conn.close();

            return produtos;
        } catch (Exception e) {
            throw e;
        }
    }

    public ArrayList<Produto> obterMaisVendidos() throws Exception {
        try {
            ArrayList<Produto> produtos = new ArrayList<Produto>();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_produto_mais_vendido()";
            PreparedStatement stmt = conn.prepareStatement(sql);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                produtos.add(new Produto(
                        rs.getInt("id_produto"),
                        rs.getString("produto"),
                        rs.getDouble("preco"),
                        rs.getString("descricao"),
                        rs.getDate("data_cadastro"),
                        rs.getBoolean("ativo"),
                        daoTipo.obter(rs.getInt("id_tipo_produto")),
                        daoMarca.obter(rs.getInt("id_marca")),
                        daoFoto.obter(rs.getInt("id_foto"))
                ));
            }
            stmt.close();
            conn.close();

            return produtos;
        } catch (Exception e) {
            throw e;
        }
    }
    
    public void deletarProduto(int idProduto) throws Exception {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "DELETE FROM produto WHERE id_produto = ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setInt(1, idProduto);
            stmt.close();
            conn.close();
        } catch (Exception e) {
            throw e;
        }
    }
}

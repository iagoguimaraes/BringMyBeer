/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import com.bmb.model.Cliente;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Iterator;

/**
 *
 * @author iago.cguimaraes
 */
public class DaoCliente {

    DaoEndereco daoEndereco = new DaoEndereco();

    public Cliente cadastrar(Cliente cliente) throws Exception {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "call cadastrar_cliente(?,?,?,?,?,?,?,?,?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setString(1, cliente.getNome());
            stmt.setString(2, cliente.getSobrenome());
            stmt.setDate(3, cliente.getDataNascimento());
            stmt.setDate(4, cliente.getDataCadastro());
            stmt.setString(5, cliente.getCpf());
            stmt.setString(6, cliente.getEmail());
            stmt.setString(7, cliente.getSenha());
            stmt.setString(8, cliente.getTelefone());
            stmt.setString(9, cliente.getCelular());

            ResultSet rs = stmt.executeQuery();
            rs.last();
            cliente.setIdCliente(rs.getInt(1));
            for (int i = 0; i < cliente.getEnderecos().size(); i++) {
                daoEndereco.cadastrar(cliente.getEnderecos().get(i), cliente.getIdCliente());
            }
            stmt.close();
            conn.close();

            return cliente;

        } catch (Exception e) {
            throw e;
        }
    }

    public static void alterar(Cliente cliente) throws Exception {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "call alterar_cliente(?,?,?,?,?,?,?,?,?,?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setInt(1, cliente.getIdCliente());
            stmt.setString(2, cliente.getNome());
            stmt.setString(3, cliente.getSobrenome());
            stmt.setDate(4, cliente.getDataNascimento());
            stmt.setDate(5, cliente.getDataCadastro());
            stmt.setString(6, cliente.getCpf());
            stmt.setString(7, cliente.getEmail());
            stmt.setString(8, cliente.getSenha());
            stmt.setString(9, cliente.getTelefone());
            stmt.setString(10, cliente.getCelular());

            stmt.execute();
            stmt.close();
            conn.close();
        } catch (Exception e) {
            throw e;
        }
    }

    public Cliente obter(int idCliente) throws Exception {
        try {
            Cliente cliente = new Cliente();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_cliente_by_id(?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setInt(1, idCliente);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                cliente = new Cliente(
                        rs.getInt("id_cliente"),
                        rs.getString("nome"),
                        rs.getString("sobrenome"),
                        rs.getDate("data_nasc"),
                        rs.getDate("data_cadastro"),
                        rs.getString("cpf"),
                        rs.getString("email"),
                        rs.getString("senha"),
                        rs.getString("telefone"),
                        rs.getString("celular"),
                        daoEndereco.obterPorCliente(rs.getInt("id_cliente")));
            }
            stmt.close();
            conn.close();

            return cliente;
        } catch (Exception e) {
            throw e;
        }
    }

    public Cliente obter(String email, String senha) throws Exception {
        try {
            Cliente cliente = new Cliente();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_cliente_by_senha(?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setString(1, email);
            stmt.setString(2, senha);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                cliente = new Cliente(
                        rs.getInt("id_cliente"),
                        rs.getString("nome"),
                        rs.getString("sobrenome"),
                        rs.getDate("data_nasc"),
                        rs.getDate("data_cadastro"),
                        rs.getString("cpf"),
                        rs.getString("email"),
                        rs.getString("senha"),
                        rs.getString("telefone"),
                        rs.getString("celular"),
                        daoEndereco.obterPorCliente(rs.getInt("id_cliente")));
            }
            stmt.close();
            conn.close();

            return cliente;
        } catch (Exception e) {
            throw e;
        }
    }
    
    
}

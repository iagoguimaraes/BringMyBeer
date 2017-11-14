/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import com.bmb.model.Endereco;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author iago.cguimaraes
 */
public class DaoEndereco {

    DaoCliente daoCliente = new DaoCliente();

    public Endereco cadastrar(Endereco endereco, int idCliente) throws Exception {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "call cadastrar_endereco(?,?,?,?,?,?,?,?,?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setString(1, endereco.getLogradouro());
            stmt.setString(2, endereco.getComplemento());
            stmt.setInt(3, endereco.getNumero());
            stmt.setString(4, endereco.getBairro());
            stmt.setString(5, endereco.getCidade());
            stmt.setString(6, endereco.getEstado());
            stmt.setString(7, endereco.getCep());
            stmt.setBoolean(8, endereco.isPrincipal());
            stmt.setInt(9, idCliente);

            ResultSet rs = stmt.executeQuery();
            rs.last();
            endereco.setIdEndereco(rs.getInt(1));

            stmt.close();
            conn.close();

            return endereco;

        } catch (Exception e) {
            throw e;
        }
    }

    public void alterar(Endereco endereco) throws Exception {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "call alterar_endereco(?,?,?,?,?,?,?,?,?,?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setInt(1, endereco.getIdEndereco());
            stmt.setString(2, endereco.getLogradouro());
            stmt.setString(3, endereco.getComplemento());
            stmt.setInt(4, endereco.getNumero());
            stmt.setString(5, endereco.getBairro());
            stmt.setString(6, endereco.getCidade());
            stmt.setString(7, endereco.getEstado());
            stmt.setString(8, endereco.getCep());
            stmt.setBoolean(9, endereco.isPrincipal());

            stmt.execute();
            stmt.close();
            conn.close();
        } catch (Exception e) {
            throw e;
        }
    }

    public void remover(int id) throws Exception {
        try {
            Connection conn = SQLConnection.getConexao();
            String sql = "call remover_endereco(?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setInt(1, id);
            stmt.execute();
            stmt.close();
            conn.close();
        } catch (Exception e) {
            throw e;
        }
    }

    public Endereco obter(int idEndereco) throws Exception {
        try {
            Endereco endereco = new Endereco();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_endereco_by_id(?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setInt(1, idEndereco);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                endereco = new Endereco(
                        rs.getInt("id_endereco"),
                        rs.getString("logradouro"),
                        rs.getString("complemento"),
                        rs.getInt("numero"),
                        rs.getString("bairro"),
                        rs.getString("cidade"),
                        rs.getString("estado"),
                        rs.getString("cep"),
                        rs.getBoolean("principal"));
            }
            stmt.close();
            conn.close();

            return endereco;
        } catch (Exception e) {
            throw e;
        }
    }

    public ArrayList<Endereco> obterPorCliente(int idCliente) throws Exception {
        try {
            ArrayList<Endereco> enderecos = new ArrayList<Endereco>();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_endereco_by_cliente(?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setInt(1, idCliente);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                enderecos.add(new Endereco(
                        rs.getInt("id_endereco"),
                        rs.getString("logradouro"),
                        rs.getString("complemento"),
                        rs.getInt("numero"),
                        rs.getString("bairro"),
                        rs.getString("cidade"),
                        rs.getString("estado"),
                        rs.getString("cep"),
                        rs.getBoolean("principal")));
            }
            stmt.close();
            conn.close();

            return enderecos;
        } catch (Exception e) {
            throw e;
        }
    }

}

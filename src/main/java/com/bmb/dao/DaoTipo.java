/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import com.bmb.model.Tipo;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;


/**
 *
 * @author Luis Henrique Lima
 */
public class DaoTipo {
    
    public static void cadastrarTipo(Tipo tipo){
        try{
            Connection conn = SQLConnection.getConexao();
            String sql = "INSERT INTO tipo_produto(tipo) VALUES (?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, tipo.getTipo());
            stmt.execute();
            stmt.close();
            conn.close();
            
        }catch(Exception e){
            System.out.println("Não foi possível cadastrar o tipo");
        }
    }
    
    public static void alterarTipo(Tipo tipo){
    	try{
            Connection conn = SQLConnection.getConexao();
            String sql = "UPDATE tipo_produto SET tipo = ? WHERE id_tipo_produto = ?" ;
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, tipo.getTipo());
            stmt.setInt(2, tipo.getIdTipo());
            stmt.execute();
            stmt.close();
            conn.close();
    	}catch(Exception e){
    		System.out.println("Não foi possível alterar o tipo");
    	}
    }
    
    public static Tipo obter(int idTipo) throws Exception{
    	try{
            Tipo tipoProduto = new Tipo();
            Connection conn = SQLConnection.getConexao();
            String sql = "SELECT * FROM tipo_produto WHERE id_tipo_produto = ?" ;
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setInt(1, idTipo);
            
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                tipoProduto = new Tipo(
                        rs.getInt("id_tipo_produto"),
                        rs.getString("tipo"));
            }
            stmt.close();
            conn.close();
            
            return tipoProduto;
    	} catch(Exception e){
    		throw e;
    	}
    }
    
    public static List<Tipo> obter() throws Exception{
        try{
        ArrayList<Tipo> tipos = new ArrayList<Tipo>();
            Connection conn = SQLConnection.getConexao();
            String sql = "SELECT * FROM tipo_produto";
            PreparedStatement stmt = conn.prepareStatement(sql);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                tipos.add(new Tipo(
                        rs.getInt("id_tipo_produto"),
                        rs.getString("tipo")));
            }
            stmt.close();
            conn.close();

            return tipos;
        } catch (Exception e) {
            throw e;
        }
    }
    
    public static void deletarTipo(int idTipo){
        try{
            Tipo tipoProduto = new Tipo();
            Connection conn = SQLConnection.getConexao();
            String sql = "DELETE FROM tipo_produto WHERE id_tipo_produto = ?" ;
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setInt(1, idTipo);
            stmt.close();
            conn.close();
        }catch(Exception e){
            
        }
    }
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import com.bmb.model.Tipo;
import java.sql.Connection;
import java.sql.PreparedStatement;
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
            String sql = "Inserir query";
            PreparedStatement stmt = conn.prepareStatement(sql);

    	}catch(Exception e){
    		System.out.println("Não foi possível alterar o tipo");
    	}
    }
    
//    public static Tipo obter(int idTipo){
//    	try{
//        
//    	} catch(Exception e){
//    		System.out.println("Não foi possível obter o tipo");
//    	}
//    }
//    
//    public static List<Tipo> obter(){
//    	List<Tipo> tiposCadastrados = new ArrayList<>();
//    	try{
//    		tiposCadastrados = tipos;
//    	}catch(Exception e){
//    		System.out.println("Não foi possível obter os tipos");
//    	}
//    	return tiposCadastrados;
//    }
//    
//    public static void deletarTipo(int idTipo){
//    	try{
//    		for(int i = 0; i < tipos.size(); i++){
//    			if(tipos.get(i).getIdTipo() == idTipo){
//    				tipos.remove(i);
//    				break;
//    			} 
//    		}
//    	} catch(Exception e){
//    		System.out.println("Não foi possível remover o tipo");
//    	}
//    }
}

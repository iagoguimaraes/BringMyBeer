/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import com.bmb.model.Tipo;
import java.util.ArrayList;
import java.util.List;


/**
 *
 * @author Luis Henrique Lima
 */
public class DaoTipo {
    
    static List<Tipo> tipos = new ArrayList<>();
    
    
    public static void cadastrarTipo(Tipo tipo){
        try{
            tipos.add(tipo);
        }catch(Exception e){
            System.out.println("Não foi possível cadastrar o tipo");
        }
    }
    
    public static void alterarTipo(Tipo tipo){
    	try{
    		for(int i = 0; i < tipos.size(); i++){
    			if(tipos.get(i).getIdTipo() == (tipo.getIdTipo())){
    				tipos.add(i, tipo);
    				break;
    			}
    		}
    	}catch(Exception e){
    		System.out.println("Não foi possível alterar o tipo");
    	}
    }
    
    public static Tipo obter(int idTipo){
    	Tipo tipo = new Tipo();

    	try{
    		for(int i = 0; i < tipos.size(); i++){
    			if(tipos.get(i).getIdTipo() == idTipo){
    				tipo = tipos.get(i);
    				break;
    			} 
    		}
    	} catch(Exception e){
    		System.out.println("Não foi possível obter o tipo");
    	}
    	return tipo;
    }
    
    public static List<Tipo> obter(){
    	List<Tipo> tiposCadastrados = new ArrayList<>();
    	try{
    		tiposCadastrados = tipos;
    	}catch(Exception e){
    		System.out.println("Não foi possível obter os tipos");
    	}
    	return tiposCadastrados;
    }
    
    public static void deletarTipo(int idTipo){
    	try{
    		for(int i = 0; i < tipos.size(); i++){
    			if(tipos.get(i).getIdTipo() == idTipo){
    				tipos.remove(i);
    				break;
    			} 
    		}
    	} catch(Exception e){
    		System.out.println("Não foi possível remover o tipo");
    	}
    }
}

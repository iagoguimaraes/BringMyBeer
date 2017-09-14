/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.controller;

import com.bmb.dao.DaoTipo;
import com.bmb.model.Tipo;

/**
 *
 * @author Luis Henrique Lima
 */
public class ControllerTipo {
    public static void cadastrarTipo(Tipo tipo){
    	try{
    		DaoTipo.cadastrarTipo(tipo);
    	}catch(Exception e){
    		System.out.println("Não foi possível fazer a chamada do método 'cadastrar'" + "/n"+ e);
    	}
    }
    
    public static void alterarTipo(Tipo tipo){
    	try{
    		DaoTipo.alterarTipo(tipo);
    	}catch(Exception e){
    		System.out.println("Não foi possível fazer a chamada do método 'alterar'" + "/n"+ e);
    	}
    }
    
    public static void deletarTipo(int idTipo){
    	try{
    		DaoTipo.deletarTipo(idTipo);
    	}catch(Exception e){
    		System.out.println("Não foi possível deletar o tipo com ID: "+ idTipo + "/n" + e);
    	}
    }
    
    public static void obter(int idTipo){
    	try{
    		DaoTipo.obter(idTipo);
    	}catch(Exception e){
    		System.out.println("Não foi possível fazer a chamada do método 'obter' através do ID: "+ idTipo  + "/n"+ e);
    	}
    }
    
    public static void obter(){
    	try{
    		DaoTipo.obter();
    	}catch(Exception e){
    		System.out.println("Não foi possível fazer a chamada dod método 'obter lista de Tipos'" + "/n"+ e);
    	}
    }
}
